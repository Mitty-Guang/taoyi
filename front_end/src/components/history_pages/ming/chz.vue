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
              <el-menu-item index="/history/ming/mingchu">明初</el-menu-item>
              <el-menu-item index="/history/ming/yongxuan"
                >永乐、宣德</el-menu-item
              >
              <el-menu-item index="/history/ming/zjt"
                >正统、景泰、天顺</el-menu-item
              >
              <el-menu-item index="/history/ming/chz" class="is-active"
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
                <el-breadcrumb-item>成化、弘治、正德</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【成化、弘治、正德】</p>
            <p class="p_main">
              &emsp;&emsp;成化（1465—1487）、弘治（1488—1505）、正德（1506—1521）三朝处于明中期。成化和弘治中期以前使用平等青，发色淡雅。弘治晚期与正德则发色灰蓝。但此期也有个别器物发色浓艳，有铁锈斑。
              <br />&emsp;&emsp;成化多淡描青花。纹饰布局前期疏朗，后期繁密，多画三果、三友、九秋、高士、婴戏、龙穿花等。花叶似手掌撑开状；叶子多齿边，花叶均无阴阳正反；鱼藻的水草飘似海带；山石似钥匙状无凹凸感；边饰较简单，碗、盘、杯等口沿、圈足仅用弦纹装饰；龙多为夔龙，鼻子长长的像象鼻；十字宝杵、阿拉伯文等伊斯兰教内容的纹饰多见。胎质细腻洁白，釉极细润有玉质感，但稍微发青。器型有罐、梅瓶、洗、盏托、盘、杯、碗等，炉为三乳足筒式或鼓形炉。款识除“天”字罐外，还有“大明成化年制”六字单、双行款；图记款主要有方胜、银锭等。
              <br />&emsp;&emsp;弘治器物早、中期大致与成化同，甚至比成化更纤巧柔和。后期与正德器接近。花叶纹细而密，梵文图案增多，龙纹纤细柔和，人物洒脱。款识为六字、四字楷书款都有。
              <br />&emsp;&emsp;正德仍用国产料，前期用平等青，发色灰蓝。晚期始用回青。有的晕散。其器物的器型、胎质、釉质与弘治接近，气泡密集。深腹碗、带座器等流行。后期多见大器。纹饰常见的有凤穿花、鱼藻、狮子绣球、庭园婴戏、树石栏杆、莲托八宝等，绘画较弘治的粗。碗盘底心下蹋，碗出现鸡心底。器底多见窑红、粘砂、跳刀痕等现象。年款有四字和六字楷书款，个别用“造”字。
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
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/chz/图片1.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/chz/图片2.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/chz/图片3.png"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/chz/图片1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/chz/图片2.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/chz/图片3.png"
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
