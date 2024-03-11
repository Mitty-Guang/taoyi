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
                <el-menu-item
                  index="/tutorial/chengxing/nitiao"
                  class="is-active"
                  >泥条盘筑成型法</el-menu-item>
                <el-menu-item index="/tutorial/chengxing/shounie"
                  >手捏（雕塑）成型法</el-menu-item>
                <el-menu-item index="/tutorial/chengxing/niban"
                  >泥板成型法</el-menu-item>
                <el-menu-item index="/tutorial/chengxing/shigao"
                  >石膏模具成型</el-menu-item
                >
                <el-menu-item index="/tutorial/chengxing/lapei"
                  >拉坯成型法</el-menu-item>


              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span class="menuside">基本施釉方法</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/tutorial/shiyou/jinyou">浸釉法</el-menu-item>
                <el-menu-item index="/tutorial/shiyou/linyou">淋釉法</el-menu-item>
                <el-menu-item index="/tutorial/shiyou/dangyou">荡釉法</el-menu-item>
                <el-menu-item index="/tutorial/shiyou/tushuayou">涂刷釉</el-menu-item>
                <el-menu-item index="/tutorial/shiyou/penyou">喷釉法</el-menu-item>
                <el-menu-item index="/tutorial/shiyou/shuaiyou">甩釉法</el-menu-item>
                <el-menu-item index="/tutorial/shiyou/xinxing">新兴的施釉方法</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span class="menuside">装饰方式</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/tutorial/zhuangshi/caihui">彩绘</el-menu-item>
                <el-menu-item index="/tutorial/zhuangshi/guijinshu">贵金属装饰</el-menu-item>
                <el-menu-item index="/tutorial/zhuangshi/guangzecai">光泽彩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <span class="menuside" >传统陶艺VS现代陶艺</span>
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
                <el-menu-item index="/tutorial/buzhou/5shaipei">晒坯</el-menu-item>
                <el-menu-item index="/tutorial/buzhou/6kehua">刻花</el-menu-item>
                <el-menu-item index="/tutorial/buzhou/7shiyou">施釉</el-menu-item>
                <el-menu-item index="/tutorial/buzhou/8shaoyao">烧窑</el-menu-item>
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
                  <el-breadcrumb-item>泥条盘筑成型法</el-breadcrumb-item>
                  <el-breadcrumb-item></el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </div>

            <div class="text">
              <p class="title">【泥条盘筑成型法】</p>
              <p class="p_main">
              <!-- &emsp;&emsp; -->
                1．简介<br>
                &emsp;&emsp;泥条盘筑成型是最古老的一种成型手段，远在新时期时代的陶器就采用此方法成型。泥条盘筑成型是将泥料搓成均匀的圆条，在根据所需形体造型一层层叠加或用一根长泥条作螺旋形向上盘旋筑造成型的一种技巧。<br>
                2．方法<br>
                （1）先把泥条搓好，保持泥条粗细均匀。<br>
                （2）把泥条连接在一块事先做好的器底泥片上，并用手指在里面把它压紧。<br>
                （3）根据造型再一层一层盘高，注意胚体里面抹平，以使泥条之间连接更紧。<br>
                3．注意事项<br>
                （1）每层泥条之间要按抹结实，否则会因烧制而开裂。<br>
                （2）作品盘筑到一定高度后，如遇底面未干，造成重心不稳、作品变形或倾斜等问题，应立即停止盘筑，先将正在盘筑的上边接口用塑料布扎紧，保持接口的潮湿，干燥一段时间，待底面有一定强度后再继续盘筑。<br>
                （3）较大作品的泥条盘筑容易产生中心不稳和向外倾斜的问题，在盘筑外形的同时需要在作品内从下至上盘筑泥撑，泥撑能使外形保持平衡。<br>
                （4）每层泥条的干湿度要均匀，否则会因收缩不一致而开裂。<br>
                （5）泥条较干，可用毛笔把接头泥涂于泥条与泥条之间，以增强黏度。4．特点泥条盘筑成型的白由度和随意性较强，在陶艺形体造型中的宽容度较大，便于塑造比较复杂的形体。它不仅能塑造规整的造型，还能塑造一些扭动和弯曲的造型，为我们施展才能、抒发情感、表达意念提供了广阔的空间。
              </p>

              <div align="center" style="padding-top: 20px;">
                  <el-image style="width: 30%;" :height="bannerHeight + 'px'" :src="url"></el-image>
             </div>
              <div>
                <i>
                    <br>
                    <br>
                    <br>
                </i>
               
              </div>
            
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </template>
  
<style>

</style>
  
  <script>
  export default {
    data() {
      return {
        opends: ["1"],
        bannerHeight: 200,
        url: "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/teach/chengxing_nitiao_img1.png",
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
  