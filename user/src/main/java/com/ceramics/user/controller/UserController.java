package com.ceramics.user.controller;

import Result.R;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.ceramics.user.Service.imp.UserService;
import com.ceramics.user.dao.User;
import com.ceramics.user.dao.UserDto;
import com.ceramics.user.dao.UserEnroll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
    @GetMapping("/login")
    public R<String> login(String username, String password){
        if(userService.login(username,password)){
            return R.success("登录成功");
        }
        else{
            return R.error("用户名密码错误或账号已被冻结");
        }
    }
    @PostMapping("/enroll")
    public R<String> enroll(@RequestBody UserEnroll userEnroll){
        if(userService.enroll(userEnroll)){
            return R.success("注册成功");
        }
        else{
            return R.error("注册失败");
        }
    }
    @PostMapping("/update")
    public R<String> update(@RequestBody User user){
        System.out.println(user);
        userService.update(user);
        return R.success("修改成功");
    }
    @GetMapping("/page")
    public R<IPage<User>> getpage(int page,int pageSize,@RequestParam(required = false)String username){
        return userService.getpage(page,pageSize,username);
    }
    @GetMapping("/status")
    public R<String> changestatus(int id){
        return userService.changestatus(id);
    }
    @GetMapping("/getuser")
    public R<UserDto> getuserdto(String username){
        return userService.getuser(username);
    }
    @GetMapping("/login/admin")
    public R<String> adminlogin(String username,String password){
        return userService.adminlogin(username,password);
    }
    @GetMapping("/liked")
    public R<String> liked(String username,String username1){
        return userService.liked(username,username1);
    }
    @GetMapping("/get/all")
    public R<List<User>> getall(){
        return userService.getall();
    }
    @GetMapping("/get/head")
    public R<String> gethead(String username){
        return userService.gethead(username);
    }
    @GetMapping("/get/encode")
    public R<String> getencode(String email){
        return userService.getencode(email);
    }
}
