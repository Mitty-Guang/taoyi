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
        <el-menu-item index="/" style="float:left;">
          <img :src="logo" style="height: 80%; " />
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
          <img :src="portrait" style="height: 80%; " />
        </el-menu-item> </el-menu
    ></el-header>
    <el-main style="height: calc(100vh - 60px);">
      <div class="index-forum">
        <div align="center">
          <el-carousel style="width: 60%;" :height="bannerHeight + 'px'">
            <el-carousel-item v-for="item in imgwrap" :key="item.url">
              <el-image
                style="height: 800px;"
                :src="item.url"
                :fit="fill"
                :preview-src-list="srcList"
                v-on:click="getForum"
              ></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="index-hot-news">
        <div>
          <div class="index-title">
            热门新闻
          </div>
          <div
            class="index-content-with-img"
            style="box-shadow: darkgrey 0px 0px 30px 5px;"
          >
            <div>
              <img src="../assets/images/index/news/图片1.png" />
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
            <div
              class="index-content-with-img"
              style="box-shadow: darkgrey 0px 0px 30px 5px;"
            >
              <div>
                <img src="../assets/images/index/news/图片1.png" />
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
          </div>
          <div>
            <div
              class="index-content-with-img"
              style="box-shadow: darkgrey 0px 0px 30px 5px;"
            >
              <div>
                <img src="../assets/images/index/news/图片1.png" />
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
          </div>
        </div>
        <div>
          <div class="index-title">
            更多热门新闻
          </div>
          <div class="index-content">
            <div class="index-content-news">
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
            <div class="index-content">
              <div class="index-content-news">
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
          </div>
          <div>
            <div class="index-content">
              <div class="index-content-news">
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
      <div class="footer">
        <div class="footer-logo">
          <div style="margin-top: 20px; ">
            <img
              src="../assets/images/taoci_origin.png"
              style="height: 60px; margin-left: 60px; "
            />
          </div>
        </div>
        <div class="footer-content" style="color: rgba(0, 0, 0, 0.6);">
          <p style="margin: 8px; font-size: 110%;">
            胡耀鑫 2011899 | 张鑫琳 | 李梦瑶 2011764 | 卢嘉鑫 2011627 | 光致远
            1913077
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
  background: url(../assets/images/index/佳作欣赏.png) no-repeat;
  background-size: 100% 100%;
  overflow-y: auto;
}

.index-hot-news {
  margin-left: 25vh;
  margin-right: 25vh;
  margin-top: 4vh;
  height: 80vh;
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

.index-objects div:nth-child(2) > div {
  width: 32%;
  height: 32%;
  margin: 5px;
  border-radius: 5px;
  float: left;
}
.index-objects div:nth-child(2) > div:nth-child(1) {
  background-image: url(../assets/images/index/i1.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(2) {
  background-image: url(../assets/images/index/i2.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(3) {
  background-image: url(../assets/images/index/i3.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(4) {
  background-image: url(../assets/images/index/i4.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(5) {
  background-image: url(../assets/images/index/仰韶.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(9) {
  background-image: url(../assets/images/index/印纹陶.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(7) {
  background-image: url(../assets/images/index/彩绘陶.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(8) {
  background-image: url(../assets/images/index/现代陶艺.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.index-objects div:nth-child(2) > div:nth-child(6) {
  background-image: url(../assets/images/index/龙山.png);
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
  background-image: url(../assets/images/index/陶瓷种类.png);
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
  background-image: url(../assets/images/index/陶瓷历史.png);
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
  padding: 20px;
  height: 160px;
  width: 160px;
}
.index-content-image-news {
  float: left;
  padding-right: 20px;
  height: 100%;
  width: calc(100% - 220px) !important;
}
.index-content-image-news .title {
  width: 100% !important;
  height: 60px !important;
  padding: 0 !important;
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
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.el-main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: rgb(206, 206, 206);
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.el-main::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.footer {
  background-color: #c6ad8b;
  padding-left: 40vh;
  padding-right: 40vh;
  width: calc(100% - 80vh);
  margin-top: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border-top: 2px solid;
 
  border-image: linear-gradient(
      to right,
      rgba(59, 59, 59, 0) 10%,
      rgb(59, 59, 59) 50%,
      rgba(59, 59, 59, 0) 90%
    )
    2 2 2 2; */
}
.footer .footer-logo {
  float: left;
  /* display: flex; */
  /* align-items: center; */
  height: 100%;
  width: 100px;
}
.footer .footer-content {
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
          url: require("../assets/images/陶艺/0647306683B6CF4EC2B70B7E67FAAAE3.jpg")
        },
        {
          url: require("../assets/images/陶艺/0F65B0CF3912EDD6FFE099343382EAD6.jpg")
        },
        {
          url: require("../assets/images/陶艺/10BC7149A039598378D0A7E813EA8E42.jpg")
        },
        {
          url: require("../assets/images/陶艺/120549B2F6C0095744BFB9BB00D1AE84.jpg")
        }
      ],
      srcList: [
        require("../assets/images/陶艺/0647306683B6CF4EC2B70B7E67FAAAE3.jpg"),
        require("../assets/images/陶艺/0F65B0CF3912EDD6FFE099343382EAD6.jpg"),
        require("../assets/images/陶艺/10BC7149A039598378D0A7E813EA8E42.jpg"),
        require("../assets/images/陶艺/120549B2F6C0095744BFB9BB00D1AE84.jpg")
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

    toClasses: function() {
      this.$router.replace("/classes");
    },
    toHistory: function() {
      this.$router.replace("/history");
    },
    toBMY: function() {
      this.$router.replace("/history/qinhan/bingmayong");
    },
    toTSC: function() {
      this.$router.replace("/history/tang/tangsancai");
    },
    toWDMY: function() {
      this.$router.replace("/history/song/ruyao");
    },
    toQHC: function() {
      this.$router.replace("/history/yuan");
    },
    toYS: function() {
      this.$router.replace("/classes/caitao/yangshao");
    },
    toLS: function() {
      this.$router.replace("/history/xinshiqi/longshan");
    },
    toCHT: function() {
      this.$router.replace("/classes/caihui");
    },
    toXDTY: function() {
      this.$router.replace("/history/xiandai");
    },
    toYWT: function() {
      this.$router.replace("/classes/yinwen");
    }
  }
};
</script>
