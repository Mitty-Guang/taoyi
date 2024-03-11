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
              <el-menu-item index="/tutorial/chengxing/shigao" class="is-active"
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
                <el-breadcrumb-item>陶艺制作成型的方法</el-breadcrumb-item>
                <el-breadcrumb-item>石膏模具成型</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div class="text">
            <p class="title">【石膏模具成型】</p>
            <p class="p_main">
              <!-- &emsp;&emsp; -->
              1．简介<br />
              &emsp;&emsp;利用石膏加水后可以凝固，在这种材料干燥后有较好的吸水功能。在陶艺创作中，利用石膏做模具，可以很快将泥料、泥浆里的水分吸收，使泥料、泥浆硬化、干燥而成型。模具分为阴模和阳模，阴模阴出来的纹饰是突出的，阳模具则相反。<br />
              2．方法<br />
              2.1 印模（印坯）成型法<br />
              （1）选择一块泥料，打成泥板，再把泥板擀平整，并且保证泥板的薄厚均匀。<br />
              （2）用一块拧干的湿布清理石膏模内部，再把泥板放入石膏模内。<br />
              （3）印坯时用力要均匀，石膏内的各种轮廓线要印全，再把边缘多余的泥料清理干净。<br />
              （4）把边缘处用锯条的锯齿打毛，再用毛笔点些水轻轻蘸蘸毛边。<br />
              （5）用锯条的锯齿打毛底部泥板，与上部黏合。<br />
              （6）用力压合上模与下模，使其黏合更加牢靠。<br />
              （7）稍干燥后进行脱模，修整，装饰。<br />
              2.2 泥浆铸件成型法<br />
              （1）把准备好的模具捆扎好。<br />
              （2）把泥浆注入模具内，待泥浆在模具内壁吸附到一定厚度时，把模具内多余的泥浆倒出，吸附泥浆的厚薄就是坯体的厚度，坯体厚度根据器皿大小而定。<br />
              （3）把倒完泥浆的模具反扣，这样可以保证坯体内壁平滑。待模具内的坯体干燥到可以站立的强度时，把模具打开，取出坯体，修整坯体。<br />
              3．注意事项<br />
              （1）印坯和注浆的坯体厚度要会根据作品的大小而定，大的可厚些，小的可薄些。<br />
              （2）倒完泥浆的模具一定要倒置，注浆口向上，这样还体内壁平滑，不会出现泥头或乳头状泥钉。<br />
              （3）凡注浆成型的坯体底部的注浆口需修整平滑、干净以防收缩和烧成时开裂。<br />
              （4）修坯是印坯成型和注浆成型中较重要的环节，因为从形体设计制作到翻模、注浆取模的过程中形体容易被损坏，修坯的过程是恢复其原貌及再创作的过程。<br />
              4．特点<br />
              &emsp;&emsp;模具成型的效果主要表现为重复性和系列性，以多个相同的重复造型组合在起，产生一定的节奏感和韵律感。相同的造型与不同的装饰和色彩变化，展现出相对的空间占用和视错效果，产生不断重叠的影像，增强现代构成和展示设计的艺术特色。<br />
            </p>

            <div align="center" style="padding-top: 20px;">
              <el-image
                style="width: 30%;"
                :height="bannerHeight + 'px'"
                :src="url"
              ></el-image>
            </div>
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
      opends: ["1"],
      bannerHeight: 200,
      url:
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/teach/chengxing_shigao_img1.png"
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
