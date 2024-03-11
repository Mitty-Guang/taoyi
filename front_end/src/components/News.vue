<template>
  <div>
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
        <el-menu-item index="/index" style="float:left;">
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
            <span class="menutitle">教程</span></el-menu-item
          >
          <el-menu-item index="5" style="float: left;"
            ><span class="menutitle">论坛</span></el-menu-item
          >
        </div>
        <el-menu-item index="/user" style="float:right;">
          <img src="../assets/logo.png" style="height: 80%; " />
        </el-menu-item> </el-menu
    ></el-header>
    <el-main class="news">
      <div class="news-hot">
        <el-carousel height="350px">
          <el-carousel-item v-for="item in urls" :key="item">
            <img :src="item" alt="" height="350px" width="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="news-list-box">
        <el-card class="news-list-all">
          <div slot="header" class="clearfix">
            <span>陶 艺 新 闻</span>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="text" v-for="news in news_list" :key="news.id">
            <a href="#" v-on:click="news_turn(news.text)">{{ news.title }}</a>
            <p>{{ news.date }} 点赞数{{ news.up }} 浏览数{{ news.click }}</p>
            <el-image :src="news.url1" v-if="news.url1 != null"></el-image>
            <el-image :src="news.url2" v-if="news.url2 != null"></el-image>
            <el-divider></el-divider>
          </div>
        </el-card>
        <el-card class="news-list-hot">
          <div slot="header" class="clearfix">
            <span>热点新闻</span>
          </div>
          <div class="text" v-for="news in news_hot" :key="news.id">
            <a
              href="#"
              v-on:click="news_turn(news.text)"
              v-if="news.url1 != null"
              style="height: 60px;"
            >
              <el-image :src="news.url1" v-if="news.url1 != null"></el-image>
              <div class="text_title">{{ news.title }}</div>
            </a>
          </div>
        </el-card>
      </div>
    </el-main>
  </div>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.news {
  background-color: #f0eae2 !important;
  color: #333;
}

.news .news-hot {
  width: 1100px;
  height: 350px;
  background-color: rgb(255, 255, 255);
  margin: 50px auto;
}

.news .news-hot .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  height: 300px;
}

.news-hot .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.news-hot .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.news a {
  color: rgb(51, 51, 51);
  text-decoration: none;
}

.news a:hover {
  color: rgb(67, 140, 213);
  text-decoration: none;
}

.news .news-list-hot .clearfix:before,
.news .news-list-hot .clearfix:after {
  display: table;
  content: "";
}

.news .news-list-hot .clearfix:after {
  clear: both;
}

.news .news-list-hot .text {
  height: 0px !important;
}

.news .news-list-hot .text a .text_title {
  font-size: 15px;
  line-height: 30px;
  height: 60px;
  width: 70%;
  float: right;
  margin-bottom: 10px;
  text-indent: 1em;
}

.news .news-list-hot .text .el-image {
  height: 60px;
  width: 30%;
  float: left;
  margin-bottom: 10px;
}

.news .news-list-hot {
  width: 33%;
  float: right;
}

.news .news-list-all .clearfix:before,
.news .news-list-all .clearfix:after {
  display: table;
  content: "";
}

.news .news-list-all .clearfix:after {
  clear: both;
}

.news .news-list-all {
  width: 65%;
  height: 100%;
  float: left;
}

.news .news-list-all a {
  font-size: 26px;
}

.news .news-list-all p {
  margin-top: 10px;
  font-size: 13px;
  color: rgb(125, 125, 125);
}

.news .news-list-all .el-image {
  position: relative;
  margin-top: 10px;
  width: 30%;
  box-shadow: 5px 5px 5px -4px rgba(81, 81, 81, 0.3);
  display: inline-block;
}

.news .news-list-box {
  font-size: 22px;
  width: 1100px;
  margin: 50px auto;
  text-align: center;
}

.news .news-list-box .el-input {
  float: right;
  width: 230px;
}

.news .news-list-box .el-button {
  float: right;
}

.news .news-list-box .text {
  font-size: 18px;
  margin-bottom: 18px;
  text-align: left;
}
</style>
<script>
export default {
  data() {
    return {
      news_list: [],
      news_hot: [],
      urls: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220406-1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220426.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220618-1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220822.png"
      ],
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      input: ""
    };
  },
  methods: {
    news_getlist() {
      var _this = this;
      this.$http
        .get("http://39.101.122.176:88/news/all?page=0&pagesize=10")
        .then(res => {
          _this.news_list = res.data.data.records;
        });
    },
    news_gethot() {
      var _this = this;
      this.$http.get("http://39.101.122.176:88/news/hot").then(res => {
        _this.news_hot = res.data.data;
      });
    },
    news_turn(url) {
      console.log(url);
      this.$router.push({ path: url });
    }
  },
  mounted() {
    this.news_getlist();
    this.news_gethot();
  }
};
</script>
