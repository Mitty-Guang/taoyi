package com.ceramics.news.Service.imp;

import Result.R;
import cn.hutool.core.util.BooleanUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.ceramics.news.Service.NewsInterface;
import com.ceramics.news.dao.News;
import com.ceramics.news.mapper.Newsmapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService implements NewsInterface {
    @Autowired
    Newsmapper newsmapper;
    @Autowired
    StringRedisTemplate stringRedisTemplate;
    @Override
    public R<List<News>> gethot() {
        List<News> news=newsmapper.selectList(null);
        List<News> result=news.stream().sorted(Comparator.comparing(News::getClick).reversed()).collect(Collectors.toList());
        return R.success(result);
    }

    @Override
    public R<IPage<News>> getall(int page, int pagesize, String name) {
        IPage<News> iPage=new Page<>(page,pagesize);
        QueryWrapper<News> qw=new QueryWrapper<>();
        if(!(name==null)){
            qw.lambda().like(News::getTitle,name);
        }
        newsmapper.selectPage(iPage,qw);
        return R.success(iPage);
    }

    @Override
    public R<News> getone(int id,String username) {
        QueryWrapper<News> qw=new QueryWrapper<>();
        qw.lambda().eq(News::getId,id);
        News news=newsmapper.selectOne(qw);
        news.setClick(news.getClick()+1);
        newsmapper.updateById(news);
        if (username != null) {
            String key="news:up:"+id;
            Boolean member = stringRedisTemplate.opsForSet().isMember(key, username);
            news.setIslike(BooleanUtil.isTrue(member));
        }
        else{
            news.setIslike(false);
        }
        return R.success(news);
    }

    @Override
    public R<String> like(int id,String username) {
        if(username==null||username.equals("")){
            return R.error("点赞失败");
        }
        QueryWrapper<News> qw=new QueryWrapper<>();
        qw.lambda().eq(News::getId,id);
        News news=newsmapper.selectOne(qw);
        String key="news:up:"+id;
        Boolean member = stringRedisTemplate.opsForSet().isMember(key, username);
        if(BooleanUtil.isTrue(member)){
            news.setUp(news.getUp()-1);
            newsmapper.updateById(news);
            stringRedisTemplate.opsForSet().remove(key,username);
            return R.success("取消点赞成功");
        }
        else{
            news.setUp(news.getUp()+1);
            newsmapper.updateById(news);
            stringRedisTemplate.opsForSet().add(key,username);
            return R.success("点赞成功");
        }
    }

    @Override
    public R<List<News>> getall1() {
        List<News> news = newsmapper.selectList(new QueryWrapper<>());
        return R.success(news);
    }

    @Override
    public R<String> del(Integer id) {
        newsmapper.deleteById(id);
        return R.success("删除成功");
    }
}
