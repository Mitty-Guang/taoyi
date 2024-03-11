package com.ceramics.user.Service.imp;

import Result.R;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ceramics.user.Service.UserCollectInterface;
import com.ceramics.user.dao.UserCollect;
import com.ceramics.user.dao.UserPost;
import com.ceramics.user.mapper.UserCollectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserCollectService implements UserCollectInterface {
    @Autowired
    UserCollectMapper userCollectMapper;
    @Override
    public R<List<UserCollect>> getall(String username) {
        QueryWrapper<UserCollect> qw=new QueryWrapper<>();
        qw.lambda().eq(UserCollect::getUsername,username);
        List<UserCollect> userCollects=userCollectMapper.selectList(qw);
        return R.success(userCollects);
    }

    @Override
    public R<String> del(int id) {
        QueryWrapper<UserPost> qw=new QueryWrapper<>();
        userCollectMapper.deleteById(id);
        return R.success("删除成功");
    }

    @Override
    public R<String> add(UserCollect userCollect) {
        userCollectMapper.insert(userCollect);
        return R.success("添加成功");
    }

    @Override
    public R<Integer> count(String username) {
        QueryWrapper<UserCollect> qw=new QueryWrapper<>();
        qw.lambda().eq(UserCollect::getUsername,username);
        List<UserCollect> list=userCollectMapper.selectList(qw);
        return R.success(list.size());
    }

}
