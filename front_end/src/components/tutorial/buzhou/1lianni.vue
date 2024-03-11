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
          style="height: 100%"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="menuside">制作成型的方法</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/tutorial/chengxing/nitiao"
                >泥条盘筑成型法</el-menu-item
              >
              <el-menu-item index="/tutorial/chengxing/shounie"
                >手捏（雕塑）成型法</el-menu-item
              >
              <el-menu-item index="/tutorial/chengxing/niban"
                >泥板成型法</el-menu-item
              >
              <el-menu-item index="/tutorial/chengxing/shigao"
                >石膏模具成型</el-menu-item
              >
              <el-menu-item index="/tutorial/chengxing/lapei"
                >拉坯成型法</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span class="menuside">基本施釉方法</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/tutorial/shiyou/jinyou"
                >浸釉法</el-menu-item
              >
              <el-menu-item index="/tutorial/shiyou/linyou"
                >淋釉法</el-menu-item
              >
              <el-menu-item index="/tutorial/shiyou/dangyou"
                >荡釉法</el-menu-item
              >
              <el-menu-item index="/tutorial/shiyou/tushuayou"
                >涂刷釉</el-menu-item
              >
              <el-menu-item index="/tutorial/shiyou/penyou"
                >喷釉法</el-menu-item
              >
              <el-menu-item index="/tutorial/shiyou/shuaiyou"
                >甩釉法</el-menu-item
              >
              <el-menu-item index="/tutorial/shiyou/xinxing"
                >新兴的施釉方法</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span class="menuside">装饰方式</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/tutorial/zhuangshi/caihui"
                >彩绘</el-menu-item
              >
              <el-menu-item index="/tutorial/zhuangshi/guijinshu"
                >贵金属装饰</el-menu-item
              >
              <el-menu-item index="/tutorial/zhuangshi/guangzecai"
                >光泽彩</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <span class="menuside">传统陶艺VS现代陶艺</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/tutorial/qubie/qubie">区别</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span class="menuside">陶艺方法步骤</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/tutorial/buzhou/1lianni" class="is-active"
                >练泥</el-menu-item
              >
              <el-menu-item index="/tutorial/buzhou/2lapei">拉坯</el-menu-item>
              <el-menu-item index="/tutorial/buzhou/3yinpei">印坯</el-menu-item>
              <el-menu-item index="/tutorial/buzhou/4lipei">利坯</el-menu-item>
              <el-menu-item index="/tutorial/buzhou/5shaipei"
                >晒坯</el-menu-item
              >
              <el-menu-item index="/tutorial/buzhou/6kehua">刻花</el-menu-item>
              <el-menu-item index="/tutorial/buzhou/7shiyou">施釉</el-menu-item>
              <el-menu-item index="/tutorial/buzhou/8shaoyao"
                >烧窑</el-menu-item
              >
              <el-menu-item index="/tutorial/buzhou/9caihui">彩绘</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
                <el-breadcrumb-item>教程</el-breadcrumb-item>
                <el-breadcrumb-item>陶艺方法步骤</el-breadcrumb-item>
                <el-breadcrumb-item>练泥</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div class="text">
            <p class="title">【练泥】</p>
            <p class="p_main">
              <!-- &emsp;&emsp; -->
              &emsp;&emsp;从矿区采取瓷石，先以人工用铁锤敲碎至鸡蛋大小的块状，再利用水碓舂打成粉状，淘洗，除去杂质，沉淀后制成砖状的泥块。然后再用水调和泥块，去掉渣质，用双手搓揉，或用脚踩踏，把泥团中的空气挤压出来，并使泥中的水分均匀。
              <br />[舂（chong）打：意思是把东西放在石臼或乳钵里捣，使破碎或去皮壳。]
            </p>

            <div>
              <i>
                <br />
                <br />
                <br />
              </i>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      opends: ["5"],
      bannerHeight: 200
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
