package com.ceramics.user.controller;

import Result.R;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ceramics.user.Feign.ForumFeign;
import com.ceramics.user.Service.imp.UserPostService;
import com.ceramics.user.dao.UserCollect;
import com.ceramics.user.dao.UserPost;
import com.ceramics.user.mapper.UserPostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/user/post")
public class UserPostController {
    @Autowired
    UserPostService userPostService;
    @Autowired
    ForumFeign forumFeign;
    @Autowired
    UserPostMapper userPostMapper;
    @GetMapping("/get")
    public R<List<UserPost>> getall(String username){
        return R.success(userPostService.getall(username));
    }
    @GetMapping("/del")
    public R<String> del(int id){
        return userPostService.del(id);
    }
    @RequestMapping("/delete")
    public R<String> delete(Integer id){
        return userPostService.delete(id);
    }
    @PostMapping("/add")
    public R<String> add(@RequestBody UserPost userPost){
        return userPostService.add(userPost);
    }
    @GetMapping("/count")
    public R<Integer> count(String username){
        return userPostService.count(username);
    }
}
