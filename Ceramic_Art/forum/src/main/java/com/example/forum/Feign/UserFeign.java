package com.example.forum.Feign;

import Result.R;
import com.example.forum.dao.UserMessage;
import com.example.forum.dao.UserPost;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient("ceramics-user")
public interface UserFeign {
    @PostMapping("/user/post/add")
    public R<String> add(@RequestBody UserPost userPost);
    @RequestMapping("/user/post/delete")
    public R<String> delete(@RequestParam(value = "id")Integer id);
    @GetMapping("/user/get/head")
    public R<String> gethead(@RequestParam(value = "username")String username);
    @GetMapping("/user/message/addmessage")
    public R<String> addmessage(@RequestParam(value = "message")String message);

}
