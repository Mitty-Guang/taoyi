package com.ceramics.user.Service.imp;
import Result.R;
import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.lang.Validator;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.ceramics.user.Service.UserInterface;
import com.ceramics.user.dao.User;
import com.ceramics.user.dao.UserDto;
import com.ceramics.user.dao.UserEnroll;
import com.ceramics.user.mapper.UserMapper;


import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.List;
import java.util.Objects;

@Service
public class UserService implements UserInterface {
    @Autowired
    UserMapper userMapper;
    @Autowired
    RabbitTemplate rabbitTemplate;
    @Autowired
    StringRedisTemplate stringRedisTemplate;
    @Override
    public boolean login(String username, String password) {
        QueryWrapper<User> userQueryWrapper=new QueryWrapper<User>();
        userQueryWrapper.lambda().eq(User::getName,username);
        User user=userMapper.selectOne(userQueryWrapper);
        if(user==null){
            return false;
        }
        if(user.getStatus()==0){
            return false;
        }
        else{
            password=DigestUtils.md5DigestAsHex(password.getBytes());
            return user.getPassword().equals(password);
        }
    }

    @Override
    public boolean enroll(UserEnroll userEnroll) {
        String key="user:encode:"+userEnroll.getEmail();
        String s = stringRedisTemplate.opsForValue().get(key);
        if(!Validator.isEmail(userEnroll.getEmail())){
            return false;
        }
        QueryWrapper<User> userQueryWrapper1=new QueryWrapper<User>();
        userQueryWrapper1.lambda().eq(User::getEmail,userEnroll.getEmail());
        User user2=userMapper.selectOne(userQueryWrapper1);
        if(user2!=null){
            return false;
        }
        if(!Objects.equals(s, userEnroll.getEncode())){
            return false;
        }
        QueryWrapper<User> userQueryWrapper=new QueryWrapper<User>();
        userQueryWrapper.lambda().eq(User::getName,userEnroll.getName());
        User user1=userMapper.selectOne(userQueryWrapper);
        if(user1==null){
            String password = userEnroll.getPassword();
            password= DigestUtils.md5DigestAsHex(password.getBytes());
            User user=new User();
            user.setPassword(password);
            user.setStatus(1);
            user.setRole(0);
            user.setName(userEnroll.getName());
            user.setEmail(userEnroll.getEmail());
            user.setHead("https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/exampledir/82a1c5dd-12c7-43c5-90e1-e6e9ecb17dcf_008de18741a7e824aca538094c8724d.jpg");
            userMapper.insert(user);
            return true;
        }
        else{
            return false;
        }
    }

    @Override
    public void update(User user) {
        if(user.getPassword()!=null){
            String password=DigestUtils.md5DigestAsHex(user.getPassword().getBytes());
            user.setPassword(password);
        }
        user.setStatus(1);
        userMapper.updateById(user);
    }

    @Override
    public R<IPage<User>> getpage(int page, int pageSize, String username) {
        IPage<User> iPage=new Page<>(page,pageSize);
        QueryWrapper<User> qw=new QueryWrapper<>();
        if(username!=null){
            qw.lambda().like(User::getName,username);
        }
        qw.lambda().eq(User::getRole,0);
        userMapper.selectPage(iPage,qw);
        return R.success(iPage);
    }

    @Override
    public R<String> changestatus(int id) {
        QueryWrapper<User> userQueryWrapper=new QueryWrapper<>();
        userQueryWrapper.lambda().eq(User::getId,id);
        User user=userMapper.selectOne(userQueryWrapper);
        user.setStatus(user.getStatus()==0 ? 1 : 0);
        userMapper.updateById(user);
        if(user.getEmail()!=null){
        if(user.getStatus()==0){
            rabbitTemplate.convertAndSend("mes_exchange","freeze",user.getEmail());
        }
        else if(user.getStatus()==1){
            rabbitTemplate.convertAndSend("mes_exchange","unfreeze",user.getEmail());
        }
        }
        return R.success("修改状态成功");
    }

    @Override
    public R<UserDto> getuser(String username) {
        QueryWrapper<User> userQueryWrapper=new QueryWrapper<>();
        userQueryWrapper.lambda().eq(User::getName,username);
        User user=userMapper.selectOne(userQueryWrapper);
        UserDto userDto = BeanUtil.copyProperties(user, UserDto.class);
        return R.success(userDto);
    }

    @Override
    public R<String> adminlogin(String username, String password) {
        QueryWrapper<User> userQueryWrapper=new QueryWrapper<User>();
        userQueryWrapper.lambda().eq(User::getName,username);
        User user=userMapper.selectOne(userQueryWrapper);
        if(user==null){
            return R.error("登录失败");
        }
        if(user.getRole()!=1&&user.getRole()!=2){
            return R.error("不符合权限");
        }
        else{
            password=DigestUtils.md5DigestAsHex(password.getBytes());
            if(user.getPassword().equals(password)){
                return R.success(user.getRole()+"");
            }
            else{
                return R.error("密码错误");
            }
        }
    }

    @Override
    public R<String> liked(String username, String username1) {
        return null;
    }



    public R<List<User>> getall() {
        QueryWrapper<User> qw=new QueryWrapper<>();
        return R.success(userMapper.selectList(qw));
    }

    @Override
    public R<String> gethead(String username) {
        System.out.println(username);
        QueryWrapper<User> qw=new QueryWrapper<>();
        qw.lambda().eq(User::getName,username);
        User user=userMapper.selectOne(qw);
        System.out.println(user);
        return R.success(user.getHead());
    }

    @Override
    public R<String> getencode(String email) {
        rabbitTemplate.convertAndSend("user_get_encode","encode",email);
        return R.success("获取验证码成功");
    }

}
