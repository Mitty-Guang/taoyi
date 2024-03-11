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
          style="height: 95vh"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="menutitle">颜色陶</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/classes/yansetao/hongtao" class="is-active"
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
              <el-menu-item index="/classes/caitao/yangshao"
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
                <el-breadcrumb-item>颜色陶</el-breadcrumb-item>
                <el-breadcrumb-item>红陶</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【红陶】</p>
            <p class="p_main">
              &emsp;&emsp;红陶是新石器时代出现的一种器表呈红色的陶器。人类发明陶器以红陶为主。裴李岗文化、仰韶文化、马家浜文化等都以红陶为主。1921年，我国在河南渑池县仰韶村首次发现红陶。
              <br />&emsp;&emsp;陶土、羼（chàn）和料与水以适当比例混合，成形、晾干后得到陶坯，陶坯在陶窑中与大量空气接触，使陶胎中的铁转化为三价铁，器表便呈红色，称之为红陶。
              <br />&emsp;&emsp;烧制温度：800—1000℃
            </p>

            <div align="center" style="padding-top: 30px;">
              <el-carousel style="width: 60%;" :height="bannerHeight + 'px'">
                <el-carousel-item v-for="item in imgwrap" :key="item.url">
                  <el-image
                    style=" height: 100%;"
                    :src="item.url"
                    :preview-src-list="srcList"
                  ></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>
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
      opends: ["1"],
      bannerHeight: 200,
      collectors: "收藏",
      imgwrap: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片1.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片2.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片3.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片4.png"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片2.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片3.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/hongtao/图片4.png"
      ]
    };
  },
  mounted() {
    this.setSize();
    window.addEventListener(
      "resize",
      () => {
        this.setSize();
      },
      false
    );
  },
  methods: {
    setSize() {
      this.bannerHeight = document.body.clientWidth / 4;
    },
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
