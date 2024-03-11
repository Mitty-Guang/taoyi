<template>
  <div class="forum">
    <el-header>
      <el-menu
        :default-active="$router.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#c6ad8b"
        text-color="#000"
        active-text-color="#000"
        router
      >
        <el-menu-item index="/" style="float:left;">
          <img src="../assets/images/taoci_black.png" style="height: 80%; " />
        </el-menu-item>
        <div
          style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%);"
        >
          <el-menu-item index="/news" style="float: left;">
            <span class="menutitle">新闻</span>
          </el-menu-item>
          <el-submenu index="3" style="float: left;">
            <template slot="title">
              <span class="menutitle">介绍</span>
            </template>
            <el-menu-item index="/history">
              <span class="menutitle" style="font-size: 120%;">历史</span>
            </el-menu-item>
            <el-menu-item index="/classes">
              <span class="menutitle" style="font-size: 120%;">分类</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="4" style="float: left;">
            <span class="menutitle">教程</span>
          </el-menu-item>
          <el-menu-item index="5" style="float: left;"
            ><span class="menutitle">论坛</span></el-menu-item
          >
        </div>
        <el-menu-item index="/user" style="float:right;">
          <img src="../assets/logo.png" style="height: 80%; " />
        </el-menu-item>
      </el-menu>
    </el-header>
    <div class="forum-head">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">论坛</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="forum-content">
      <div class="forum-leftcontent" style="background-color: #f0eae2;">
        <!-- <div>侧边栏</div> -->
      </div>
      <div class="forum-centercontent">
        <div class="forum-centercard">
          <el-card>
            <div style="margin:10px auto ; text-align: center;">论坛广场</div>
            <el-input
              class="forum-searchinput"
              v-model="search"
              placeholder="请输入关键词"
              size="small"
            >
            </el-input>
            <el-button
              class="forum-searchbutton"
              type="primary"
              icon="el-icon-search"
              size="small"
              @click="forum_search_post"
              >搜索
            </el-button>
          </el-card>
        </div>
        <div class="forum-centercard">
          <el-card>
            <div style="height:190px">
              <div style="margin-bottom:15px; text-align: center;">
                在这里发布你的帖子
              </div>
              <el-input
                type="text"
                v-model="forum_title"
                placeholder="请输入标题，不超过10个字"
                size="small"
                maxlength="10"
                show-word-limit
                clearable
              ></el-input>
              <div style="margin: 20px 0;"></div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容，不超过120个字"
                v-model="forum_text"
                maxlength="120"
                show-word-limit
              >
              </el-input>
              <div
                style="width:40%;float:left;margin-top:15px;margin-right:200px"
              >
                <el-radio v-model="forum_radio" label="jointopic"
                  >参与话题</el-radio
                >
                <el-radio v-model="forum_radio" label="joincompetition"
                  >参与评选</el-radio
                >
              </div>
              <div class="message-buttom" style=" cursor: pointer;">
                <div class="message-buttom">
                  <i class="el-icon-upload2" @click="forum_post"></i>
                </div>

                <div class="upload_buttom">
                  <el-upload
                    action="http://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com"
                    :data="dataObj"
                    list-type="picture"
                    :multiple="false"
                    :show-file-list="showFileList"
                    :file-list="fileList"
                    :before-upload="beforeUpload"
                    :on-remove="handleRemove"
                    :on-success="handleUploadSuccess"
                    :on-preview="handlePreview"
                  >
                    <!-- <el-button size="small" type="primary">点击上传</el-button> -->

                    <div class="message-buttom">
                      <i class="el-icon-picture"></i>
                    </div>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div> -->
                  </el-upload>
                  <el-dialog :visible.sync="pic_dialogVisible">
                    <img width="100%" :src="fileList[0].url" alt="" />
                  </el-dialog>
                </div>
              </div>
            </div>
            <div v-if="img_src1 != ''" style="margin:15px">
              <img :src="img_src1" alt="" width="200px" />

              <img :src="img_src2" alt="" width="200px" v-if="img_src2 != ''" />
            </div>
          </el-card>
        </div>
        <div
          v-for="(item, index) in posts"
          :key="index"
          class="forum-centercard"
        >
          <el-card>
            <div class="post">
              <div class="post-head">
                <div class="block">
                  <el-avatar :size="45" :src="item.head"></el-avatar>
                </div>
                <div
                  style="float:right;cursor: pointer;"
                  @click="delete_post(item.id)"
                  v-if="role == 2"
                >
                  <i class="el-icon-delete"></i>
                </div>
                <div class="name-time">
                  <div>{{ item.username }}</div>
                  <div style="color:#939393;font-size: 10px;margin-top :5px;">
                    {{ item.date }}
                  </div>
                </div>
              </div>
              <div class="post-content">
                {{ item.title }}
                {{ item.text }}

                <div
                  class="forum-post-pic"
                  style="text-align:left;margin-top:20px ;"
                >
                  <img
                    :src="item.pic1"
                    alt=""
                    style="width:150px;"
                    v-show="item.pic1 != null && item.pic1 != ''"
                  />

                  <img
                    :src="item.pic2"
                    alt=""
                    style="width:150px;"
                    v-show="item.pic2 != null && item.pic2 != ''"
                  />
                </div>
              </div>

              <div class="post-judge" style="float:right">
                <span
                  style="float: left; cursor: pointer;"
                  @click="
                    show_comments(index),
                      forum_conment_getall(
                        posts[index].id,
                        comment_currentpage,
                        index
                      )
                  "
                >
                  <img
                    src="../icons/svg/3.1 评论.svg"
                    alt=""
                    style="width:25px;margin-bottom: 0;"
                  />
                  <span style="font-size:20px;float: right;margin-left: 5px;">{{
                    item.commentcount
                  }}</span>
                </span>
                <span
                  style="margin-left: 10px; cursor: pointer;"
                  @click="forum_post_addup(index)"
                >
                  <img
                    src="../icons/svg/爱心.svg"
                    alt=""
                    style="width:25px;margin-bottom: 0;"
                    v-if="!post_isliked[index].cut"
                  />
                  <img
                    src="../icons/svg/爱心-later.svg"
                    alt=""
                    style="width:25px;margin-bottom: 0;"
                    v-else
                  />
                  <span style="font-size:20px;float: right;margin-left: 5px;">{{
                    posts[index].up
                  }}</span>
                </span>
              </div>
              <div
                class="comments"
                style="height:auto"
                v-show="is_show_comment[index].cut"
              >
                <div>
                  <el-input
                    type="textarea"
                    :rows="1"
                    placeholder="发布你的评论"
                    v-model="forum_comment"
                    maxlength="60"
                    show-word-limit
                  >
                  </el-input>
                </div>
                <div class="post-comments" style="text-align:right">
                  <el-button
                    type="primary"
                    size="medium"
                    round
                    @click="add_comments(posts[index].id, index)"
                  >
                    发送评论
                  </el-button>
                </div>

                <div class="show-comments">
                  <div
                    class="comment-head"
                    style="width:100%;height:50px"
                    v-for="(item, index1) in comments[index].data"
                    :key="index1"
                  >
                    <div class="block">
                      <el-avatar :size="40" :src="item.head"></el-avatar>
                    </div>

                    <div class="name-time" style="width:490px">
                      <span style="color:dodgerblue">
                        {{ item.username }} :</span
                      >
                      <span>{{ item.text }}</span>
                      <div style="width:100%">
                        <span
                          style="color:#939393;font-size: 10px;margin-top :10px;"
                          >{{ item.date }}</span
                        >
                        <span
                          class="post-judge"
                          style="float:right;font-size: 15px;"
                        >
                          <span
                            style="float: left;
                            cursor: pointer;"
                            @click="dialogVisible = true"
                          >
                            <img
                              src="../icons/svg/3.1 评论.svg"
                              alt=""
                              style="width:20px;margin-bottom: 0;"
                              @click="doopen(index, index1)"
                            />
                            <span
                              style="font-size:15px;float: right;margin-left: 5px;"
                              >{{ item.comments.length }}</span
                            >
                            <el-dialog
                              title=""
                              :visible.sync="dialogVisible"
                              width="50%"
                              :before-close="handleClose"
                            >
                              <div style="margin-bottom:20px;font-size:20px">
                                回复 @{{ cur_comment.username }}
                              </div>
                              <el-input
                                type="text"
                                placeholder="发布你的评论"
                                v-model="forum_comments_for_comments"
                                maxlength="60"
                                show-word-limit
                              >
                              </el-input>

                              <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false"
                                  >取 消
                                </el-button>
                                <el-button
                                  type="primary"
                                  @click="
                                    (dialogVisible = false),
                                      add_comments_for_comments(
                                        posts[index].id,
                                        cur_comment.id
                                      )
                                  "
                                >
                                  确 定
                                </el-button>
                              </span>
                            </el-dialog>
                          </span>

                          <span
                            style="margin-left: 10px;
                            cursor: pointer;"
                            @click="forum_comment_addup(index, index1)"
                          >
                            <img
                              src="../icons/svg/爱心.svg"
                              alt=""
                              style="width:20px;margin-bottom: 0;"
                              v-if="!item.islike"
                            />
                            <img
                              src="../icons/svg/爱心-later.svg"
                              alt=""
                              style="width:20px;margin-bottom: 0;"
                              v-else
                            />
                            <span
                              style="font-size:15px;float: right;margin-left: 5px;"
                              >{{ item.up }}</span
                            >
                          </span>
                        </span>
                      </div>
                    </div>
                    <div
                      class="comment-in-comment"
                      style="margin-left:40px;font-size: 13px;margin-bottom: 20px;height:auto;"
                      v-for="(item, index2) in comments[index].data[index1]
                        .comments"
                      :key="index2"
                    >
                      <div class="name-time" style="width:490px">
                        <span style="color:dodgerblue">
                          {{ item.username }}:</span
                        >
                        <span>{{ item.text }}</span>
                        <div style="width:100%">
                          <span
                            style="color:#939393;font-size: 8px;margin-top :10px;"
                            >{{ item.date }}</span
                          >
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>

                  <!-- <div class="f-comment-page">

                                        <el-pagination @current-change="comment_handleCurrentChange"
                                            :current-page="comment_currentpage" :page-size="comment_pagesize" :hide-on-single-page="false"
                                            layout="prev, pager, next" :total="comment_total">
                                        </el-pagination>
                                    </div> -->
                </div>
                <div></div>
              </div>
            </div>
            <div></div>
          </el-card>
        </div>
        <div class="forum-post-page">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="post_currentpage"
            :page-size="post_pagesize"
            layout="prev, pager, next"
            :total="post_total"
            style=" text-align: center;"
          >
          </el-pagination>
        </div>
        <div></div>
      </div>

      <div class="forum-rightcontent">
        <div class="self-show">
          <el-card class="forum-rightcard" style="font-size:18px">
            <div class="block" @click="to_user">
              <el-avatar
                :size="75"
                :src="my_head"
                style="margin-left: calc(50% - 37.5px);
                cursor: pointer;"
              ></el-avatar>
            </div>
            <div v-if="this.noread > 0" class="unreadResumeWarning">
              <span class="unreadResumeCount">{{ this.noread }}</span>
            </div>
            <div style="margin-top:10px; text-align: center;">
              {{ forum_username }}
            </div>
            <div class="forum-collectandpost">
              <div class="rightcollect" style="text-align: center;">
                <div style="width:65px">收藏</div>
                <div style="width:65px">{{ user_collect_total }}</div>
              </div>
              <div class="rightpost" style="text-align: center;">
                <div style="width:65px">帖子</div>
                <div style="width:65px">{{ user_post_total }}</div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="hot topic" style="margin-top:10px">
          <el-card class="rigthcard" v-model="forum_hot">
            <div slot="header" class="clearfix" style="text-align: center;">
              <span>热门话题</span>
            </div>

            <div
              v-for="(item, o) in forum_hot"
              :key="o"
              class="text item"
              style="text-align: center;"
            >
              {{ o + 1 + ". " }}{{ item.title }}
              <el-divider border-style="dashed" />
            </div>
          </el-card>
        </div>
        <div class="list" style="margin-top:10px">
          <el-card
            class="rigthcard"
            v-model="forum_top"
            style="text-align: center;"
          >
            <div slot="header" class="clearfix">
              <span>排行榜</span>
            </div>
            <div v-for="(item, o) in forum_top" :key="o" class="text item">
              {{ o + 1 + ". " }}{{ item.title }}
              <el-divider border-style="dashed" />
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.unreadResumeWarning {
  width: 20px;
  height: 20px;
  border-radius: 14px;
  background-color: #ff3b30;
  position: absolute;
  right: 50px;
  top: 25px;
}

