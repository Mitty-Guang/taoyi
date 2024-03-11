package com.ceramics.user.Service;

import Result.R;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.ceramics.user.dao.User;
import com.ceramics.user.dao.UserDto;
import com.ceramics.user.dao.UserEnroll;
import com.ceramics.user.dao.UserPost;

import java.util.List;

public interface UserInterface {
  boolean login(String username, String password);

  boolean enroll(UserEnroll userEnroll);

  void update(User user);

    R<IPage<User>> getpage(int page, int pageSize, String username);

  R<String> changestatus(int id);

  R<UserDto> getuser(String username);

  R<String> adminlogin(String username, String password);

  R<String> liked(String username, String username1);

  R<List<User>> getall();

  R<String> gethead(String username);

  R<String> getencode(String email);

}
