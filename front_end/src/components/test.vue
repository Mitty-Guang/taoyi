<template>
  <div>
    <div class="logininfor">
      <input type="text" placeholder="手机号码" ref="userphone" />
      <input type="text" placeholder="密码" ref="userpass" />
      <span @click="register()">注册</span>
    </div>
    <p>已有账号？去<span class="zhuce" @click="login()">登录</span></p>
  </div>
</template>
<style>
h1 {
  margin-bottom: 15px;
  clear: both;
  *zoom: 1;
  font-family: 楷体;
}
.el-form {
  display: inline-block;
  width: 30%;
  margin: auto;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      input21: "",
      input22: "",
      input23: "",
      input24: "",
      cphone: false
    };
  },
  methods: {
    register() {
      window.console.log(this.$refs.userphone.value);
      window.console.log(this.$refs.userpass.value);
    }
  }
};
</script>