.unreadResumeCount {
  display: block;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  font-size: 12px;
}
.el-divider {
  margin: 5px;
}

.forum {
  width: 100%;
  height: auto;
  display: inline-block;
  background-color: #f0eae2;
}

.forum-head {
  // background: ;
  // width: 970px;
  height: 20px;
}

.forum-content {
  width: 970px;
  margin-top: 10px;
  height: auto;
  margin-left: calc(100vh - 485px);

  display: inline-block;
}

.forum-leftcontent {
  margin-right: 20px;
  width: 140px;
  height: 500px;
  background-color: orange;
  float: left;
  box-shadow: 10px, 10px, 5px, rgba(0, 0, 0, 0.9);
  // border: 1px, solid, #333;
  display: inline-block;
}

.forum-centercontent {
  position: relative;
  float: left;
  width: 600px;
  height: auto;
  // padding:20px;
  display: inline-block;
  //margin-right: 20px;
}

.forum-post-page {
  width: 600px;
  margin: 20px auto;
}

.forum-centercard {
  width: 600px;
  height: auto;
  //height: 220px;
  display: inline-block;
}

.forum-searchinput {
  display: inline-block;
  width: 85%;
}

.forum-searchbutton {
  display: inline-block;
  float: right;
}

.forum-rightcontent {
  position: relative;
  float: right;
  width: 182px;
  //height: 230px;
  height: auto;
  margin-left: 10px;
  display: inline-block;
}

