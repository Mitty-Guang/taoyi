package com.ceramics.user.Feign;

import Result.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("ceramics-forum")
public interface ForumFeign {
    @GetMapping("/forum/post/delete")
    public R<String> delete(@RequestParam(value = "id") int id);
}
