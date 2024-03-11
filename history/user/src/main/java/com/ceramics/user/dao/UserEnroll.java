package com.ceramics.user.dao;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class UserEnroll {
    String name;
    String password;
    String email;
    String encode;
}
