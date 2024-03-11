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
            今年8月5日，在“中国这十年·湖南”主题新闻发布会上，省委书记、省人大常委会主任张庆伟点赞醴陵陶瓷。
          </p>

          <p>
            陶瓷产业是湖南重要传统产业。窑火延绵千年，产业传承发展。9月，省工信厅等13个部门联合出手，出台《支持先进陶瓷材料产业集群高质量发展的政策措施》（以下简称《政策措施》），促先进陶瓷材料产业窑火“烧”得更旺。
          </p>

          <p style="font-weight:700">
            一块泥巴玩出“高科技”，先进陶瓷材料产业前景看好
          </p>
          <p>
            株洲醴陵的华鑫电瓷生产车间，工人正在对一款百万伏GIS组合电器出线瓷套进行生产试制，这是企业今年研发的新产品之一。“有望突破日本和欧美等国家和地区在大尺寸、高强度电瓷产品方面的垄断地位，实现特高压建设工程关键核心部位的国产化制造。”华鑫电瓷相关负责人员介绍。
          </p>

          <p>
            华鑫电瓷从乡办企业蝶变为国家级专精特新“小巨人”企业，空心陶瓷绝缘子入选国家级制造业单项冠军产品名单，产销已连续13年居全球第一。
          </p>

          <p>
            距醴陵200多公里的新化高新区特种陶瓷产业园，美程陶瓷一批新能源和温控器陶瓷产品正装箱打包，运往广州等地。这家本土电子陶瓷龙头企业研发的温控器陶瓷开关盒、新能源继电器陶瓷等产品成功替代进口。
          </p>

          <p>
            新能源汽车“爆发式增长”，带动新化电子陶瓷产业发展驶上快车道。以美程陶瓷为例，其新能源陶瓷密封圈，在市场上与行业老大日本京瓷“扳”起了手腕；温控器陶瓷开关盒的市场份额居全国第一，达70%以上。
          </p>

          <p>
            在传承中创新，湖南将一块泥巴玩出“高科技”的实例不胜枚举。湖南先进陶瓷材料已被广泛用在特高压工程、医疗器械、精密仪器、航空航天、手机配件等高技术领域。
          </p>

          <p>
            特高压互感器瓷套、核电机组出线瓷套、动力电池陶瓷密封等先进陶瓷材料填补国内空白，轻质陶瓷填料、大型电真空陶瓷管、炻瓷等产品达到国内外领先水平。新型陶瓷纤维及其复合材料国防科技重点实验室、国家电子陶瓷产品质量监督检验中心等多个国家及省部级创新研究、检测与标准化平台，助推湖南先进陶瓷材料专利申请量屡创新高。
          </p>

          <p>
            在创新中发展，传统产业焕发出新活力。在株洲醴陵，陶瓷企业达650家，形成以高压电瓷、日用瓷为主，电子陶瓷、新型环保陶瓷、高温耐磨陶瓷、工艺瓷等产品为辅的发展格局。在娄底新化，以电子陶瓷为主、耐磨耐热陶瓷为辅的产业特色十分鲜明。
          </p>

          <p>
            目前，湖南拥有“醴陵陶瓷”“醴陵釉下五彩瓷”等4个国家地理标志证明商标，华联、红官窑、陶润等10个中国驰名商标、1个国家出口名牌产品。醴陵是全国第三批产业集群（陶瓷）区域品牌试点县。
          </p>

          <p>
            省工信厅相关负责人介绍，经多年积累，湖南先进陶瓷材料产业已具备集聚效应大、品牌影响广、创新能力强等特点，在全国陶瓷产业中占据重要地位，发展前景看好。
          </p>

          <p style="font-weight:700">13个部门合力推动，产业集群规模瞄准倍增</p>

          <p>
            一块瓷泥，裂变为1000多种电瓷产品，产量占据全国“半壁江山”，出口量居全国第一；一座瓷都，年产日用瓷近100亿件，品牌在古老和潮流的“混搭”中“出圈”。
          </p>

          <p>
            “新材料产业方兴未艾，新发展格局加速构建，湖南先进陶瓷材料产业大有潜力可挖。”省工信厅相关负责人表示。
          </p>

          <p>
            目前，湖南先进陶瓷材料产业集群涵盖特种陶瓷、日用瓷、艺术瓷、建筑陶瓷等陶瓷制品制造业，以及陶瓷运输服务业、陶瓷外贸、陶瓷装备制造、文旅产业等上下游产业。盛况之下，也面临产业集聚度不够高、企业规模偏小、创新能力不足等制约产业壮大的问题。
          </p>

          <p>
            为此，省工信厅、发改委、教育厅、科技厅、财政厅等13个部门联合出台《支持先进陶瓷材料产业集群高质量发展的政策措施》，从产业谋划、技术创新、链条打造、企业培优、智能升级、资金支持、品牌建设、人才培育等10个方面出手，用10大措施打通阻碍产业发展堵点难点，合力推动我省先进陶瓷材料产业集群高质量发展。
          </p>

          <p>
            产业布局划出重点。《政策措施》明确重点发展特高压电瓷、新能源汽车用陶瓷等先进陶瓷材料，加快推进日用瓷、艺术瓷、建筑陶瓷等产业转型升级，形成先进陶瓷产业“双核多点”发展布局——株洲（醴陵）、娄底（新化）陶瓷产业“双核”集聚，株洲经开区、娄底经开区、长沙望城区、怀化溆浦县、醴陵经开区等区域“多点”集聚。
          </p>

          <p>
            从技术到产品，从供应到生产，加强产业链、供应链、创新链协同发展。完善创新体系，力争5年内建成“一室三中心”，即国家级重点实验室和检验检测中心、工业设计中心、先进陶瓷试制中心；引导企业应用新一代信息技术，支持创建一批智能制造标杆车间、标杆企业。
          </p>

          <p>
            “真金白银”厚植产业沃土。对已在湖南证监局辅导验收的企业，给予200万元补助资金支持；对先进陶瓷“产教融合”成效突出学校和企业，每个给予不超过500万元奖励……《政策措施》对关键产品“揭榜挂帅”、新材料中试基地（中试平台）、碳减排标杆企业等给予资金及政策支持，加快培育一批陶瓷产业“小巨人”企业和单项冠军、隐形冠军，认定一批消费品、原材料工业“三品”标杆企业，支持打造瓷旅融合品牌，大力发展陶瓷会展经济。
          </p>

          <p>
            以打造具有世界影响力、国内领先的先进陶瓷产业研发及制造高地为目标，力争到2025年，湖南先进陶瓷材料产业集群规模超过1500亿元；到2030年，产业集群规模实现倍增。
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
      id: 11,
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
