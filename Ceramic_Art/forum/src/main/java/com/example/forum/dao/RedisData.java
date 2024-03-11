package com.example.forum.dao;

import lombok.Data;

import java.time.LocalDateTime;
@Data
public class RedisData {
    String data;
    LocalDateTime expiretime;
}
