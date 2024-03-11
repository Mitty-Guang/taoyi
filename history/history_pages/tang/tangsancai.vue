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
              <el-menu-item index="/history/tang/tangsancai" class="is-active"
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
                <el-breadcrumb-item>唐代</el-breadcrumb-item>
                <el-breadcrumb-item>唐三彩</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【唐三彩】</p>
            <p class="p_main">
              &emsp;&emsp;唐三彩（Tang Tri-Color Glazed
              Ceramics），中国古代陶瓷烧制工艺的珍品，全名唐代三彩釉陶器，是盛行于唐代的一种低温釉陶器，釉彩有黄、绿、白、褐、蓝、黑等色彩，而以黄、绿、白三色为主，所以人们习惯称之为“唐三彩”。因唐三彩最早、最多出土于洛阳，亦有“洛阳唐三彩”之称。<br />&emsp;&emsp;1905年陇海铁路洛阳段修筑期间，在古都洛阳北邙山发现一批唐代墓葬，后来人们习惯地把这类陶器称为“唐三彩”，并且沿用，享誉中外。<br />&emsp;&emsp;唐三彩，是从唐墓挖掘出来的陶器之泛称，后来学者视为一种陶瓷分类上的术语。唐三彩并非专指那三种色彩而言。在唐墓中所挖掘出来的各类陶俑、陶像，以及其他陶器上，有的只有单彩，或者二彩，有甚多的器物，却具有较复杂的多彩颜色。一般而言，除了胎体的白地之外，铅黄、绿、青三彩最为普遍，在三彩的调配技法上，也最富艺术的韵味。唐三彩的器皿较少，而小马、小家畜、小家禽数量较多，均具丰美的艺术意匠，尤以各种人物的陶俑，以及超自然形象的魌头，最具艺术价值。三彩器正表现出唐代各种实际生活所应用的器物，而在这些器物中，却把当时社会生活的形态很完备的呈现出来，由此获知殉葬的明器与其他器物的形制与数量，均按照墓葬者生前官阶，以及门第的大小而定。例如唐礼明器之制，三品以上九十事，五品以上六十事，九品以上四十事。挺马偶人高一尺。其他音乐队、童仆之属、威仪服玩，亦各视其生前之品秩而定之。初唐之末期，始兴厚葬之风，其后自盛唐至中、晚唐，厚葬之风益甚，舁明器而行街衢，陈墓所，奏歌舞音乐，张帷幕，设盘牀，以造花、人形、饮食施路人，殆如祭祀。因为唐代讲究以三彩明器作为陪葬品，所以，从清末建筑河南汴洛铁路以来，在洛阳北郊邙山等地之唐墓中，先后发掘为数颇多之三彩器与俑像。唐三彩不论其形制与色彩之施化，均具极高之艺术意匠，乃引起日本、欧美各国人士之注目，而以高价购藏，从此唐三彩遂被列入世界艺术之一部分。以上引自君友会王爱君美术文献《唐三彩》。唐三彩制作最盛之时为开元、天宝至大历年间（公元713～766年）。其艺术成就是震古铄今，闻名中外的。唐三彩是由一个健全强明的朝代所启毓而成，同时，它也具体而活跃的反映出此一健全强明的时代精神。<br />&emsp;&emsp;唐三彩的制作工艺十分复杂。首先要将开采来的矿土经过挑选、舂捣、淘洗、沉淀、晾干后，用模具作成胎入窑烧制。唐三彩的烧制采用的是二次烧成法。从原料上来看，它的胎体是用白色的粘土制成，在窑内经过1000－1100℃的素烧，将焙烧过的素胎经过冷却，再施以配制好的各种釉料入窑釉烧，其烧成温度约800℃。在釉色上，利用各种氧化金属为呈色剂，经煅烧后呈现出各种色彩。<br />&emsp;&emsp;釉烧出来以后，有的人物需要再开脸，所谓的开脸就是人物的头部仿古产品是不上釉的，它要经过画眉、点唇、画头发这么一个过程，然后这一件唐三彩的产品就算完成了。
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
      opends: ["5"],
      bannerHeight: 200,
      collectors: "收藏",
      imgwrap: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片1.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片2.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片3.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片4.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片5.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片6.png"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片2.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片3.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片4.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片5.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/tang/tangsancai/图片6.png"
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