.forum-clear {
  clear: both;
}

.forum-rightcard {
  // width: 182px;
  width: 182px;
  height: 220px;
}

.forum-collectandpost {
  //  display: inline-block;
}

.rightcollect {
  float: left;
  width: 65px;
  display: inline-block;
}

.rightpost {
  float: right;
  width: 65px;
  display: inline-block;
}

.post {
  height: auto;
}

.post-head {
  height: 44px;
}

.post-head .block {
  width: 40px;
  display: inline-block;
  float: left;
}

.show-comments .block {
  width: 40px;
  display: inline-block;
  float: left;
  height: auto;
}

.name-time {
  text-align: left;
  margin-left: 20px;
  float: left;
}

.comment-in-comment::after {
  content: "";
  display: block;
  clear: both;
}

.forum::after {
  content: "";
  display: block;
  clear: both;
}

.forum-post-page::after {
  content: "";
  display: block;
  clear: both;
}

.forum-content::after {
  content: " ";
  display: block;
  clear: both;
}

.forum-centercontent::after {
  content: " ";
  display: block;
  clear: both;
}

.post-judge {
  float: right;
  font-size: 25px;
  margin-bottom: 10px;
}

.post-comments {
  margin-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  height: 20px;
}

.post-comments-button {
  width: 60px;
  height: 30px;
  border: 0;
  border-radius: 20px;
  float: right;
  background-color: dodgerblue;
  color: #fff;
}

