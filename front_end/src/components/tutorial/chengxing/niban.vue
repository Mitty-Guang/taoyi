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
              <el-menu-item index="/tutorial/chengxing/niban" class="is-active"
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
                <el-breadcrumb-item>泥板成型法</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div class="text">
            <p class="title">【泥板成型法】</p>
            <p class="p_main">
              <!-- &emsp;&emsp; -->
              1．简介<br />
              &emsp;&emsp;
              泥板成型是现代陶艺中最为常用的成型方法之一，它制作便利有较强的站立性，便于表现棱角转折清晰的造型。泥板成型不仅能做有棱角的器形，也能做一些同心圆的造型。例如：宜兴紫砂器皿很多造型都是泥板成型或是泥板拍打成型。<br />
              2．方法<br />
              （1）拍打法：<br />
              用手掌或木板、木棒等工具，拍打泥块，使其成为板状形态。也可以在木板、木棒上包裹不同的材料。如：麻布、线、铁丝等，就会产生不同的肌理，具有丰富的表面形态。<br />
              （2）擀压法：<br />
              利用圆形木棒或钢管，擀压泥块，还可以利用不同厚薄的木条作厚薄标尺，做到泥板的均匀厚度。擀压法的转压力量较大，可以制作较大的泥収。<br />
              （3）切片法：<br />
              先将泥块打成长的矩形泥块，利用切割线把泥块切成片状，因切割线不容易拉直，所以泥块不容易拉平，只适合切割条状泥片。<br />
              3．注意事项<br />
              （1）利用泥板有湿度的时候比较软，可以像布一样随意做造型，但制作大一点的造型就会容易倒塌，这时我们可以用泡沫、纸等作支撑，等泥坯干燥到一定程度的时候再将支撑物拿出。<br />
              （2）由于泥板镶接成型是在泥板干燥到一定程度后进行制作的，不容易粘接紧，所以关键是要处理好接口。一定在泥板接口处用锯条刮毛，在刮毛的接口上涂上泥浆，还要把接口处成一定的斜度，以增加接口的强度，防止烧成开裂。<br />
              4．特点<br />
              &emsp;&emsp;
              泥板成型是现代陶艺最为常用的成型方法之。泥的可塑性和柔软性，使其通过外力作用可达到想要的泥板形状，并可任意切割和搓捏。泥板成型是现代陶艺表现力丰富、体现艺术个性的有效成型方法。<br />
            </p>

            <div align="center" style="padding-top: 20px;">
              <el-image
                style="width: 50%;"
                :height="bannerHeight + 'px'"
                :src="url"
              ></el-image>
            </div>
            <div align="center" style="padding-top: 20px;">
              <el-image
                style="width: 70%;"
                :height="bannerHeight + 'px'"
                :src="url2"
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
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/teach/chengxing_niban_img1.png",
      url2:
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/teach/chengxing_niban_img2.png"
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
