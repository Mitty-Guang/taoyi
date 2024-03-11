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
            从2020年起，景德镇市相继与抖音、京东、快手、淘宝、天猫等平台开展战略合作，取得陶瓷直播带货平台经营权；
          </p>
          <p>2021年10月，国家版权局批复授予景德镇市“全国版权示范城市”称号；</p>
          <p>
            今年1月，景德镇新闻传媒集团获批成为全国“区块链+版权”特色领域试点单位；
          </p>
          <p>今年2月，中国（景德镇）跨境电子商务综合试验区获国务院正式批复。</p>
          <p>…………</p>
          <p>
            数字经济的蓬勃发展，不断催生新产业新模式新业态。景德镇市作为担当建设全国陶瓷文化传承创新试验区主力军，正积极整合区位、平台、政策等资源要素，以“数”赋能，推动传统陶瓷产业转型升级。
          </p>
          <p>“电商”撬动产业新机遇</p>
          <p>
            在位于景德镇市陶瓷产业园区内的贝汉美陶瓷有限公司生产车间，700多名工人在各自岗位上忙碌。记者不禁惊叹，景德镇陶瓷行业多以艺术瓷、手工瓷生产为主，作坊式企业占比多，像贝汉美这样规模化的企业并不多见。
          </p>
          <p>
            该公司总经理沈锋介绍，工厂主要生产陶瓷摆件和茶具，经过十余年的发展，已形成从研发、设计、生产到销售的全产业链。在这个过程中，电商犹如催化剂，一路助力公司从小变大、由弱变强。
          </p>
          <p>
            早在2006年，沈锋用借来的6000元购买电脑和相机，同妻子一道在网上卖瓷器，仅三年时间就创办了自己的公司；2014年，公司逐步扩大生产规模，先后两次在园区购买32亩土地建设一期和二期厂房；2021年，公司购买96亩土地，筹建新厂。公司每年推出300款新品，并陆续在淘宝、京东、抖音、小红书、1688批发网等平台开设网店10余家，同时开辟跨境电商销售渠道，积累粉丝近百万人，年销售量达500万件，多年稳居陶瓷摆件类互联网销售榜首。
          </p>
          <p>在陶溪川，人们能更加直观地感受电商对传统陶瓷产业的影响。</p>
          <p>
            一到夜晚，陶溪川抖音直播基地灯火通明，这里聚集着一大批陶瓷直播间，一台手机、一名主播，新颖的销售模式和快速的成交量，令人耳目一新。
          </p>
          <p>
            基地相关负责人陈羲告诉记者，基地自2020年7月成立至今，已入驻陶瓷商户3500多家，总销售额达30多亿元，并孵化陶瓷主播5000余人，帮助上万陶瓷商家从线下转向线上销售。今年，陶瓷直播带货愈加火爆，仅3月份，基地成交额就达4.35亿元，其中单日最高成交额达1769万元。
          </p>
          <p>
            为抢占国际市场，景德镇还瞄准了跨境电商这个风口。仅用几个月时间打造的珠山区陶瓷跨境电商产业园，今年1月与浙江必创科技公司达成运营合作，并快速吸纳好活科技、敬瓷轩、简凡陶瓷、发现物流等30余家陶瓷及配套企业入驻。目前，园区已开展跨境电商人才培训、陶瓷品牌孵化服务，接下来将提供全球开店、海外营销、知识产权、海外仓等一站式全流程服务。
          </p>
          <p>“智造”带动产业数字化</p>
          <p>不仅是传统陶瓷，先进陶瓷也纷纷抢占数字化赛道。</p>
          <p>
            在景德镇乐华陶瓷洁具有限公司，偌大的洁具生产车间里，看不到工人汗流浃背、奔前跑后的场景，取而代之的是全智能化生产与管理：工人只需实时监控并操作智能设备，就能让机器人完成物料配送、高压注浆成型、成品打包入库等工序。
          </p>
          <p>
            据公司负责人介绍，他们采用智邦国际ERP、MRP等智能系统，将生产与采购、人资、财务、销售等管理环节无缝对接，大大提高了工作效率。今年10月，10万平方米陶瓷智能家居生产车间将投产，专门生产新型智能化陶瓷家居设备，将推动企业从产业数字化向数字产业化转变，大大提升企业的核心竞争力。
          </p>
          <p>
            投资2亿元建设50条陶瓷粉体生产线的万微先进陶瓷粉体项目，在其1.3万平方米的厂区内，也仅有员工32人。该企业依靠自主研发新技术，实现了项目全智能生产，预计今年可实现产值5000万元以上，将为该市生物陶瓷、精密结构陶瓷和电真空陶瓷产业发展注入新活力。
          </p>
          <p>“赋能”打造产业新平台</p>
          <p>
            做优做强数字经济，不能靠企业单打独斗，还需要政府主导和全方位布局。对此，景德镇市全面启动陶瓷数字化赋能行动，为陶瓷产业发展打造数字化新平台。
          </p>
          <p>
            加快打造陶瓷“产业大脑”，景德镇市建成陶瓷产业大数据中心，为产业科学决策提供支撑；建设产业公有链平台，探索区块链技术在陶瓷溯源、陶瓷防伪等领域的应用；建设工业互联网平台，探索以“5G+工业互联网”赋能陶瓷产业振兴。今年3月底，该市成功通过工业互联网标识解析二级节点能力评估，成为国内首个标识解析二级节点（陶瓷行业）建设许可的城市。
          </p>
          <p>
            立体建设陶瓷电商。目前，景德镇陶瓷官方旗舰店已覆盖天猫、京东、抖音、快手、微信公众号等互联网平台；陶溪川直播基地正积极建设含产品设计、生产制造、仓储物流、直播选货、电商运营、产品营销等六大板块的陶瓷电商一体化中心。与此同时，该市积极拓展陶瓷交易平台，在2021年中国景德镇国际陶瓷博览会“云”交易额突破90亿元的基础上，打造线上线下相结合、交流交易常态化的“永不落幕瓷博会”。
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
      id: 4,
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
