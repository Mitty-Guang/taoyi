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
              <el-menu-item index="/classes/caitao/yangshao"
                >仰韶文化彩陶</el-menu-item
              >
              <el-menu-item index="/classes/caitao/banpo" class="is-active"
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
                <el-breadcrumb-item>半坡彩陶</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【半坡彩陶】</p>
            <p class="p_main">
              &emsp;&emsp;最早发现于西安半坡，距今有七千年的历史。是我国彩陶文化历史较早、特点突出、影响较大的一个类型。半坡彩陶的遗址，在河流的岸边，因而半坡的彩陶有汲水尖底瓶、葫芦、长颈瓶，另外还有盆类、罐类，与盆罐大体相似。
              <br />&emsp;&emsp;半坡彩陶早期纹饰，多为散点式构图。也就是说，在一件器型上，装饰往往只占据器面的一小部分，纹样一般是自然形态的再现。半坡纹饰的形象可爱，表现了人类童年的天真稚气和与自然的亲切关系。仔细体味，有人与自然溶为一体的感觉，可以说是半坡人原始生活的记录。
              <br />&emsp;&emsp;纹饰形象主要描绘了当时人们接触的动物，有奔跑的鹿、鱼纹、人面纹、蛙纹、鸟纹、猪纹以及由以上纹样两种或三种组合的纹样。也有一些单纯的任何纹样如折线纹、三角纹、网纹等
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
      opends: ["2"],
      bannerHeight: 200,
      collectors: "收藏",
      imgwrap: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/banpo/图片1.png"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/banpo/图片1.png"
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
