package com.ceramics.news.dao;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class News {
    @TableId(type = IdType.AUTO)
    int id;
    String title;
    String date;
    int click;
    int up;
    String text;
    String source;
    String url1;
    String url2;
    @TableField(exist = false)
    boolean islike;
}
