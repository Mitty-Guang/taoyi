package com.example.forum.dao;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.Date;

@Data
public class Post {
    @TableId(type = IdType.AUTO)
    int id;
    String title;
    String username;
    String date;
    int click;
    int type;
    int up;
    String text;
    String pic1;
    String pic2;
    @TableField(exist = false)
    boolean islike;
    @TableField(exist = false)
    int commentcount;
    @TableField(exist = false)
    String head;
    Integer status;
}
