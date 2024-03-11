package com.ceramics.user.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ceramics.user.dao.UserMessage;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMessageMapper extends BaseMapper<UserMessage> {
}
