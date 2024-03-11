<template>
  <el-container>
    <el-header>
      <el-menu :default-active="$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#c6ad8b" text-color="#000" active-text-color="#000" router>
        <el-menu-item index="/" style="float:left;">
          <img :src="logo" style="height: 80%; " />
        </el-menu-item>
        <div style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%);">
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
            <span class="menutitle">教程</span>
          </el-menu-item>
          <el-menu-item index="5" style="float: left;"><span class="menutitle">论坛</span></el-menu-item>
        </div>
        <el-menu-item index="/user" style="float:right;">
          <img :src="portrait" style="height: 80%; " />
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="height: calc(100vh - 60px);">
      <div class="index-forum">
        <div align="center">
          <el-carousel style="width: 60%;" :height="bannerHeight + 'px'">
            <el-carousel-item v-for="item in imgwrap" :key="item.url">
              <el-image style="height: 800px;" :src="item.url" :fit="fill" :preview-src-list="srcList"
                v-on:click="getForum"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="index-hot-news">
        <div>
          <div class="index-title">
            热门新闻
          </div>
          <div class="index-content-with-img" style="box-shadow: darkgrey 0px 0px 30px 5px;" @click="news1">
            <div>
              <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220406-3.png" />
            </div>
            <div class="index-content-image-news">
              <div class="title">
                陶瓷匠刘志钧：用心一把泥 凡土化神奇
              </div>
              <div class="content">
                <p class="p1">
                  1969年出生的刘志钧，在陶瓷行当，正值创作之年，作品虽然不算多，但精品迭出，名享全国。游学半生，如中国陶瓷设计艺术大师、正高级工艺美术师、高级设计师、非物质文化遗产钧瓷烧制技艺传承人等名衔，他说，虽然也骄傲，但最在意的还是2018年获得的“中原大工匠”。为何？
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="index-content-with-img" style="box-shadow: darkgrey 0px 0px 30px 5px;" @click="news2">
              <div>
                <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220426.png" />
              </div>
              <div class="index-content-image-news">
                <div class="title">
                  古陶瓷生产的活化石
                </div>
                <div class="content">
                  <p class="p1">
                    耀州窑始于唐，成于五代，盛于宋，延续1400年炉火不熄，是一个自成窑系的北方著名窑场，是中国古陶瓷史上重要的符号。耀州窑至今仍保留着传统手工制作技艺，堪称“古陶瓷生产的活化石”。
                    “陶瓷烧制技艺分为原料加工、成型、烧成3大工序。烧是陶瓷最重要的工序，占半壁江山。就具体工序而言，受制瓷材料性能、工匠生活习惯等因素影响，我国南北陶瓷烧制技艺在工艺细分上存在一定差别。耀州窑陶瓷烧制技艺带有鲜明的地方性。”耀州窑陶瓷烧制技艺代表性传承人、中国工艺美术大师孟树锋表示。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="index-content-with-img" style="box-shadow: darkgrey 0px 0px 30px 5px;" @click="news3">
              <div>
                <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220618-1.png" />
              </div>
              <div class="index-content-image-news">
                <div class="title">
                  感受非遗文化，传承陶瓷艺术
                </div>
                <div class="content">
                  <p class="p1">
                    抚顺大官窑陶瓷制作技艺是抚顺市非物质文化遗产。6月16日，沈阳工学院部分艺术类专业和选修陶瓷制作课的学生，来到抚顺大官窑陶瓷工作室，在老师指导下体验陶瓷泥胚制作、陶瓷绘画等工艺，感受陶瓷制作魅力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="index-title">
            更多热门新闻
          </div>
          <div class="index-content" @click="news4">
            <div class="index-content-news">
              <div class="title">
                两代陶瓷人 同一“陶瓷梦”
              </div>
              <div class="content">
                <p class="p1">
                  “瓷代表”，这是许多人对全国人大代表、景德镇陶瓷发展中心主任、景德镇陶瓷美术家协会主席于集华的称呼。于集华出生于景德镇陶瓷世家，自幼跟随父辈学艺，从事陶瓷艺术创作50余年。
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="index-content" @click="news5">
              <div class="index-content-news">
                <div class="title">
                  景德镇：让陶瓷产业插上“数字翅膀”
                </div>
                <div class="content">
                  <p class="p1">
                    从2020年起，景德镇市相继与抖音、京东、快手、淘宝、天猫等平台开展战略合作，取得陶瓷直播带货平台经营权；
                    2021年10月，国家版权局批复授予景德镇市“全国版权示范城市”称号；
                    今年1月，景德镇新闻传媒集团获批成为全国“区块链+版权”特色领域试点单位；
                    今年2月，中国（景德镇）跨境电子商务综合试验区获国务院正式批复。
                    …………
                    数字经济的蓬勃发展，不断催生新产业新模式新业态。景德镇市作为担当建设全国陶瓷文化传承创新试验区主力军，正积极整合区位、平台、政策等资源要素，以“数”赋能，推动传统陶瓷产业转型升级。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="index-content" @click="news6">
              <div class="index-content-news">
                <div class="title">
                  景德镇成立首个古陶瓷基因库
                </div>
                <div class="content">
                  <p class="p1">
                    本报南昌6月13日电
                    （记者杨颜菲）6月11日，全国首个古陶瓷基因库——景德镇古陶瓷基因库在景德镇御窑博物院正式揭牌。基因库的建立对于构建陶瓷考古年代框架体系、研发古陶瓷鉴定方法、制订陶瓷行业技术标准、推动陶瓷数字藏品与文旅应用、建设相关国际一流科研团队及彰显中华文化自信，都将产生重要作用。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index-objects">
        <div class="index-intro">
          <div @click="toClasses"></div>
          <div @click="toHistory"></div>
        </div>
        <div>
          <div @click="toBMY"></div>
          <div @click="toTSC"></div>
          <div @click="toWDMY"></div>
          <div @click="toQHC"></div>
          <div @click="toYS"></div>
          <div @click="toLS"></div>
          <div @click="toCHT"></div>
          <div @click="toXDTY"></div>
          <div @click="toYWT"></div>
        </div>
      </div>
      <div class="index-footer">
        <div class="footer-logo">
          <div style="margin-top: 20px; ">
            <img src="../assets/images/taoci_origin.png" style="height: 60px; margin-left: 60px; " />
          </div>
        </div>
        <div class="footer-content" style="color: rgba(0, 0, 0, 0.6);">
          <p style="margin: 8px; font-size: 110%;">
            胡耀鑫 | 张鑫琳 | 李梦瑶 | 卢嘉鑫 | 光致远 （づ￣3￣）づ╭❤️～
          </p>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style>
