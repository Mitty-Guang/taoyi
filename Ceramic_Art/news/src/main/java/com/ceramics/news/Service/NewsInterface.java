package com.ceramics.news.Service;

import Result.R;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.ceramics.news.dao.News;

import java.util.List;

public interface NewsInterface {
    R<List<News>> gethot();


    R<IPage<News>> getall(int page, int pagesize, String name);

    R<News> getone(int id,String username);

    R<String> like(int id,String username);

    R<List<News>> getall1();

    R<String> del(Integer id);
}
