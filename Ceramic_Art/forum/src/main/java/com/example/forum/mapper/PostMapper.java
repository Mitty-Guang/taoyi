package com.example.forum.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.forum.dao.Post;
import javafx.geometry.Pos;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PostMapper extends BaseMapper<Post> {
    @Select("select * from  post where status=0 order by id desc limit #{page},#{pageSize} ")
    public List<Post> getByPage(int page,int pageSize);
    @Select("select * from  post where title like concat('%',#{name},'%') and status=0 order by id desc limit #{page},#{pageSize}")
    public List<Post> getByPage1(int page, int pageSize, @Param("name") String name);
}
