<template>
  <el-main class="news">
    <el-header>
      <el-menu :default-active="$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#c6ad8b" text-color="#000" active-text-color="#000" router>
        <el-menu-item index="/index" style="float:left;">
          <img src="../../assets/images/taoci_black.png" style="height: 80%; " />
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
          <img src="../../assets/logo.png" style="height: 80%; " />
        </el-menu-item>
      </el-menu>
    </el-header>
    <div class="news-main">
      <div class="news-article">
        <div class="news-title">
          <div></div>
          <h1>{{ news.title }}</h1>
          <h1 style="font-size:20px">——中国工艺美术大师孟树锋谈耀州窑</h1>
          <h4>
            {{ news.date }} 点赞{{ news.up }} 浏览{{ news.click }} | 来源：{{
                news.source
            }}
          </h4>
        </div>
        <el-divider></el-divider>
        <div class="news-text">
          <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220426.png" alt="" />
          <p>
            耀州窑始于唐，成于五代，盛于宋，延续1400年炉火不熄，是一个自成窑系的北方著名窑场，是中国古陶瓷史上重要的符号。耀州窑至今仍保留着传统手工制作技艺，堪称“古陶瓷生产的活化石”。
          </p>

          <p>
            “陶瓷烧制技艺分为原料加工、成型、烧成3大工序。烧是陶瓷最重要的工序，占半壁江山。就具体工序而言，受制瓷材料性能、工匠生活习惯等因素影响，我国南北陶瓷烧制技艺在工艺细分上存在一定差别。耀州窑陶瓷烧制技艺带有鲜明的地方性。”耀州窑陶瓷烧制技艺代表性传承人、中国工艺美术大师孟树锋表示。
          </p>

          <p>
            耀州窑制瓷原料成分与南方窑系制瓷原料成分形成明显反差。孟树锋解释，耀州窑当地的地质属于沉积岩，原料杂质比较大，硅的含量一般在50%至70%，铝的含量在20%左右，而南方窑系的制瓷原料硅含量一般在70%以上，铝的含量在10%左右。“我们的原料高铝低硅，可塑性比较强，烧成温度比较高。耀州瓷的最高烧制温度可以达1350摄氏度，但如果越窑瓷器的烧制温度达到1320摄氏度，瓷器可能就变形了。”孟树锋说，“此外，我们的釉料为一元配方，南方的釉料可能需要几种矿物来配制。我们的原石颜色几乎跟青瓷颜色一样，只要粉碎了，研细了，调匀了，烧就行。这是我们得天独厚的优势。”
          </p>

          <p>
            从原料加工方法来看，南方使用水礅法，耀州窑采用水耙法。“这两种方法最晚在唐代已经成形，且南北界限区分很清楚。”孟树锋说。
          </p>

          <p>
            三分手艺，七分靠轮子实现。进入成型阶段，不管在南方还是北方，拉坯设备——轮子都是传统制瓷业里最核心的设备。孟树锋说：“轮子就是制陶人的生命线。我们的轮子在唐代用木头制成，到宋代是石轮，而南方多半是木头的。我们的轮子高出地面一尺，南方是地轮，有些几乎与地面平行，甚至还要低。如今，各地拉坯和修坯都在轮子上进行。”
          </p>

          <p>
            耀州窑青瓷在宋代以刻花见长，刻花工艺繁杂。“刻花是时代风尚，但耀州窑与其他窑系不一样的是，采用两刀刻，着力较大，线条深而宽。而南方的福建窑、景德镇窑，双线刻一刀，一刀划过去呈现两根线条，一宽一窄。”孟树锋表示。
          </p>
          <p>
            材质和工具不一样，装饰风格也不一样。在孟树锋看来，耀州窑瓷器刀锋犀利，流畅活泼，图案层次分明，工艺难度较大，人文气息浓厚，地方特色更加浓郁。“我们的楼台牡丹刻花，雍容华贵，不断在强调、在重复，深浅有度，立体感明显。”孟树锋表示。
          </p>
          <p>
            在烧成阶段，孟树锋认为，从窑炉来看，耀州窑和南方窑系最大的区别就是使用马蹄窑，“马蹄窑在宋代把窑炉结构的形式发挥到最佳的科学状态，利于火焰和烧成控制。这也是宋代青瓷登上中国乃至世界青瓷高峰的一个重要因素。”
          </p>
          <p>
            “耀州窑陶瓷烧制技艺研究是一门博大精深的学科，其中蕴藏的历史、文化、艺术积淀十分深厚。我们要本着科学、客观、负责、严谨的态度，做大量复原试验，把这项技艺弄懂弄通，让民族的优秀文化得以传承下去。”孟树锋说。
          </p>
        </div>
        <div class="news-bottom">
          <el-button plain @click="on()" width="20px">
            <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-f.svg" alt="123" width="18px"
              v-if="like" />
            <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-b.svg" alt="123" width="18px"
              v-else />
            <div>点赞</div>
          </el-button>
        </div>
      </div>
      <el-card class="news-list-hot">
        <div slot="header" class="clearfix">
          <span>热点新闻</span>
        </div>
        <a href="#" class="text" v-for="news in news_hot" :key="news.id" v-on:click="news_turn(news.text)">
          <div>{{ news.title }}</div>
        </a>
      </el-card>
    </div>
  </el-main>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.news {
  background-color: #f0eae2 !important;
  color: #333;
  height: 100vh;
}

