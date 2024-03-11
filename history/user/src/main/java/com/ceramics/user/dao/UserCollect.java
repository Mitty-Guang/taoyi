package com.ceramics.user.dao;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("usercollect")
public class UserCollect {
    @TableId(type = IdType.AUTO)
    int id;
    String username;
    String title;
    String url;
}
