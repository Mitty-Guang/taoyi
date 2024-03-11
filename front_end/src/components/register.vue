<template>
  <div class="register_background">
    <el-header
      ><el-menu
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
            <span class="menutitle">教程</span></el-menu-item
          >
          <el-menu-item index="5" style="float: left;"
            ><span class="menutitle">论坛</span></el-menu-item
          >
        </div>
      </el-menu></el-header
    >
    <div class="register_content">
      <!-- <div class="register-backlogin" >
                 <p>已有账号？<router-link to="./login"><el-button type="primary" @click="backlogin">登录</el-button></router-link></p> 
            </div> -->
      <h1>欢迎注册</h1>
      <h1>陶瓷艺术网</h1>
      <form class="register-message">
        <div>
          <div class="register_inpt">
            <el-input
              prefix-icon="el-icon-user-solid"
              v-model="input21"
              placeholder="请输入用户名"
            ></el-input>
            <!-- <span class="text_style" v-if="validusername==='false'">用户名已存在，请重新输入</span>
                        <span class="text_style" v-else-if="validusername==='none'">用户名不能为空</span> -->
          </div>

          <!-- <span style="color:red  margin:0px">用户名已存在</span> -->

          <div class="register_inpt">
            <el-input
              prefix-icon="el-icon-user-solid"
              v-model="input22"
              placeholder="请输入手机号"
              @blur="isvalidnumber"
            ></el-input>
            <span class="text_style" v-if="validnumber === 'false'"
              >请输入正确的手机号码</span
            >
          </div>
          <div class="register_inpt">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="input23"
              placeholder="请输入密码"
              @blur="isconsistent"
              show-password
            ></el-input>
            <!-- <span class="text_style">1</span> -->
          </div>
          <div class="register_inpt">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="input24"
              placeholder="请再次确认密码"
              @blur="isconsistent"
              show-password
            ></el-input>
            <span class="text_style" v-if="consistent === 'false'"
              >两次密码不一致</span
            >
          </div>
          <div class="register_inpt">
            <el-button @click="register_submit" style="margin-left: 40%;"
              >注册</el-button
            >
          </div>
        </div>
        <div style="font-size:14px;float:left; color:cadetblue;">
          已有账号，立即 <router-link to="./login">登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss">
// .register-img{
//     background-color: pink;
//     display: inline-block;
//     float: left;
// }
* {
  margin: 0px;
  padding: 0px;
}
.el-menu-demo {
  width: 100%;
  line-height: 5vh;

  border: 0px !important;
}
.register_background {
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
.register_content {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
}
// .register-backlogin{
//     background-color: pink;
//     display: inline-block;
//     float: left;
//     padding-right:100px;
// }
h1 {
  margin-bottom: 15px;
  clear: both;
  text-align: center;
  font-family: 楷体;
  color: cadetblue;
}
.register-message {
  //display: inline-block;
  width: 400px;
  height: 300px;

  margin: 0 auto;
  // background-color: pink;
}
.register_inpt {
  padding-top: 20px;
  margin: 0 auto;
}
.text_style {
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
      input21: "",
      input22: "",
      input23: "",
      input24: "",
      validnumber: false,
      consistent: false,
      cansubmit: true
    };
  },
  methods: {
    isvalidnumber() {
      if (this.input22.length != 11) {
        this.validnumber = false + "";
      } else {
        this.validnumber = true + "";
      }
    },
    isconsistent() {
      if (this.input23 != this.input24) {
        this.consistent = false + "";
      } else {
        this.consistent = true + "";
      }
    },
    register_submit() {
      if (this.consistent == "false" || this.validnumber == "false") {
        this.cansubmit = false + "";
      } else {
        this.cansubmit = true + "";
      }
      if (
        this.input21 != "" &&
        this.input22 != "" &&
        this.input23 != "" &&
        this.input24 != ""
      ) {
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
            .post("http://39.101.122.176:88/user/enroll", {
              name: _this.input21,
              phone: _this.input22,
              password: _this.input23
            })
            .then(res => {
              if (res.status == 200) {
                if (res.data.msg == "注册失败") {
                  alert("注册失败，用户名已存在！");
                } else {
                  alert("注册成功！");
                  this.$router.replace("/login");
                }
              } else {
                alert("注册失败！");
              }
              console.log(res);
            });
        }
      } else {
        alert("请输入完整的信息！");
      }
    }
  }
};
</script>
