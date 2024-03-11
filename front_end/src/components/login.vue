<template>
  <div class="login_background">
    <el-header>
      <el-menu
        :default-active="$router.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#1b2e4e"
        text-color="#fff"
        active-text-color="#000"
        router
      >
        <el-menu-item index="/index" style="float:left;">
          <img src="../assets/images/taoci_white.png" style="height: 80%; " />
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
      </el-menu>
    </el-header>
    <div class="login_content">
      <h1>欢迎登录</h1>
      <h1>陶瓷艺术网</h1>
      <form class="login-message">
        <div class="login_inpt">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="input11"
            placeholder="请输入用户名"
            @blur="ishavingname"
          >
          </el-input>
          <span class="login_text_style" v-if="havingname === 'false'"
            >用户名不能为空</span
          >
        </div>
        <div class="login_inpt">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="input12"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </div>
        <div class="login_inpt">
          <el-button @click="login_submit" style="margin-left: 40%;"
            >登录</el-button
          >
        </div>
        <div style="font-size:14px;float:right; color:cadetblue;">
          还没账户？立即 <router-link to="./register">注册</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

.login_background {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/login/img1.png);
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  moz-background-size: cover;
  min-height: 100vh;
  // width: 500px;
  // height: 450px;/*400*/
  // margin: 120px auto 0;
}

.login_content {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
}

h1 {
  margin-bottom: 15px;
  clear: both;
  font-family: 楷体;
  color: cadetblue;
}

.login-message {
  display: inline-block;
  width: 400px;
  margin: auto;
}

.login_inpt {
  padding-top: 20px;
  margin: 0 auto;
}

.login_text_style {
  color: red;
  float: right;
  //display: none;
  font-size: 14px;
}
</style>
<script>
export default {
  data() {
    return {
      input11: "",
      input12: "",
      havingname: ""
    };
  },
  mounted: function() {
    const strCookie = document.cookie;
    const cookieList = strCookie.split(";");
    for (let i = 0; i < cookieList.length; i++) {
      const arr = cookieList[i].split("=");
      if ("username" === arr[0]) {
        if (arr[1] != "") {
          this.$router.replace("/usercenter");
          console.log(arr[1]);
        }
        return arr[1];
      }
    }

    return "";
  },
  methods: {
    ishavingname() {
      var _this = this;
      if (this.input11 == "") {
        this.havingname = false + "";
      } else {
        this.havingname = true + "";
      }
    },

    login_submit() {
      var _this = this;
      document.cookie = "username=" + this.input11;
      this.$http
        .get(
          "http://39.101.122.176:88/user/login" +
            "?username=" +
            _this.input11 +
            "&password=" +
            _this.input12
        )
        .then(res => {
          if (res.status == "200" && res.data.data == "登录成功") {
            alert("登录成功！");
            this.$router.replace("/usercenter");
          } else {
            alert("登录失败！");
          }
          // console.log(res);
        });
    }
  }
};
</script>
