package com.ceramics.user.controller;

import Result.R;
import com.ceramics.user.Service.imp.UserCollectService;
import com.ceramics.user.dao.UserCollect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/user/collect")
public class UserCollectController {
    @Autowired
    UserCollectService userCollectService;
    @GetMapping("/get")
    public R<List<UserCollect>> getall(String username){
        return userCollectService.getall(username);
    }
    @GetMapping("/del")
    public R<String> del(int id){
        return userCollectService.del(id);
    }
    @PostMapping("/add")
    public R<String> add(@RequestBody UserCollect userCollect){
        return userCollectService.add(userCollect);
    }
    @GetMapping("/count")
    public R<Integer> count(String username){

        return userCollectService.count(username);
    }
}
