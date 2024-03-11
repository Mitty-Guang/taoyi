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
              <el-menu-item index="/tutorial/buzhou/1lianni">练泥</el-menu-item>
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
              <el-menu-item index="/tutorial/buzhou/9caihui" class="is-active"
                >彩绘</el-menu-item
              >
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
                <el-breadcrumb-item>彩绘</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div class="text">
            <p class="title">【彩绘】</p>
            <p class="p_main">
              <!-- &emsp;&emsp; -->
              &emsp;&emsp;釉上彩如五彩、粉彩等，是在已烧成瓷的釉面上描绘纹样、填彩，再入红炉以低温烧烘，温度约700—800度。<br />
              &emsp;&emsp;烧窑前即在坯体素胎上绘画，如青花、釉里红等，则称为釉下彩，其特点是彩在高温釉下，永不退色。瓷器的彩绘与一般绘画不同。因为画工在坯体素胎上施釉和作画时所见的颜料色，在经过高温烧制和烘烤后会发生很大变化。看到一件件颜色暗淡、貌不惊人的半成品，经过炉火的烧炼竟会呈现出如此绚丽夺目的色彩，这本身是奇妙的；而与此同时也便可以得知，为瓷器作画是需要怎样的特殊经验和想象力了。
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
