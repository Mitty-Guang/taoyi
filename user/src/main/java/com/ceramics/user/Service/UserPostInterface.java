package com.ceramics.user.Service;

import Result.R;
import com.ceramics.user.dao.UserPost;

import java.util.List;

public interface UserPostInterface{

    List<UserPost> getall(String username);

    R<String> del(int id);

    R<String> add(UserPost userPost);

    R<Integer> count(String username);

    R<String> delete(int id);
}
