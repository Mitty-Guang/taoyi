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
        <el-menu-item index="/index" style="float:left;">
          <img
            src="../../../assets/images/taoci_black.png"
            style="height: 80%; "
          />
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
          <img src="../../../assets/logo.png" style="height: 80%; " />
        </el-menu-item> </el-menu
    ></el-header>
    <el-container>
      <el-aside>
        <el-menu
          :default-openeds="opends"
          :default-active="$router.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#c6ad8b"
          text-color="#333333"
          active-text-color="#ffd04b"
          style="height: 100vh"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="menutitle">颜色陶</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/classes/yansetao/hongtao"
                >红陶</el-menu-item
              >
              <el-menu-item index="/classes/yansetao/heitao">黑陶</el-menu-item>
              <el-menu-item index="/classes/yansetao/huitao">灰陶</el-menu-item>
              <el-menu-item index="/classes/yansetao/baitao">白陶</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span class="menutitle">彩陶</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/classes/caitao/caitao">彩陶</el-menu-item>
              <el-menu-item index="/classes/caitao/yangshao" class="is-active"
                >仰韶文化彩陶</el-menu-item
              >
              <el-menu-item index="/classes/caitao/banpo"
                >半坡彩陶</el-menu-item
              >
              <el-menu-item index="/classes/caitao/miaodigou"
                >庙底沟彩陶</el-menu-item
              >
              <el-menu-item index="/classes/caitao/majiayao"
                >马家窑文化彩陶</el-menu-item
              >
              <el-menu-item index="/classes/caitao/banshan"
                >半山彩陶</el-menu-item
              >
              <el-menu-item index="/classes/caitao/machang"
                >马厂类型彩陶</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/classes/caihui" class="xdty"
            >彩绘陶</el-menu-item
          >
          <el-menu-item index="/classes/yinwen" class="xdty"
            >印纹陶</el-menu-item
          >
          <el-menu-item index="/classes/youtao" class="xdty">釉陶</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="breadcrumb">
            <div class="bread">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index' }"
                  >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>分类</el-breadcrumb-item>
                <el-breadcrumb-item>彩陶</el-breadcrumb-item>
                <el-breadcrumb-item>仰韶文化彩陶</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【仰韶文化彩陶】</p>
            <p class="p_main">
              &emsp;&emsp;仰韶文化距今大约7000年左右，是我国新石器时代彩陶最丰盛繁华的时期。它位于黄河中游地区，仰韶文化的制陶工艺相当成熟，器物规整精美，多为细泥红陶和夹砂红陶，灰陶与黑陶较为少见。其装饰以彩绘为主，于器物上绘精美彩色花纹，反映当时人们生活的部分内容及艺术创作的聪明才智。另外还有磨光、拍印、等装饰手法。造型的种类有杯、钵、碗、盆、罐、瓮、盂、瓶、甑、釜、灶、鼎、器盖和器座等，最为突出的是双耳尖底瓶，线条流畅、匀称，极具艺术美感。
              由于时间跨度与分布地域的不同，仰韶文化必须分类加以区别，主要有半坡类型和庙底沟类型。
            </p>

            <div align="center" style="padding-top: 30px;">
              <i
                ref="off"
                class="el-icon-star-off"
                @click="change1"
                style="display: block"
              ></i>
              <i
                ref="on"
                class="el-icon-star-on"
                @click="change2"
                style="display: none"
              ></i>
            </div>
            <div align="center" style="padding-top: 10px;margin-bottom: 30px;">
              <span>{{ collectors }}</span>
            </div>
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      opends: ["2"],

      collectors: "收藏"
    };
  },

  methods: {
    change1() {
      this.$refs.on.style.display = "block";
      this.$refs.off.style.display = "none";
      this.collectors = "已收藏";
    },
    change2() {
      this.$refs.on.style.display = "none";
      this.$refs.off.style.display = "block";
      this.collectors = "收藏";
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
