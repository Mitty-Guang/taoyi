package com.ceramics.user.dao;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("userpost")
public class UserPost {
    @TableId(type = IdType.AUTO)
    int id;
    String username;
    @TableField("post_id")
    int postId;
    String postname;
    String text;
}
