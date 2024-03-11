package com.ceramics.user.Service;

import Result.R;
import com.ceramics.user.dao.UserMessage;

import java.util.List;


public interface UserMessageInterface {
    R<List<UserMessage>> getall(String username);

    R<Integer> getnoread(String username);

    R<String> sethasread(String username);

    R<String> add(UserMessage userMessage);

    R<String> del(Integer id);
}
