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
              <span class="menutitle">新石器时代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/xinshiqi/theoldest"
                >世界上最古老的陶器</el-menu-item
              >
              <el-menu-item index="/history/xinshiqi/yangshao"
                >仰韶文化（彩陶艺术）</el-menu-item
              >
              <el-menu-item index="/history/xinshiqi/longshan"
                >龙山文化（黑陶艺术）</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span class="menutitle">商周时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/shangzhou/baitao"
                >白陶</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span class="menutitle">战国时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/zhanguo/kongxinzhuan"
                >空心砖</el-menu-item
              >
              <el-menu-item index="/history/zhanguo/huitao">灰陶</el-menu-item>
              <el-menu-item index="/history/zhanguo/yinwenyingtao"
                >印纹硬陶</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span class="menutitle">秦汉时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/qinhan/bingmayong"
                >兵马俑</el-menu-item
              >
              <el-menu-item index="/history/qinhan/caihuitao"
                >彩绘陶</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span class="menutitle">唐代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/tang/tangsancai"
                >唐三彩</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <span class="menutitle">宋代五大官窑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/song/ruyao">汝窑</el-menu-item>
              <el-menu-item index="/history/song/guanyao">官窑</el-menu-item>
              <el-menu-item index="/history/song/geyao">哥窑</el-menu-item>
              <el-menu-item index="/history/song/junyao">钧窑</el-menu-item>
              <el-menu-item index="/history/song/dingyao">定窑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/history/yuan" class="yuan">元代</el-menu-item>
          <el-submenu index="7">
            <template slot="title">
              <span class="menutitle">明代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/ming/mingchu" class="is-active"
                >明初</el-menu-item
              >
              <el-menu-item index="/history/ming/yongxuan"
                >永乐、宣德</el-menu-item
              >
              <el-menu-item index="/history/ming/zjt"
                >正统、景泰、天顺</el-menu-item
              >
              <el-menu-item index="/history/ming/chz"
                >成化、弘治、正德</el-menu-item
              >
              <el-menu-item index="/history/ming/jlw"
                >嘉靖、隆庆、万历</el-menu-item
              >
              <el-menu-item index="/history/ming/tianqi">天启</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <span class="menutitle">清代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/qing/shunzhi">顺治</el-menu-item>
              <el-menu-item index="/history/qing/kangxi">康熙</el-menu-item>
              <el-menu-item index="/history/qing/yongqian"
                >雍正、乾隆</el-menu-item
              >
              <el-menu-item index="/history/qing/jiaqing">嘉庆</el-menu-item>
              <el-menu-item index="/history/qing/guangxu">光绪</el-menu-item>
              <el-menu-item index="/history/qing/xuantong">宣统</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="/history/xiandai" class="xdty"
            >现代陶艺</el-menu-item
          >
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
                <el-breadcrumb-item>历史</el-breadcrumb-item>
                <el-breadcrumb-item>明代</el-breadcrumb-item>
                <el-breadcrumb-item>明初</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【明初】</p>
            <p class="p_main">
              &emsp;&emsp;明初（洪武朝1368--1402）的青花器有大小盘、碗、梅瓶、玉壶春瓶等。所用青料以国产料为主，也不排除有少量进口料。青花发色有的淡蓝，有的泛灰。前者有一部分有晕散现象。纹饰布局仍有元代多层装饰的遗风，题材也变化不大，但许多细节已有变化：如蕉叶的中梗留白；花瓣留白边较之元代更明显清晰；牡丹叶子“缺刻”部位较深，不如元代的肥硕；菊花绘成“扁菊”，花芯以方格纹表现；龙纹仍是细长身，但除了三、四爪外，已出现五爪，爪形似风轮，气势不如元龙凶猛矫健。辅助纹饰的如意云头由元代的三阶云改为二阶云；莲瓣纹内多绘佛家八宝（元代多绘道家杂宝）。碗、小盘多绘云气纹，仅绘于器物外壁的上半部。器物底足多平切、砂底无釉见窑红。未出现年款，带款的器物也极少。
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
      opends: ["7"],
      bannerHeight: 200,
      collectors: "收藏",
      imgwrap: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/mingchu/图片1.png"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/mingchu/图片1.png"
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
