package com.ceramics.user.dao;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class User {
    @TableId(type = IdType.AUTO)
    int id;
    String name;
    String password;
    String head;
    int status;
    int role;
    String email;
}
