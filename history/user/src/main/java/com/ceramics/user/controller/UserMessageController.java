package com.ceramics.user.controller;

import Result.R;
import cn.hutool.json.JSONUtil;
import com.ceramics.user.Service.imp.UserMessageService;
import com.ceramics.user.dao.UserMessage;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/message")
public class UserMessageController {
    @Autowired
    UserMessageService userMessageService;
    @GetMapping("/all")
    public R<List<UserMessage>> getall(String username){
        return userMessageService.getall(username);
    }
    @GetMapping("/noread")
    public R<Integer> getnoread(String username){
        return userMessageService.getnoread(username);
    }
    @GetMapping("/hasread")
    public R<String> sethasread(String username){
        return userMessageService.sethasread(username);
    }
    @GetMapping("/addmessage")
    public R<String> addmessage(String message){
        return userMessageService.add(JSONUtil.toBean(message,UserMessage.class));
    }
    @GetMapping("/del")
    public R<String> del(Integer id){
        return userMessageService.del(id);
    }
}