.el-main {
  background-color: #f0eae2;
}

.menutitle {
  font-size: 150%;
}

.index-forum {
  margin-left: 25vh;
  margin-right: 25vh;
  margin-top: 10px;
  height: 800px;
  background-color: #fff;
  border-radius: 5px;
  background: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/佳作欣赏.png) no-repeat;
  background-size: 100% 100%;
  overflow-y: auto;
}

.index-hot-news {
  margin-left: 25vh;
  margin-right: 25vh;
  margin-top: 4vh;
  height: 700px;
}

.index-hot-news div:nth-child(1) {
  float: left;
  width: 58%;
  height: 100%;
  border-radius: 5px;
}

.index-hot-news div:nth-child(2) {
  float: right;
  width: 38%;
  height: 100%;
  border-radius: 5px;
}

.index-objects {
  margin-left: 25vh;
  margin-right: 25vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  height: 80vh;
}

.index-objects div:nth-child(1) {
  float: left;
  width: 40%;
  height: 80vh;
}

.index-objects div:nth-child(2) {
  float: right;
  right: 0;
  width: 58%;
  height: 80vh;
}

.index-objects div:nth-child(2)>div {
  width: 32%;
  height: 32%;
  margin: 0.5%;
  border-radius: 5px;
  float: left;
}

