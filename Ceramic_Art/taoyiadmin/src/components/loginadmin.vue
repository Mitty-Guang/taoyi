<template>
    <div class="login_background">
        <el-header>
        </el-header>
        <div class="login_content">
            <h1>欢迎登录</h1>
            <h1>陶瓷艺术网</h1>
            <form class="login-message">
                <div class="login_inpt">
                    <el-input prefix-icon="el-icon-user-solid" v-model="input11" placeholder="请输入用户名"
                        @blur="ishavingname"></el-input>
                    <span class="login_text_style" v-if="havingname === 'false'">用户名不能为空</span>
                </div>
                <div class="login_inpt">
                    <el-input prefix-icon="el-icon-user-solid" v-model="input12" placeholder="请输入密码"></el-input>
                </div>
                <div class="login_inpt">
                    <el-button @click="login_submit" style="margin-left: 40%;">管理员登录</el-button>
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

            this.$http
                .get(
                    "http://39.101.122.176:88/user/login/admin" +
                    "?username=" +
                    _this.input11 +
                    "&password=" +
                    _this.input12
                )
                .then(res => {
                    if (res.status == "200" && res.data.data == "登录成功") {
                        this.$message("登录成功！");
                        document.cookie = "username=" + this.input11;
                        this.$router.replace("/usercontrol");
                    } else {
                        this.$message("登录失败！");
                    }
                    console.log(res);
                });
        }
    }
};
</script>
  