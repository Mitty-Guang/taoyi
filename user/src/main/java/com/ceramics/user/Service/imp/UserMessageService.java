package com.ceramics.user.Service.imp;

import Result.R;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ceramics.user.Service.UserMessageInterface;

import com.ceramics.user.dao.UserMessage;
import com.ceramics.user.mapper.UserMessageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserMessageService implements UserMessageInterface {
    @Autowired
    UserMessageMapper userMessageMapper;
    @Override
    public R<List<UserMessage>> getall(String username) {
        QueryWrapper<UserMessage> qw=new QueryWrapper<>();
        qw.lambda().eq(UserMessage::getUsername,username);
        List<UserMessage> userMessages = userMessageMapper.selectList(qw);
        return R.success(userMessages);
    }

    @Override
    public R<Integer> getnoread(String username) {
        QueryWrapper<UserMessage> qw=new QueryWrapper<>();
        qw.lambda().eq(UserMessage::getUsername,username);
        qw.lambda().eq(UserMessage::getStatus,0);
        Integer num=userMessageMapper.selectCount(qw);
        return R.success(num);
    }

    @Override
    public R<String> sethasread(String username) {
        QueryWrapper<UserMessage> qw=new QueryWrapper<>();
        qw.lambda().eq(UserMessage::getUsername,username);
        qw.lambda().eq(UserMessage::getStatus,0);
        List<UserMessage> userMessages=userMessageMapper.selectList(qw);
        for (UserMessage userMessage : userMessages) {
            userMessage.setStatus(1);
            userMessageMapper.updateById(userMessage);
        }
        return R.success("更新成功");
    }

    @Override
    public R<String> add(UserMessage userMessage) {
        userMessageMapper.insert(userMessage);
        return R.success("成功添加");
    }

    @Override
    public R<String> del(Integer id) {
        userMessageMapper.deleteById(id);
        return R.success("删除成功");
    }
}
