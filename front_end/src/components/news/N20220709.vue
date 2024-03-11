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
            集资料存储、考古研究、科技分析、保护修复、成果展示于一体的中华陶瓷文明文物基因库，将有利于我们更好地研究、阐释陶瓷文化蕴含的中华文明之美。
          </p>

          <p>
            “商人重利轻别离，前月浮梁买茶去。”白居易的这首诗家喻户晓。你想了解那个时期浮梁地区与茶叶相关的制瓷工艺吗？在景德镇的古陶瓷基因库里正好可以找到这样一件标本。
          </p>

          <p>
            2012年，考古人在景德镇浮梁县兰田窑进行发掘，发现一件晚唐时期的青瓷碗，侈口，曲腹，圈足，釉面光亮，呈青绿色，碗内有支钉叠烧痕。支钉叠烧的具体方法是：用高岭土捏成“支钉”，把这些钉粘于碗盘圈足的边沿，然后把碗坯放在垫柱上，再把粘有支钉的碗坯重叠起来。这代表了这一地区最早的制瓷工艺。如今，在基因库里它有了一个编号，打头的T代表“唐代”，随后的QY代表“青釉”，WA代表“碗”，C代表“残片”，还有数字代表序号。以此类推，基因库的标本都会按照年代、品类、器类和形态信息进行编码。
          </p>

          <p>
            今年6月11日，由国内多家知名学术机构共建的全球首个古陶瓷基因库在景德镇御窑博物院挂牌。这标志着集资料存储、考古研究、科技分析、保护修复、成果展示于一体的中华陶瓷文明文物基因库建设正式启动，一个新型的多学科合作和协同创新平台正在形成。
          </p>

          <p>
            景德镇古陶瓷基因库，指景德镇古代生产的各类瓷器的典型标本及其信息总和。景德镇御窑博物院及其前身景德镇市陶瓷考古研究所在40多年的考古工作中，出土了数以千万计的古陶瓷标本，在此基础上，与北京大学、清华大学、故宫博物院、中国科学院上海硅酸盐研究所等院校机构合作，开展基因标本制作和知识图谱型数据库的建设。科研人员将对御窑厂、湖田窑、观音阁、丽阳乡、兰田窑等瓷业遗址发掘出土的标本进行整理，根据器物的年代、形制、工艺等特征，选出最具代表性的标本组成“标准器物流”，并完成每件标准器物所对应的残片、截面、薄片、粉末4种实体样品制备与虚拟样品构建。这些样品作为信息元，全面涵盖了景德镇瓷器的“考古信息片段”“胎料技术片段”“成型技术片段”“釉料技术片段”“装烧技术片段”“彩绘装饰片段”等基因片段信息。
          </p>

          <p>
            明清时期入库最多的是御窑瓷器标本。御窑出土的基因标本还会加上一个特殊编号“Y”，代表“御窑”。最新收入的一件标本来自2020年御窑厂西围墙的考古勘探，编号中用“QH”来代表青花，用“SZ”代表“试照”，说明它是一件民窑试验青花料的试照标本，上面以不同深浅的钴料书写“淡”“浓”等字样，揭示了明代正统到天顺年间民窑以青花为主打产品的“密码”。
          </p>

          <p>
            基因库对每件残片标本和对应修复完整器建立三维数字模型，同时对考古资料、器物信息、样品状态、相关成果、分析数据等信息进行汇总。秉持共建共享理念，基因库将通过互联网有序开放数据查询、标本测试申请、研究成果发布等。此外，正在开发的知识图谱型数据库通过智能化算法和友好的交互界面，让文创机构和普通用户也能轻松检索和获取感兴趣的延展信息。比如对一件明宣德青花云龙纹蟋蟀罐的查询，可以检索出基因库中所有包含云龙纹图案的瓷器，也可以关联到苏州博物馆和日本户栗美术馆的相关蟋蟀罐收藏，还可以延伸到有关青花瓷歌曲、梅州和漳州产瓷区等信息。
          </p>

          <p>
            景德镇御窑博物院正与上海市文物保护研究中心协商，拟合作开展长江口二号沉船上的景德镇晚清瓷器的考古整理和研究，这其中就包含了古陶瓷基因库的相关数据共享和标本采集。此外，今年5月的国际博物馆日，法国吉美博物馆将葡萄牙桑托斯宫瓷厅穹顶上的15至18世纪景德镇外销瓷，以数字化形式捐赠给景德镇御窑博物院，相关数据也将成为古陶瓷基因库的一部分。
          </p>

          <p>
            景德镇古陶瓷基因库的设立，对于构建陶瓷考古年代框架体系、研发古陶瓷鉴定方法、制定陶瓷行业技术标准、推动陶瓷数字藏品与文旅应用都将产生重要影响。在此基础上，我们将进一步研究、阐释陶瓷文化蕴含的中华文明之美，讲好新时代文物故事，不断扩大中华优秀传统文化的影响力。
          </p>

          <p>（作者为景德镇御窑博物院院长）</p>
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
      id: 8,
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
