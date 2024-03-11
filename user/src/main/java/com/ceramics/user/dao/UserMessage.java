package com.ceramics.user.dao;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("usermessage")
public class UserMessage {
    int id;
    String message;
    String username;
    int status;
}
