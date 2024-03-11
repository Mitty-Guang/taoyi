package com.ceramics.user.Service;

import Result.R;
import com.ceramics.user.dao.UserCollect;

import java.util.List;

public interface UserCollectInterface {
    R<List<UserCollect>> getall(String username);

    R<String> del(int id);

    R<String> add(UserCollect userCollect);

    R<Integer> count(String username);
}
