package com.ceramics.news.Controller;

import Result.R;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.ceramics.news.Service.imp.NewsService;
import com.ceramics.news.dao.News;
import jdk.internal.dynalink.linker.LinkerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {
    @Autowired
    NewsService newsService;
    @GetMapping("/hot")
    public R<List<News>> hot(){
        return newsService.gethot();
    }
    @GetMapping("/all")
    public R<IPage<News>> getall(int page,int pagesize,String name){
        return newsService.getall(page,pagesize,name);
    }
    @GetMapping("/one")
    public R<News> getone(int id,@RequestParam(required = false) String username){
        return newsService.getone(id,username);
    }
    @GetMapping("/like")
    public R<String> like(int id,@RequestParam(required = false) String username){
        return newsService.like(id,username);
    }
    @GetMapping("/get/all")
    public R<List<News>> getall1(){
        return newsService.getall1();
    }
    @GetMapping("/del")
    public R<String> del(Integer id){
        return newsService.del(id);
    }

}
