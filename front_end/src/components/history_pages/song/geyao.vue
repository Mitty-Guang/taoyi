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
              <el-menu-item index="/history/song/geyao" class="is-active"
                >哥窑</el-menu-item
              >
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
              <el-menu-item index="/history/ming/mingchu">明初</el-menu-item>
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
                <el-breadcrumb-item>宋代五大名窑</el-breadcrumb-item>
                <el-breadcrumb-item>哥窑</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【哥窑】</p>
            <p class="p_main">
              &emsp;&emsp;“哥窑”名列宋代五大名窑，在陶瓷史上有举足轻重的地位。哥窑胎多紫黑色、铁黑色、也有黄褐色。釉为失透的乳浊釉，釉面泛一层酥光，釉色以炒米黄、灰青多见，釉面大小纹片结合。
              <br />&emsp;&emsp;经染色后大纹片呈深褐色，小纹片为黄褐色，也称“金丝铁线”“墨纹梅花片”“叶脉纹”“文武片”等。这是传世哥窑的主要特征之一。器形有各式瓶、炉、尊、洗及碗、盆、碟等。多见仿古造型，底足制作不十分规整，釉面常见缩釉和棕眼。
              <br />&emsp;&emsp;而《中国陶瓷史》这样叙述：
              <br />&emsp;&emsp;造型有各式瓶、炉、洗、盘、罐等。论胎有厚薄之分，其胎质有瓷胎和砂胎两种，胎色有黑灰、深灰、浅灰、土黄多种色调，釉色也有粉青、月白、油灰、青黄各色。从时间上讲，这里应有早晚之别，从产地说也有恐非一个瓷窑的作品，情况是比较复杂的。
              <br />&emsp;&emsp;记载“哥窑”的古文献主要有：元代的《至正直记》，明代的《格古要论》、《遵生八笺》，清代的《博物要览》以及明代的《浙江通志》等。但究竟哥窑窑址何在？性质如何?一直是陶瓷史研究中众说纷纭、悬而未决的问题。
              <br />&emsp;&emsp;流传于世的“哥窑”经典器大多源自清宫旧藏，由于这批器物与古文献中的记载的“哥窑”特征不符，而且没有考古资料佐证，因而造成了中国陶瓷史上最大的悬疑。
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
      opends: ["6"],
      bannerHeight: 200,
      collectors: "收藏",
      imgwrap: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/song/geyao/图片1.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/song/geyao/图片2.png"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/song/geyao/图片1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/song/geyao/图片2.png"
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
