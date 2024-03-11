package com.example.forum.Service.imp;

import Result.R;
import cn.hutool.core.util.BooleanUtil;
import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.forum.Feign.UserFeign;
import com.example.forum.Service.PostInterface;
import com.example.forum.dao.*;
import com.example.forum.mapper.CommentMapper;
import com.example.forum.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

@Service
public class PostService implements PostInterface {
    @Autowired
    PostMapper postMapper;
    @Autowired
    UserFeign userFeign;
    @Autowired
    CommentMapper commentMapper;
    @Autowired
    StringRedisTemplate stringRedisTemplate;
    private final static ExecutorService executorService= Executors.newFixedThreadPool(4);
    @Override
    public List<Post> selectBypage(int page, int pagesize,String name,String username) {
        List<Post> post;
        if(name!=null&&name.length()!=0){
            System.out.println(name);
            post=postMapper.getByPage1(page,pagesize,name);
        }
        else{
            post=postMapper.getByPage(page,pagesize);
        }
        if(username!=null&&!username.equals("")){
            post=post.stream().map((post1)->{
                int id=post1.getId();
                String key="post:up:"+id;
                Boolean b=stringRedisTemplate.opsForSet().isMember(key,username);
                post1.setIslike(BooleanUtil.isTrue(b));
                return post1;
            }).collect(Collectors.toList());
        }
        post=post.stream().map((post1)->{
            int id= post1.getId();
            QueryWrapper<Comment> qw1=new QueryWrapper<>();
            qw1.lambda().eq(Comment::getPostId,id);
            int count=commentMapper.selectCount(qw1);
            post1.setCommentcount(count);
            String head=userFeign.gethead(post1.getUsername()).getData();
            post1.setHead(head);
            return post1;
        }).collect(Collectors.toList());
        return post;
    }

    @Override
    public R<String> addup(int id, String username) {
        if(username==null|| username.equals("")){
            return R.success("点赞失败");
        }
        String key= "post:up:"+id;
        Boolean bo=stringRedisTemplate.opsForSet().isMember(key,username);
        QueryWrapper<Post> qw=new QueryWrapper<>();
        qw.eq("id",id);
        Post post=postMapper.selectById(id);
        if(BooleanUtil.isTrue(bo)){
            post.setUp(post.getUp()-1);
            postMapper.updateById(post);
            stringRedisTemplate.opsForSet().remove(key,username);
            return R.success("取消点赞成功");
        }
        else{
            post.setUp(post.getUp()+1);
            postMapper.updateById(post);
            stringRedisTemplate.opsForSet().add(key,username);
            return R.success("点赞成功");
        }

    }

    @Override
    public List<Post> gettop() {
        String key="post:hot:data:1";
        int type=1;
        return logicovertime(key,type);
    }

    @Override
    public R<String> add(Post post) {
          if(post.getUsername()==null){
              return R.error("未登录不能发帖");
          }

        postMapper.insert(post);
        int id=post.getId();
        UserPost userPost=new UserPost();
        if(post.getText().length()>20){
            userPost.setText(post.getText().substring(0,20));
        }
        else{
            userPost.setText(post.getText());
        }
        userPost.setUsername(post.getUsername());
        userPost.setPostname(post.getTitle());
        userPost.setPostId(id);
        userFeign.add(userPost);
        return R.success("发布成功");
    }

    @Override
    public List<Post> gethot() {
        String key="post:hot:data:0";
        int type=0;
        return logicovertime(key,type);
    }

    @Override
    public R<Integer> count() {
        QueryWrapper<Post> qw=new QueryWrapper<>();
        Integer count=postMapper.selectList(qw).size();
        return R.success(count);
    }

    @Override
    @Transactional
    public R<String> del(int id) {
        postMapper.deleteById(id);
        userFeign.delete(id);
        QueryWrapper<Comment> commentQueryWrapper=new QueryWrapper<>();
        commentQueryWrapper.lambda().eq(Comment::getPostId,id);
        commentMapper.delete(commentQueryWrapper);
        return R.success("删除成功");
    }

    @Override
    public R<List<Post>> getall() {
        List<Post> posts = postMapper.selectList(new QueryWrapper<>());
        return R.success(posts);
    }

    @Override
    @Transactional
    public R<String> changestatus(Integer id) {
        Post post = postMapper.selectById(id);
        post.setStatus(post.getStatus()==1 ? 0 : 1);
        postMapper.updateById(post);
        UserMessage userMessage=new UserMessage();
        userMessage.setUsername(post.getUsername());
        String message="";
        if(post.getStatus()==0){
            message="您标题为"+post.getTitle()+"的帖子已经正常通过审核";
        }
        else if(post.getStatus()==1){
            message="您标题为"+post.getTitle()+"的帖子因为发布内容不符合要求，已经被下架，请联系管理员解决";
        }
        userMessage.setMessage(message);
        userMessage.setStatus(0);
        userFeign.addmessage(JSONUtil.toJsonStr(userMessage));
        return R.success("更新成功");
    }

    @Override
    public R<Post> getone(Integer id) {
        Post post=postMapper.selectById(id);
        return R.success(post);
    }


    private List<Post> logicovertime(String key,int type){
        String s = stringRedisTemplate.opsForValue().get(key);
        if(s==null||s.isEmpty()){
            QueryWrapper<Post> qw=new QueryWrapper<>();
            qw.lambda().eq(Post::getType,type);
            qw.lambda().eq(Post::getStatus,0);
            List<Post> posts=postMapper.selectList(qw);
            List<Post> res=posts.stream().sorted(Comparator.comparing(Post::getUp).reversed()).limit(5).collect(Collectors.toList());
            String json=JSONUtil.toJsonStr(res);
            LocalDateTime expiretime=LocalDateTime.now().plusMinutes(3);
            RedisData redisData=new RedisData();
            redisData.setData(json);
            redisData.setExpiretime(expiretime);
            String json1=JSONUtil.toJsonStr(redisData);
            stringRedisTemplate.opsForValue().set(key,json1);
            return res;
        }
        else{
            RedisData redisData = JSONUtil.toBean(s, RedisData.class);
            if(redisData.getExpiretime().isBefore(LocalDateTime.now())){
                String key1="post:hot:lock:"+type;
                boolean trylock = trylock(key1);
                if(trylock){
                    try {
                        executorService.submit(()->{
                            QueryWrapper<Post> qw=new QueryWrapper<>();
                            qw.lambda().eq(Post::getType,type);
                            qw.lambda().eq(Post::getStatus,0);
                            List<Post> posts=postMapper.selectList(qw);
                            List<Post> res=posts.stream().sorted(Comparator.comparing(Post::getUp).reversed()).limit(5).collect(Collectors.toList());
                            String json=JSONUtil.toJsonStr(res);
                            LocalDateTime expiretime=LocalDateTime.now().plusMinutes(3);
                            RedisData redisData1=new RedisData();
                            redisData1.setData(json);
                            redisData1.setExpiretime(expiretime);
                            String json1=JSONUtil.toJsonStr(redisData1);
                            stringRedisTemplate.opsForValue().set(key,json1);
                        });
                    }
                    finally {
                        releaselock(key1);
                    }
                }
            }
            List<Post> posts = JSONUtil.toList(redisData.getData(), Post.class);
            return posts;
        }
    }
    private boolean trylock(String key){
        Boolean aBoolean = stringRedisTemplate.opsForValue().setIfAbsent(key, "1");
        return BooleanUtil.isTrue(aBoolean);
    }
    private void releaselock(String key){
        stringRedisTemplate.delete(key);
    }

}
