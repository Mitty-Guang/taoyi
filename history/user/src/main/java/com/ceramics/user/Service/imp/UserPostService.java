package com.ceramics.user.Service.imp;

import Result.R;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ceramics.user.Feign.ForumFeign;
import com.ceramics.user.Service.UserPostInterface;
import com.ceramics.user.dao.UserCollect;
import com.ceramics.user.dao.UserPost;
import com.ceramics.user.mapper.UserPostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class UserPostService implements UserPostInterface {
    @Autowired
    UserPostMapper userPostMapper;
    @Autowired
    ForumFeign forumFeign;
    @Override
    public List<UserPost> getall(String username) {
        QueryWrapper<UserPost> qw=new QueryWrapper<>();
        qw.lambda().eq(UserPost::getUsername,username);
        List<UserPost> userPosts=userPostMapper.selectList(qw);
        return userPosts;
    }

    @Override
    public R<String> del(int id) {
        QueryWrapper<UserPost> qw=new QueryWrapper<>();
        qw.lambda().eq(UserPost::getId,id);
        UserPost userPost=userPostMapper.selectOne(qw);
        userPostMapper.deleteById(id);
        forumFeign.delete(userPost.getPostId());
        return R.success("删除成功");
    }

    @Override
    public R<String> add(UserPost userPost) {
        userPostMapper.insert(userPost);
        return R.success("添加成功");
    }

    @Override
    public R<Integer> count(String username) {
        QueryWrapper<UserPost> qw=new QueryWrapper<>();
        qw.lambda().eq(UserPost::getUsername,username);
        List<UserPost> list=userPostMapper.selectList(qw);
        return R.success(list.size());
    }

    @Override
    public R<String> delete(int id) {
        QueryWrapper<UserPost> qw=new QueryWrapper<>();
        qw.lambda().eq(UserPost::getPostId,id);
        userPostMapper.delete(qw);
        return R.success("删除成功");
    }
}
