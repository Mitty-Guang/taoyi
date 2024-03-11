package com.example.forum.Service;

import Result.R;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.example.forum.dao.Comment;

import java.util.List;

public interface CommentInterface {
    R<String> add(Comment comment);

    R<String> addup(int id,String username);


    R<List<Comment>> selectpage(int id,String username);

    R<Integer> count(int id);
}
