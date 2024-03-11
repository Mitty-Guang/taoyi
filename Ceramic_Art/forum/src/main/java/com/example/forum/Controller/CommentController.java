package com.example.forum.Controller;

import Result.R;
import com.example.forum.Service.imp.CommentService;
import com.example.forum.dao.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/forum/comment")
public class CommentController {
    @Autowired
    CommentService commentService;
    @PostMapping("/add")
    public R<String> add(@RequestBody Comment comment)
    {
        return commentService.add(comment);
    }
    @GetMapping("/count")
    public R<Integer> count(int id){
        return commentService.count(id);
    }
    @GetMapping("/add/up")
    public R<String> addup(int id,@RequestParam(required = false) String username){
        return commentService.addup(id,username);
    }
    @GetMapping("/get")
    public R<List<Comment>> get(int id,@RequestParam(required = false) String username){
        return commentService.selectpage(id,username);
    }
}
