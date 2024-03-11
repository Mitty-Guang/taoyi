package com.example.forum.dao;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
public class UserPost {
    int id;
    String username;
    @TableField("post_id")
    int postId;
    String postname;
    String text;
}
