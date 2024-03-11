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
          <h4>
            {{ news.date }} 点赞{{ news.up }} 浏览{{ news.click }} | 来源：{{
                news.source
            }}
          </h4>
        </div>
        <el-divider></el-divider>
        <div class="news-text">
          <p>
            本报南昌6月13日电
            （记者杨颜菲）6月11日，全国首个古陶瓷基因库——景德镇古陶瓷基因库在景德镇御窑博物院正式揭牌。基因库的建立对于构建陶瓷考古年代框架体系、研发古陶瓷鉴定方法、制订陶瓷行业技术标准、推动陶瓷数字藏品与文旅应用、建设相关国际一流科研团队及彰显中华文化自信，都将产生重要作用。
          </p>

          <p>
            景德镇陶瓷历史遗存丰富，自20世纪70年代末以来，景德镇御窑博物院及其前身景德镇市陶瓷考古研究所，在数十年考古工作中出土了海量的晚唐至民国时期的窑业标本和其他丰富的文化遗存。景德镇古陶瓷基因库将出土瓷片运用技术手段制作成物理和数字形态的基因标本，标本的出土地点明确、地层清晰、品类丰富，相关数据极具权威性。
          </p>

          <p>
            古陶瓷基因库揭牌后，景德镇御窑博物院等计划用1年半左右时间，入库近万件明代御窑基因标本，之后用3至5年时间完成景德镇历年考古出土标本的基因入库工作。
          </p>

          <p>
            眼下正是纺织外贸旺季，谭宇凡每天往返于柯桥纺织东升路市场、东市场、北市场、联合市场等，为当地企业、采购商高效解决找样难题。
          </p>

          <p>
            金秋十月产销忙。在柯桥柯海公路上，来往的装料货车川流不息，蔚为壮观：由南向北是运进蓝印小镇进行印染的白色坯布，反向则是五颜六色的纺织面料，分散到产业链下游。
          </p>

          <p>
            今年前8个月，柯桥全区出口854.14亿元，同比增长28.0%。分市场看，柯桥面向“一带一路”沿线国家出口498.08亿元，同比增长29.8%；对区域全面经济伙伴关系协定（RCEP）成员国家出口181.25亿元，同比增长40.2%。
          </p>

          <p>
            浙江凡特思纺织有限公司是柯桥纺织外贸龙头企业，今年前三季度，企业出口达到2.3亿美元，同比增速超过15%。企业董事长傅光怿表示，柯桥有数以万计、触角灵敏的市场经营户，有完整的纺织产业链，纺织业优势在转型升级、有机更新中不断夯实，国际地位、比较优势一直保持提升。
          </p>

          <p>
            1992年，“绍兴轻纺市场”更名为“中国轻纺城”，成为全国首个冠之以“中国”的轻纺专业市场。30年来，从摇着船橹的“水上布市”，到大胆开辟“马路市场”，再到建设现代化“国际纺都”，柯桥纺织产业拔地而起、活力勃发。
          </p>

          <p>
            绍兴市柯桥区商务局介绍，今年以来柯桥新设市场主体达1.5万家，净增近万家，表明柯桥纺织业依旧充满生机活力。
          </p>

          <p>
            政企协作织好“一块布”。在浙江多看看信息技术有限公司，多个网络直播间同时开播，快速拓展纺织品销售渠道。柯桥区退职干部竹秋军是这家企业的驻企指导员，他的职责是帮助企业了解直播人才落户政策，并协调与村社结对成立了直播“共富工坊”。
          </p>

          <p>
            “驻企指导员帮上了大忙！”企业总经理郑龙表示，驻企指导员发挥特长帮助了解政策、协调办理，有力支持企业团队全力以赴发展业务。（记者
            方问禹、崔力）
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
      id: 6,
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
