<template>
  <el-container>
    <el-header
      ><el-menu
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
          <img :src="logo" style="height: 80%; " />
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
            <span class="menutitle">教程</span></el-menu-item
          >
          <el-menu-item index="5" style="float: left;"
            ><span class="menutitle">论坛</span></el-menu-item
          >
        </div>
        <el-menu-item index="/user" style="float:right;">
          <img :src="portrait" style="height: 80%; " />
        </el-menu-item> </el-menu
    ></el-header>
    <el-main style="height: calc(100vh - 60px);">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#f0eae2"
        text-color="#000"
        active-text-color="#000"
      >
        <div
          style="position: absolute;left: 45vw;top:50%;transform: translate(-80%,-50%);"
        >
          <el-menu-item
            index="1"
            style="float: left;"
            v-on:click="show_my_post"
          >
            <span class="menutitle">我的发布</span>
          </el-menu-item>

          <el-menu-item
            index="2"
            style="float: left;"
            v-on:click="show_my_collection"
          >
            <span class="menutitle">我的收藏</span></el-menu-item
          >

          <el-menu-item
            index="3"
            style="float: left;"
            v-on:click="show_sys_news"
          >
            <span class="menutitle">系统消息</span></el-menu-item
          >
          <!-- <el-menu-item index="3" style="float: left;" @click="show_my_history"
            ><span class="menutitle">历史浏览</span></el-menu-item
          > -->
        </div>
      </el-menu>
      <div class="aside">
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
          <div class="profile-image"><img :src="img_src" /></div>
        </el-upload>

        <h1 class="user-name">
          {{ user_name }}
        </h1>
        <div style="margin: 20px 0;"></div>

        <div class="follow" style="margin-top: 10px;">
          <el-row>
            <el-col :span="10">关注数: {{ follows }}</el-col>
            <el-col :span="14">粉丝数: {{ fans }}</el-col>
          </el-row>
        </div>

        <div style="margin: 10px 0;"></div>
        <el-input
          type="text"
          placeholder="请输入电话"
          v-model="m_phone"
          maxlength="11"
          show-word-limit
        >
        </el-input>
        <div style="margin: 10px 0;"></div>
        <el-input
          type="text"
          placeholder="请输入密码"
          v-model="m_pwd"
          maxlength="10"
          show-word-limit
        >
        </el-input>
        <div style="margin: 10px 0;">
          <el-input
            type="text"
            placeholder="请再次输入密码"
            v-model="m_pwd2"
            maxlength="10"
            show-word-limit
          >
          </el-input>
        </div>
        <el-button type="info" v-on:click="info_submit">修改信息</el-button>

        <el-button type="logout" v-on:click="logout">退出登录</el-button>
      </div>
      <div class="u-main">
        <div v-show="u_switch == 1" class="m-post">
          <div v-for="post in post_list" :key="post">
            <div class="index-content" v-on:click="to_post">
              <div class="index-content-news">
                <div class="title">
                  {{ post.postname }}
                  <i class="el-icon-delete" v-on:click="post_del(post.id)"></i>
                </div>
                <div class="content">
                  <p class="p1">
                    {{ post.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style="margin: 50px 0;"></div>
        </div>
        <div v-show="u_switch == 2" class="m-post">
          <div v-for="collection in collection_list" :key="collection">
            <div class="index-content" v-on:click="to_collection">
              <div class="index-content-news">
                <div class="title">
                  {{ collection.title }}
                  <i class="el-icon-delete" v-on:click="collection_del"></i>
                </div>
                <div class="content">
                  <p class="p1">
                    {{ collection.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style="margin: 50px 0;"></div>
        </div>
        <div v-show="u_switch == 3" class="m-post">
          <div v-for="sys_news in sys_news_list" :key="sys_news">
            <div class="index-content" v-on:click="to_sys_news">
              <div class="index-content-news">
                <div class="title">
                  {{ sys_news.message }}
                  <i
                    class="el-icon-delete"
                    v-on:click="sys_news_del(sys_news.id)"
                  ></i>
                </div>
                <div class="content">
                  <p class="p1">
                    {{ sys_news.message }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style="margin: 50px 0;"></div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style>
.el-main {
  background-color: #f0eae2;
}

.menutitle {
  font-size: 150%;
}

.el-main .el-menu {
  z-index: 3;
  height: 40px;
  margin-top: 40px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.el-main .menutitle {
  font-size: 120%;
  font-weight: normal;
}

.el-main .el-menu-item {
  height: 30px;
  line-height: 30px;
}

.el-main::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.el-main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: rgb(206, 206, 206);
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.el-main::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.aside {
  z-index: 4;
  position: absolute;
  left: 16vw;
  width: 15vw;
  top: 100px;
}

.profile-image {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  overflow: hidden;
}

.user-name {
  margin-top: 20px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
}

.el-button--info {
  width: 100%;
  font-weight: 300;
  background-color: #f6f8fa;
  color: black;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.el-button--info:hover {
  background-color: #0080ffb9;
  color: rgb(255, 255, 255);
  border: 1px solid #ccc;
  border-radius: 10px;
}

.el-button--logout {
  margin-top: 10px;
  margin-left: 0px !important;
  width: 100%;
  font-weight: 300;
  background-color: #f6f8fa;
  color: black;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.el-button--logout:hover {
  background-color: #ff0000b9;
  color: rgb(255, 255, 255);
  border: 1px solid #ccc;
  border-radius: 10px;
}

.u-main {
  position: absolute;
  left: 35vw;
  width: 45vw;
  top: 150px;
}

.index-content {
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  width: 100% !important;
  height: 200px !important;
  background-color: #ece4d9 !important;

  cursor: pointer;
}
.index-content-news {
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100% !important;
  box-shadow: rgb(179, 178, 178) 0px 0px 30px 5px;
  background-color: #ece4d9;
}
.index-content-news .title {
  width: 100% !important;
  height: 60px !important;
  padding: 0 !important;
  line-height: 60px;
  font-size: 120%;
  background-color: #ece4d9;
}
.index-content-news .content {
  width: 100% !important;
  height: 140px !important;
  overflow: hidden;
  font-size: 100%;
  background-color: #ece4d9;
}

.p1 {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.el-icon-delete {
  float: right;
  line-height: 60px;
}
</style>

<script>
import router from "../router";
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      dataObj: {
        policy: "",
        signature: "",
        key: "",
        ossaccessKeyId: "",
        dir: "",
        host: ""
        // callback:'',
      },
      dialogVisible: false,
      logo: require("../assets/images/taoci_black.png"),
      portrait: require("../assets/logo.png"),
      user_name: document.cookie.replace("username=", ""),
      follows: 66,
      fans: 114514,

      validnumber: false,
      consistent: false,
      cansubmit: true,

      m_phone: "",
      m_pwd: "",
      m_pwd2: "",

      u_switch: 1,

      uid: 0,
      uname: "",

      imageUrl: "",
      img_src: "",

      post_list: [{}],

      // collection_list: [
      //   {
      //     title: "美美哒",
      //     text: "(✿◠‿◠)"
      //   },
      //   {
      //     title: "鲨鱼来咯",
      //     text: "哇呜(╬▔皿▔)╯"
      //   },
      //   {
      //     title: "啊啊啊",
      //     text: "大家好"
      //   },
      //   {
      //     title: "hello",
      //     text: "1212312312"
      //   },
      //   {
      //     title: "分享一张现代陶",
      //     text: "很精致的一件陶器"
      //   }
      // ],

      collection_list: [{}],
      sys_news_list: [{}]
    };
  },

  mounted() {
    this.get_user();
    this.get_post();
    this.get_sys_news();
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
  methods: {
    logout() {
      document.cookie = "username=" + "";
      this.$router.replace("/login");
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
      this.img_src =
        this.dataObj.host +
        "/" +
        this.dataObj.key.replace("${filename}", file.name);
      this.$http.post("http://39.101.122.176:88/user/update?id=" + this.uid, {
        id: this.uid,
        head: this.img_src
      });
      // .then(res => {
      //   if (res.status == 200) {
      //     if (res.data.data == "注册失败") {
      //       alert("修改失败，用户名已存在！");
      //     } else if (res.data.data == "注册成功") {
      //       alert("修改成功！");
      //       // this.user_name = _this.m_name;
      //       document.cookie = "username=" + this.;
      //       this.$router.replace("/4");
      //     }
      //   } else {
      //     alert("修改失败！");
      //   }
      //   console.log(res);
      // });
      console.log(
        this.dataObj.host +
          "/" +
          this.dataObj.key.replace("${filename}", file.name)
      );
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
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    get_user() {
      var _this = this;
      this.$http
        .get("http://39.101.122.176:88/user/getuser?username=" + this.user_name)
        .then(res => {
          this.uid = res.data.data.id;
          console.log(res.data.data.id);
          this.img_src = res.data.data.head;
          console.log(this.img_src);
        });
    },
    isvalidnumber() {
      if (this.m_phone.length != 11) {
        this.validnumber = false + "";
      } else {
        this.validnumber = true + "";
      }
    },
    isconsistent() {
      if (this.m_pwd != this.m_pwd2) {
        this.consistent = false + "";
      } else {
        this.consistent = true + "";
      }
    },
    info_submit() {
      this.$confirm(
        "是否提交修改后的内容?\n" + this.m_phone + "\n" + this.m_pwd,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.isvalidnumber();
          this.isconsistent();

          if (this.consistent == "false" || this.validnumber == "false") {
            this.cansubmit = false + "";
          } else {
            this.cansubmit = true + "";
          }
          if (this.m_phone != "" && this.m_pwd != "" && this.m_pwd2 != "") {
            var _this = this;

            if (this.cansubmit == "false") {
              if (this.validnumber == "false") {
                alert("请输入正确的电话号码！");
              } else {
                if (this.consistent == "false") {
                  alert("两次输入密码不一致！");
                }
              }
            } else {
              this.$http
                .post("http://39.101.122.176:88/user/update?id=" + _this.uid, {
                  id: _this.uid,
                  phone: _this.m_phone,
                  password: _this.m_pwd
                })
                .then(res => {
                  if (res.status == 200) {
                    if (res.data.data == "注册失败") {
                      alert("修改失败，用户名已存在！");
                    } else if (res.data.data == "注册成功") {
                      alert("修改成功！");
                      this.$router.replace("/4");
                    }
                  } else {
                    alert("修改失败！");
                  }
                  console.log(res);
                });
            }
          } else {
            alert("请输入完整的信息！");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交"
          });
        });
    },
    show_my_post() {
      this.u_switch = 1;
    },
    show_my_collection() {
      this.u_switch = 2;
    },
    show_sys_news() {
      this.u_switch = 3;
    },
    get_post() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/user/post/get?username=" + this.user_name
        )
        .then(res => {
          this.post_list = res.data.data;
          console.log(this.user_name);
          console.log(this.post_list);
        });
    },
    get_sys_news() {
      var _this = this;
      this.$http
        .get(
          "http://39.101.122.176:88/user/message/all?username=" + this.user_name
        )
        .then(res => {
          this.sys_news_list = res.data.data;
          console.log(this.user_name);
          console.log(this.sys_news_list);
        });
    },

    to_post() {},
    to_collection() {},
    to_sys_news() {},
    post_del(id) {
      this.$confirm("是否删除?", "发布", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .get("http://39.101.122.176:88/user/post/del?id=" + id)
            .then(res => {
              this.post_list = res.data.data;
              console.log(this.this.post.id);
              console.log(this.post_list);
            });
          this.$message({
            type: "success",
            message: "成功删除!"
          });
          location.reload();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    collection_del() {
      this.$confirm("是否删除?", "收藏", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功删除!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    sys_news_del(id) {
      this.$confirm("是否删除?", "发布", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .get("http://39.101.122.176:88/user/message/del?id=" + id)
            .then(res => {
              this.sys_news_list = res.data.data;
              console.log(this.this.sys_news.id);
              console.log(this.sys_news_list);
            });
          this.$message({
            type: "success",
            message: "成功删除!"
          });
          location.reload();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
