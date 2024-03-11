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
              <el-menu-item index="/classes/caitao/caitao" class="is-active"
                >彩陶</el-menu-item
              >
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
                <el-breadcrumb-item>彩陶</el-breadcrumb-item>
                <el-breadcrumb-item>彩陶</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【彩陶】</p>
            <p class="p_main">
              &emsp;&emsp;亦称陶瓷绘画，它是我国悠久的“国粹”——陶瓷艺术之中的艺术，早在距今七千年左右的半坡文化时期，陶上便出现了最早的彩绘。而瓷上作品相对纸本更具张力，彩陶艺术中融合了艺术家的各种创作思想、风格、语言，创作出风格各异而又多姿多彩的艺术珍品，是我国不可多得的文化瑰宝。
              彩陶是指在打磨光滑的橙红色陶坯上，以天然的矿物质颜料进行描绘，用赭石和氧化锰作呈色元素，然后入窑烧制。在橙红色的胎体上呈现出赭红、黑、白、诸种颜色的美丽图案，形成纹样与器物造型高度统一，达到装饰美化效果的陶器。
              彩陶制作精美，以泥质陶为主，质地细腻，因之既是实用器皿，又具有很高的艺术价值。由于色彩绘于烧制前，故和陶器一起焙烧后，色彩和陶胎结合紧密，不易发生脱落。彩绘的形式总体上可分为图案和图画两大类。
              彩陶发源于距今约10000年前的新石器时代。人类在新石器时代伴随着相对定居的农耕文化一起发明了烧陶技术。关中地区大约在公元前6000年的老官台文化时期就有了较发达的陶器，有个别钵形器口沿装饰一条宽彩带，这是彩陶的萌芽。在公元前5000年的西安半坡村的仰韶文化遗址中，发现了很多精美的彩陶，表明在半坡时期，人们已经能熟练地控制窑温，并且彩绘艺术也达到了很高的水平。
              烧成温度约在900℃。
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
