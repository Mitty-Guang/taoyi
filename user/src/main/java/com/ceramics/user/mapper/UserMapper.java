package com.ceramics.user.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ceramics.user.dao.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
