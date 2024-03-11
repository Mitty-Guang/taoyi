package com.example.forum.Service.imp;

import Result.R;
import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.BooleanUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.forum.Feign.UserFeign;
import com.example.forum.Service.CommentInterface;
import com.example.forum.dao.Comment;
import com.example.forum.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CommentService implements CommentInterface {
    @Autowired
    StringRedisTemplate stringRedisTemplate;
    @Autowired
    CommentMapper commentMapper;
    @Autowired
    UserFeign userFeign;
    @Override
    public R<String> add(Comment comment) {
        if(comment.getUsername()==null){
            return R.error("必须登陆了才能评论");
        }
        commentMapper.insert(comment);
        return R.success("成功评论");
    }

    @Override
    public R<String> addup(int id,String username) {
        if(username==null|| username.equals("")){
            return R.error("未登录不能点赞");
        }
        String key="comment:up:"+id;
        Boolean member = stringRedisTemplate.opsForSet().isMember(key, username);
        QueryWrapper<Comment> qw=new QueryWrapper<>();
        qw.lambda().eq(Comment::getId,id);
        Comment comment=commentMapper.selectOne(qw);
        if(BooleanUtil.isTrue(member)){
            comment.setUp(comment.getUp()-1);
            commentMapper.updateById(comment);
            stringRedisTemplate.opsForSet().remove(key,username);
            return R.success("取消点赞成功");
        }
        else{
            comment.setUp(comment.getUp()+1);
            commentMapper.updateById(comment);
            stringRedisTemplate.opsForSet().add(key,username);
            return R.success("成功点赞");
        }
    }

    @Override
    public R<List<Comment>> selectpage(int id,String username) {
        QueryWrapper<Comment> qw=new QueryWrapper<>();
        qw.lambda().eq(Comment::getPostId,id);
        List<Comment> comments=commentMapper.selectList(qw);
        comments=comments.stream().map(comment -> {
            QueryWrapper<Comment> qw1=new QueryWrapper<>();
            qw1.lambda().eq(Comment::getComment,comment.getId());
            List<Comment> comments1=commentMapper.selectList(qw1);
            comment.setComments(comments1);
            if(username!=null){
            String key="comment:up:"+comment.getId();
            Boolean liked=stringRedisTemplate.opsForSet().isMember(key,username);
            comment.setIslike(BooleanUtil.isTrue(liked));}
            else{
                comment.setIslike(false);
            }
            String head=userFeign.gethead(comment.getUsername()).getData();
            comment.setHead(head);
            return comment;
        }).collect(Collectors.toList());
        Collections.reverse(comments);
        System.out.println(comments);
        return R.success(comments);
    }


    @Override
    public R<Integer> count(int id) {
        QueryWrapper<Comment> qw=new QueryWrapper<>();
        qw.lambda().eq(Comment::getPostId,id);
        Integer res=commentMapper.selectList(qw).size();
        return R.success(res);
    }



}