.news .news-main {
  width: 1100px;
  background-color: rgb(255, 255, 255);
  margin: 50px auto;
}

.news .news-main .news-article {
  float: left;
  margin-top: 20px;
  width: 55%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  background-color: rgb(255, 255, 255);
  padding: 50px;
}

.news .news-main .news-article h1 {
  height: 60px;
  text-align: center;
}

.news .news-main .news-article h4 {
  font-size: 14px;
  color: rgb(125, 125, 125);
  text-indent: 2em;
  height: 35px;
  margin-top: 15px;
}

.news .news-main .news-article p {
  font-size: 18px;
  text-indent: 2em;
}

.news .news-main .news-article .news-text img {
  width: 100%;
}

.news a {
  color: rgb(51, 51, 51);
  text-decoration: none;
}

.news a:hover {
  color: rgb(67, 140, 213);
  text-decoration: none;
}

.news .news-list-hot .clearfix:before,
.news .news-list-hot .clearfix:after {
  display: table;
  content: "";
}

.news .news-list-hot .clearfix:after {
  clear: both;
}

.news .news-list-hot .text {
  font-size: 15px;
  line-height: 40px;
  height: 40px;
  width: 230px;
  margin-bottom: 10px;
}

.news .news-list-hot {
  margin-top: 20px;
  width: 33%;
  float: right;
}

.news .news-bottom {
  height: 20px;
  width: 100px;
  float: right;
  margin: 30px;
  margin-right: 0px;
}

.news .news-bottom div {
  float: right;
  font-size: 16px;
  line-height: 18px;
  height: 16px;
}
</style>
<script>
export default {
  data() {
    return {
      like: false,
      news_hot: [],
      news: [],
      id: 5,
      username: document.cookie.replace("username=", "")
    };
  },
  methods: {
    on() {
      if (this.username == '') {
        this.$message('请登录');
        return;
      }
      this.like = !this.like;
      var _this = this;
      this.$http.get("http://39.101.122.176:88/news/like?id="
        + _this.id
        + "&username="
        + document.cookie.replace("username=", "")
      ).then(res => {
        console(res);
      });
    },
    news_gethot() {
      var _this = this;
      this.$http.get("http://39.101.122.176:88/news/hot").then(res => {
        _this.news_hot = res.data.data;
        console(res);
      });
    },
    news_getone() {
      var _this = this;
      if (this.username == '') {
        this.$http.get("http://39.101.122.176:88/news/one?id="
          + _this.id
        ).then(res => {
          _this.news = res.data.data;
          console(res);
        });
      }
      else {
        this.$http.get("http://39.101.122.176:88/news/one?id="
          + _this.id
          + "&username="
          + document.cookie.replace("username=", "")
        ).then(res => {
          _this.news = res.data.data;
          _this.like = res.data.data.islike;
          console(res);
        });
      }

    },
    news_turn(url) {
      console.log(url);
      this.$router.push({ path: url });
    }
  },
  mounted() {
    this.news_gethot();
    this.news_getone();
  }
};
</script>
