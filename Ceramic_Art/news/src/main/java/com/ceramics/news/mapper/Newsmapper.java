package com.ceramics.news.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.ceramics.news.dao.News;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Newsmapper extends BaseMapper<News> {
}
