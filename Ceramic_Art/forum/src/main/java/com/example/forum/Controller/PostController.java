package com.example.forum.Controller;

import Result.R;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.example.forum.Service.imp.PostService;
import com.example.forum.dao.Comment;
import com.example.forum.dao.Post;
import com.example.forum.dao.UserPost;
import com.example.forum.mapper.CommentMapper;
import com.example.forum.mapper.PostMapper;
import javafx.geometry.Pos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/forum/post")
public class PostController {
    @Autowired
    PostMapper postMapper;
    @Autowired
    PostService postService;
    @Autowired
    CommentMapper commentMapper;
    @PostMapping("/add")
    public R<String> addpost(@RequestBody Post post){
        return postService.add(post);
    }
    @GetMapping("/page")
    public R<List<Post>> selectBypage(int page,int pageSize,@RequestParam(required = false) String name,@RequestParam(required = false) String username){
        return R.success(postService.selectBypage(page,pageSize,name,username));
    }
    @GetMapping("/add/up")
    public R<String> addup(int id,@RequestParam(required = false) String username){
        return postService.addup(id,username);
    }
    @GetMapping("/del")
    public R<String> del(int id){
        return postService.del(id);
    }
    @GetMapping("/delete")
    public R<String> delete(int id){
        postMapper.deleteById(id);
        QueryWrapper<Comment> commentQueryWrapper=new QueryWrapper<>();
        commentQueryWrapper.lambda().eq(Comment::getPostId,id);
        commentMapper.delete(commentQueryWrapper);
        return R.success("删除成功");
    }
    @GetMapping("/top")
    public R<List<Post>> gettop(){
        return R.success(postService.gettop());
    }
    @GetMapping("/hot")
    public R<List<Post>> gethot(){
        return R.success(postService.gethot());
    }
    @GetMapping("/count")
    public R<Integer> count(){
        return postService.count();
    }
    @GetMapping("/all")
    public R<List<Post>> getall(){
        return postService.getall();
    }
    @GetMapping("/changestatus")
    public R<String> changestatus(Integer id){
        return postService.changestatus(id);
    }
    @GetMapping("/get/one")
    public R<Post> getone(Integer id){
        return postService.getone(id);
    }
}