.f-comment-page {
  text-align: center;
  height: 25px;
}

.message-buttom {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  float: right;
  font-size: 25px;
}

.upload_buttom {
  float: right;
}

.el-breadcrumb {
  margin: 15px;
}

.post-content {
  padding-left: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}

.text {
  font-size: 15px;
}

.item {
  margin-top: 15px;
}

.clearfix:before,
.clearfix:after {
  display: table;
}

.clearfix:after {
  text-align: center;
  clear: both;
}
</style>
<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "singleUpload",
  props: {
    value: String
  },
  computed: {
    imageUrl() {
      return this.value;
    },
    imageName() {
      if (this.value != null && this.value !== "") {
        return this.value.substr(this.value.lastIndexOf("/") + 1);
      } else {
        return null;
      }
    },
    fileList() {
      return [
        {
          name: this.imageName,
          url: this.imageUrl
        }
      ];
    },
    showFileList: {
      get: function() {
        return (
          this.value !== null && this.value !== "" && this.value !== undefined
        );
      },
      set: function(newValue) {}
    }
  },

  data() {
    return {
      search: "",
      forum_title: "",
      forum_text: "",
      forum_comment: "",
      forum_comments_for_comments: "",
      forum_radio: "",
      forum_hot: [],
      forum_top: [],
      noread: 0,
      my_head:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      sizeList: ["large", "medium", "small"],
      is_show_comment: [
        { cut: false },
        { cut: false },
        { cut: false },
        { cut: false },
        { cut: false }
      ],
      dialogVisible: false,
      post_isliked: [
        { cut: true },
        { cut: true },
        { cut: true },
        { cut: true },
        { cut: true }
      ],

      comment_total: 0,
      comment_pagesize: 5,
      comment_currentpage: 0,
      post_total: 0,
      post_pagesize: 5,
      post_currentpage: 0,
      post_page: 0,
      posts: [],
      comments: [
        { data: true },
        { data: true },
        { data: true },
        { data: true },
        { data: true }
      ],
      post_head: [null, null, null, null, null],
      role: 0,
      forum_username: document.cookie.replace("username=", ""),
      user_collect_total: 0,
      user_post_total: 0,
      cur_comment: "",
      dataObj: {
        policy: "",
        signature: "",
        key: "",
        ossaccessKeyId: "",
        dir: "",
        host: ""
        // callback:'',
      },
      pic_dialogVisible: false,
      img_src1: "",
      img_src2: ""
    };
  },

  mounted: function() {
    this.show_forum_hot();
    this.show_forum_top();
    this.forum_post_getall();
    this.get_post_count();
    this.get_user_post_count();
    this.get_user_collect_count();
    this.gethead();
    this.get_user_role();
    this.get_noread();
  },
  methods: {
    to_user() {
      this.$router.replace("/usercenter");
      this.$http
        .get(
          "http://39.101.122.176:88/user/message/hasread?username=" +
            document.cookie.replace("username=", "")
        )
        .then(this.get_noread());
    },

    get_user_role() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/user/getuser?username=" +
            this.forum_username
        )
        .then(res => {
          this.role = res.data.data.role;
        });
    },

    delete_post(id) {
      //0不允许
      var _this = this;
      if (this.role == 2) {
        this.$http
          .get("http://39.101.122.176:88/forum/post/del?id=" + id)
          .then(res => {
            this.$message({
              message: "删除成功！",
              type: "success"
            });
            this.forum_post_getall();
          });
      }
    },

    gethead() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/user/getuser?username=" +
            this.forum_username
        )
        .then(res => {
          this.my_head = res.data.data.head;
          console.log(res);
        });
    },

    getTime() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      return year + "-" + month + "-" + day;
    },
    show_forum_hot() {
      var _this = this;
      this.$http.get("http://39.101.122.176:88/forum/post/hot").then(res => {
        this.forum_hot = res.data.data;
      });
    },
    show_forum_top() {
      var _this = this;
      this.$http.get("http://39.101.122.176:88/forum/post/top").then(res => {
        this.forum_top = res.data.data;
        console.log(res);
      });
      this;
    },

    forum_post() {
      var _this = this;
      if (this.forum_username == "") {
        alert("请先登录！");
      } else {
        if (this.forum_title == "") {
          alert("请输入标题");
        } else {
          if (this.forum_text == "") alert("请输入内容");
          else {
            if (this.forum_radio == "") {
              alert("请选择要发帖的类型");
            } else {
              this.$http
                .post("http://39.101.122.176:88/forum/post/add", {
                  username: document.cookie.replace("username=", ""),
                  title: this.forum_title,
                  date: this.getTime(),
                  type: this.forum_radio == "jointopic" ? 0 : 1,
                  up: 0,
                  text: this.forum_text,
                  pic1: this.img_src1,
                  pic2: this.img_src2
                })
                .then(res => {
                  console.log(res);
                });
              this.forum_title = "";
              this.forum_text = "";
              this.forum_radio = "";
              alert("发送成功");
              this.img_src2 = "";
              this.img_src1 = "";
            }
          }
        }
      }
      this.$http
        .get(
          "http://39.101.122.176:88/forum/post/page?page=0&pageSize=5&username=" +
            document.cookie.replace("username=", "")
        )
        .then(res => {
          this.posts = res.data.data;
          console.log("1" + this.posts);
          for (var i = 0; i < 5; i++) {
            this.post_isliked[i].cut = res.data.data[i].islike;
          }
        });
    },

    show_comments(index, comment_currentpage) {
      var _this = this;
      this.is_show_comment[index].cut = !this.is_show_comment[index].cut;
    },
    forum_conment_getall(id, comment_currentpage, index) {
      var _this = this;
      var comment_count;
      console.log(index);
      this.$http
        .get(
          "http://39.101.122.176:88/forum/comment/get?id=" +
            id +
            "&username=" +
            this.forum_username
        )
        .then(res => {
          this.comments[index].data = res.data.data;
          console.log(this.comments[index].data);
        });

      this.$http
        .get("http://39.101.122.176:88/forum/comment/count?id=" + id)
        .then(res => {
          comment_count = res.data.data;
          console.log("xxx" + res.data.data);
        });
      for (var i = 0; i < comment_count; i++) {
        comment_isliked.unshift({ cut: this.comments[index].data[i].islike });
      }
      console.log("comment" + comment_isliked);
    },

    add_comments(id, index) {
      var _this = this;
      if (this.forum_username == "") {
        alert("请先登录！");
      } else {
        if (this.forum_comment == "") {
          alert("请输入内容");
        } else {
          this.$http
            .post("http://39.101.122.176:88/forum/comment/add", {
              username: document.cookie.replace("username=", ""),
              text: this.forum_comment,
              up: 0,
              postId: this.posts[index].id,
              date: this.getTime()
            })
            .then(res => {
              console.log(res);
            });
          this.forum_comment = "";
          alert("发送成功");
        }
      }
      this.$http
        .get(
          "http://39.101.122.176:88/forum/comment/get?id=" +
            id +
            "&username=" +
            this.forum_username
        )
        .then(res => {
          this.comments[index].data = res.data.data;
          console.log(this.comments[index].data);
        });
    },
    add_comments_for_comments(id, index) {
      var _this = this;
      console.log(index);
      if (this.forum_username == "") {
        alert("请先登录！");
      } else {
        if (this.forum_comments_for_comments == "") {
          alert("请输入内容！");
          this.dialogVisible = true;
        } else {
          this.$http
            .post("http://39.101.122.176:88/forum/comment/add", {
              username: document.cookie.replace("username=", ""),
              text: this.forum_comments_for_comments,
              up: 0,
              comment: index,
              date: this.getTime()
            })
            .then(res => {
              console.log(res);
            });

          this.forum_comments_for_comments = "";
          alert("发送成功");
          this.dialogVisible = false;
        }
      }
      forum_conment_getall(id, index);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    forum_post_addup(index) {
      var _this = this;
      if (this.forum_username == "") {
        alert("请先登录！");
      } else {
        this.post_isliked[index].cut = !this.post_isliked[index].cut;
        this.$http
          .get(
            "http://39.101.122.176:88/forum/post/add/up?id=" +
              _this.posts[index].id +
              "&username=" +
              document.cookie.replace("username=", "")
          )
          .then(res => {
            console.log(res);
            if (this.posts[index].islike) {
              this.posts[index].up -= 1;
            } else {
              this.posts[index].up += 1;
            }
          });
      }
    },
    forum_comment_addup(index, index1) {
      var _this = this;
      if (this.forum_username == "") {
        alert("请先登录！");
      } else {
        this.cur_comment = this.comments[index].data[index1];
        this.$http
          .get(
            "http://39.101.122.176:88/forum/comment/add/up?id=" +
              this.cur_comment.id +
              "&username=" +
              document.cookie.replace("username=", "")
          )
          .then(res => {
            console.log(res);
            if (this.comments[index].data[index1].islike) {
              this.comments[index].data[index1].up -= 1;
            } else {
              this.comments[index].data[index1].up += 1;
            }
            this.comments[index].data[index1].islike = !this.comments[index]
              .data[index1].islike;
          });
      }
    },

    get_post_count() {
      var _this = this;
      this.$http.get("http://39.101.122.176:88/forum/post/count").then(res => {
        this.post_total = res.data.data;
        console.log(res);
      });
    },
    forum_post_getall() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/forum/post/page?page=0&pageSize=5&username=" +
            document.cookie.replace("username=", "")
        )
        .then(res => {
          this.posts = res.data.data;
          console.log("1" + this.posts);
          for (var i = 0; i < 5; i++) {
            this.post_isliked[i].cut = res.data.data[i].islike;
          }
        });
    },

    //当改变当前页数的时候触发的事件
    handleCurrentChange(post_currentpage) {
      var _this = this;
      this.post_currentpage = post_currentpage;
      this.is_show_comment = [
        { cut: false },
        { cut: false },
        { cut: false },
        { cut: false },
        { cut: false }
      ];
      this.dialogVisible = false;
      if (this.search == "") {
        this.$http
          .get(
            "http://39.101.122.176:88/forum/post/page?page=" +
              (_this.post_currentpage - 1) * 5 +
              "&pageSize=5" +
              "&username=" +
              document.cookie.replace("username=", "")
          )
          .then(res => {
            _this.posts = res.data.data;
            console.log(_this.posts);
            for (var i = 0; i < 5; i++) {
              this.post_isliked[i].cut = res.data.data[i].islike;
            }
          });
      } else {
        this.$http
          .get(
            "http://39.101.122.176:88/forum/post/page?page=" +
              (_this.post_currentpage - 1) * 5 +
              "&pageSize=5&name=" +
              this.search +
              "&username=" +
              document.cookie.replace("username=", "")
          )
          .then(res => {
            _this.posts = res.data.data;
            console.log(_this.posts);
            for (var i = 0; i < 5; i++) {
              this.post_isliked[i].cut = res.data.data[i].islike;
            }
          });
      }
    },
    forum_search_post() {
      var _this = this;
      this.post_currentpage = 1;
      this.$http
        .get(
          "http://39.101.122.176:88/forum/post/page?page=0&pageSize=5&name=" +
            this.search
        )
        .then(res => {
          this.posts = res.data.data;
          console.log(this.posts);
        });
    },
    get_noread() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/user/message/noread?username=" +
            document.cookie.replace("username=", "")
        )
        .then(res => {
          this.noread = res.data.data;
          console.log(res);
        });
    },
    get_user_collect_count() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/user/collect/count?username=" +
            document.cookie.replace("username=", "")
        )
        .then(res => {
          this.user_collect_total = res.data.data;
          console.log(res);
        });
    },
    get_user_post_count() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/user/post/count?username=" +
            document.cookie.replace("username=", "")
        )
        .then(res => {
          this.user_post_total = res.data.data;
          console.log(res);
        });
    },
    doopen(index, index1) {
      console.log(index + "h");
      console.log(index1 + "d");
      this.cur_comment = this.comments[index].data[index1];
      console.log(this.cur_comment);
    },
    emitInput(val) {
      this.$emit("input", val);
    },
    handleRemove(file, fileList) {
      this.emitInput("");
    },
    handlePreview(file) {
      this.dialogVisible = true;
    },
    beforeUpload(file) {
      console.log("出发了此事件");
      let _self = this;
      return new Promise((resolve, reject) => {
        console.log("触发了此函数");
        this.$http
          .get("http://39.101.122.176:88/third/oss/policy")
          .then(response => {
            console.log(response);
            _self.dataObj.policy = response.data.policy;
            _self.dataObj.signature = response.data.signature;
            _self.dataObj.ossaccessKeyId = response.data.accessId;
            _self.dataObj.key = response.data.dir + uuidv4() + "_${filename}";
            _self.dataObj.dir = response.data.dir;
            _self.dataObj.host = response.data.host;
            resolve(true);
          })
          .catch(err => {
            reject(false);
          });
      });
    },
    handleUploadSuccess(res, file) {
      console.log("上传成功...");
      console.log(
        this.dataObj.host +
          "/" +
          this.dataObj.key.replace("${filename}", file.name)
      );
      if (this.img_src1 == "") {
        this.img_src1 =
          this.dataObj.host +
          "/" +
          this.dataObj.key.replace("${filename}", file.name);
      } else {
        if (this.img_src1 != "" && this.img_src2 == "") {
          this.img_src2 =
            this.dataObj.host +
            "/" +
            this.dataObj.key.replace("${filename}", file.name);
        } else {
          alert("只能上传两张图片！");
        }
      }

      this.showFileList = true;
      this.fileList.pop();
      this.fileList.push({
        name: file.name,
        url:
          this.dataObj.host +
          "/" +
          this.dataObj.key.replace("${filename}", file.name)
      });
      this.emitInput(this.fileList[0].url);
    }
  }
};
</script>