.index-objects div:nth-child(2)>div:nth-child(1) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/i1.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(2) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/i2.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(3) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/i3.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(4) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/i4.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(5) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/仰韶.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(9) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/印纹陶.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(7) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/彩绘陶.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(8) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/现代陶艺.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-objects div:nth-child(2)>div:nth-child(6) {
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/龙山.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-intro div:nth-child(1) {
  height: 48%;
  width: 100%;
  margin-bottom: 4%;
  background-color: #ece4d9;
  border-radius: 5px;
  box-shadow: darkgrey 0px 0px 30px 5px;
  overflow-y: auto;
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/陶瓷种类.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-intro div:nth-child(2) {
  height: 48%;
  width: 100%;
  background-color: #ece4d9;
  border-radius: 5px;
  box-shadow: darkgrey 0px 0px 30px 5px;
  overflow-y: auto;
  background-image: url(https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/index/陶瓷历史.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.index-title {
  top: 0 !important;
  padding-left: 20px !important;
  width: 100% !important;
  height: 60px !important;
  background-color: #f0eae2 !important;
  line-height: 60px;

  font-weight: bold !important;
  font-size: 140% !important;
}

.index-content {
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  width: 100% !important;
  height: 200px !important;
  background-color: #ece4d9 !important;

  cursor: pointer;
}

.index-content-news {
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100% !important;
  box-shadow: darkgrey 0px 0px 30px 5px;
  background-color: #ece4d9;
}

.index-content-news .title {
  width: 100% !important;
  height: 60px !important;
  padding: 0 !important;
  line-height: 60px;
  font-size: 120%;
  background-color: #ece4d9;
}

.index-content-news .content {
  width: 100% !important;
  height: 140px !important;
  overflow: hidden;
  font-size: 100%;
  background-color: #ece4d9;
}

.index-content-with-img {
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  width: 100% !important;
  height: 200px !important;
  background-color: #ece4d9 !important;
  cursor: pointer;
}

/* .index-content-with-img :hover {
  box-shadow: darkgrey 0px 0px 2px 2px;
} */

.index-content-with-img div:nth-child(1) {
  float: left;
  margin: 25px;
  height: 150px;
  width: 150px !important;
}

.index-content-image-news {
  float: left;
  margin-right: 20px;
  height: 100%;
  width: calc(100% - 220px) !important;
}

.index-content-image-news .title {
  width: 100% !important;
  height: 60px !important;
  padding: 0 !important;
  margin: 0 !important;
  line-height: 60px;
  font-size: 120%;
  background-color: #ece4d9;
}

.index-content-image-news .content {
  width: 100% !important;
  height: 140px !important;
  overflow: hidden;
  font-size: 100%;
  background-color: #ece4d9;
}

.p1 {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.el-main::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.el-main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: rgb(206, 206, 206);
  background-image: -webkit-linear-gradient(45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent);
}

.el-main::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.index-footer {
  background-color: #c6ad8b;
  padding-left: 40vh;
  padding-right: 40vh;
  width: 100%;
  margin-top: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;

  /* border-top: 2px solid;
 
  border-image: linear-gradient(
      to right,
      rgba(59, 59, 59, 0) 10%,
      rgb(59, 59, 59) 50%,
      rgba(59, 59, 59, 0) 90%
    )
    2 2 2 2; */
}

.index-footer .footer-logo {
  float: left;
  /* display: flex; */
  /* align-items: center; */
  height: 100%;
  width: 100px;
}

.index-footer .footer-content {
  float: left;
  margin-left: 100px;
}
</style>

<script>
import router from "../router";

export default {
  data() {
    return {
      logo: require("../assets/images/taoci_black.png"),
      portrait: require("../assets/logo.png"),
      bannerHeight: 800,
      imgwrap: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img1.jpg"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img2.jpg"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img3.jpg"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img4.jpg"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img1.jpg",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img2.jpg",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img3.jpg",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/taoyi/img4.jpg"
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
      this.bannerHeight = 800;
    },

    toClasses: function () {
      this.$router.replace("/classes");
    },
    toHistory: function () {
      this.$router.replace("/history");
    },
    toBMY: function () {
      this.$router.replace("/history/qinhan/bingmayong");
    },
    toTSC: function () {
      this.$router.replace("/history/tang/tangsancai");
    },
    toWDMY: function () {
      this.$router.replace("/history/song/ruyao");
    },
    toQHC: function () {
      this.$router.replace("/history/yuan");
    },
    toYS: function () {
      this.$router.replace("/classes/caitao/yangshao");
    },
    toLS: function () {
      this.$router.replace("/history/xinshiqi/longshan");
    },
    toCHT: function () {
      this.$router.replace("/classes/caihui");
    },
    toXDTY: function () {
      this.$router.replace("/history/xiandai");
    },
    toYWT: function () {
      this.$router.replace("/classes/yinwen");
    },
    news1: function () {
      this.$router.replace("/news/N20220406");
    },
    news2: function () {
      this.$router.replace("/news/N20220426");
    },
    news3: function () {
      this.$router.replace("/news/N20220618");
    },
    news4: function () {
      this.$router.replace("/news/N20210306");
    },
    news5: function () {
      this.$router.replace("/news/N20220417");
    },
    news6: function () {
      this.$router.replace("/news/N20220614");
    }
  }
};
</script>
