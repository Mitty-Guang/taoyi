package com.example.forum.dao;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Comment {
    @TableId(type = IdType.AUTO)
    int id;
    @TableField("post_id")
    int postId;
    String username;
    String text;
    String date;
    int comment;
    int up;
    @TableField(exist = false)
    List<Comment> comments;
    @TableField(exist = false)
    boolean islike;
    @TableField(exist = false)
    String head;
}
