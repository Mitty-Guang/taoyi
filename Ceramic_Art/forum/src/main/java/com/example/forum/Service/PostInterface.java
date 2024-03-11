package com.example.forum.Service;

import Result.R;
import com.example.forum.dao.Post;

import java.util.List;

public interface PostInterface {
    public List<Post> selectBypage(int page,int pagesize,String name,String username);
    public R<String> addup(int id, String username);
    public List<Post> gettop();

    R<String> add(Post post);

    public List<Post> gethot();

    R<Integer> count();

    R<String> del(int id);

    R<List<Post>> getall();

    R<String> changestatus(Integer id);

    R<Post> getone(Integer id);
}
