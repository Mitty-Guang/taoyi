package com.example.forum.dao;

import lombok.Data;

@Data
public class UserMessage {
    int id;
    String message;
    String username;
    int status;
}
