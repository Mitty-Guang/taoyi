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
          <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220406-1.png" alt="" />
          <p>
            1969年出生的刘志钧，在陶瓷行当，正值创作之年，作品虽然不算多，但精品迭出，名享全国。游学半生，如中国陶瓷设计艺术大师、正高级工艺美术师、高级设计师、非物质文化遗产钧瓷烧制技艺传承人等名衔，他说，虽然也骄傲，但最在意的还是2018年获得的“中原大工匠”。为何？
          </p>

          <p>
            “大师不大师，不算特别重要。作为陶瓷工匠，重要是玩好一把泥，这才符合身份！”刘志钧端坐角落，目光平静，神态安详。身后柜中的陶瓷，件件似乎毫光闪闪，精美绝伦——有“乾坤盏”“祥云”“尊”“钧瓷大碗”等，款款令人赞叹。
          </p>

          <p>
            “一个好的陶瓷工匠，要心无旁骛，求名不求利，为匠不为家，这是我毕生的追求。”刘志钧说，“如果能跳出烧瓷看陶瓷，融会贯通让陶瓷造福世人，这才是最高的工匠精神。”
          </p>

          <p>
            一语道尽人生悟，虽然以艺术陶瓷成名，但刘志钧之“志”，已不限于“钧”“瓷”，而是向往着“工匠精神造福于世”前行。
          </p>

          <p style="font-weight:700">从钧瓷之乡来，往匠人方向去</p>
          <p>
            现职为河南省工艺美术学会会长，但每年刘志钧都会抽几个月，回禹州烧几窑瓷器。“烧瓷，是我的本分！”
          </p>

          <p>
            一顶帽子、一双球鞋、一个双肩包，一身平实打扮，是他常见的行头。当评委、开会、讲学，经常忙得不可开交，他却从来没有大师的“排场”。上班下班，坐公交车出行；平时吃饭，也是“三丁面果腹”。大师，生活何其简陋！
          </p>
          <p>
            “何陋之有？”他对此淡然。郑州西郊的“刘志钧大师工作室”，是一间简单的办公室——瓶瓶罐罐成几堆，再者就是东一摞、西一摞的书籍、画报，好在“来往无白丁”，谈笑有风声。“我老家是禹州的，根在神垕，不怕人土，就怕对不起‘后土’。”坐下闲聊，他难得幽默。
          </p>
          <p>
            刘志钧名字，开始并非有所寓意，但出生地河南禹州，当地一直有以“钧”为美的共识。刘志钧父亲，原是禹州制药厂一名工程师，负责为药厂设计一些药品的瓷瓶包装。上世纪七八十年代，年幼的他常跟随父亲到神垕镇一钧瓷厂玩耍，被展品室里五彩斑斓的瓶子所吸引，渐渐爱上这种神奇“泥土”。
          </p>
          <p>
            后来，制药厂扩建，挖地基时挖出很多瓷器和碎片，即为后来的“钧官窑遗址”。不久，遗址旁边建禹州钧瓷研究所，就在刘志钧的家门口，而“志钧”这个名字，似乎也冥冥注定，他一生要“志在瓷”。
          </p>
          <p>
            志在瓷，就要一生“捏泥”。凡土块泥，如何腐朽化神奇？刘志钧一生在路上，一路手捧泥。
          </p>
          <p>
            80年代中期，中国八大油画家之一的尚扬，为武汉江汉文化馆设计制作大型陶瓷壁画，因陶瓷壁画烧制在禹州瓷厂，机缘巧合给了刘志钧学习的机会。当时，他正在备考美术专业大学，天天去厂里学绘画，看教授和研究生做陶瓷、做壁画，有幸得到名师指点。第二年，湖北美院单招，他考了个专业全省第一。
          </p>
          <p>
            经过名家指点，刘志钧对追求艺术，有了过人傲气，也有了清晰目标。“年轻人，谁不想成名成家成大师？反正隐隐约约觉得，干这个不只为糊口，这也许就是所谓的‘艺术追求’。”刘志钧说。
          </p>
          <p>
            从事钧瓷设计和艺术创作，是毕业后的事了。“之前虽做过一些设计工作，但是对行业是迷茫的。”几年后，刘志钧选择到郑州大学深造，机缘巧合，与钧瓷研究所副所长刘富安成为“忘年交”，开启了“志钧”瓷器人生。
          </p>
          <p>
            当时，刘富安是钧瓷界唯一的中国工艺美术大师，对钧瓷的精益求精、琢磨推敲，深深影响了刘志钧。不久，刘富安创建自己的工作室，极力邀请刘志钧也尝试钧瓷艺术。在他的工作室，刘志钧开始尝试做东西。
          </p>
          <p>
            因是科班出身，刘志钧满脑子现代设计的艺术理论体系，主观地认为产区出来的瓷器都比较老旧、陈腐，于是，想做一件打破这种局面的东西，就设计出人生中第一件钧瓷作品《腐——钧瓷感怀》。
          </p>
          <p>
            不想，这件独特的作品，成为刘志钧鲜明创作之旅的起点。再后来，他又拜师著名陶瓷大师张守智、“中国陶瓷泰斗”杨文宪等，并成为“钧瓷泰斗”晋佩章的关门弟子。很长一段时间，他心无旁骛，专心制瓷，在业界逐渐“小有名气”。
          </p>
          <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220406-2.png" alt="" />
          <p style="font-weight:700">在艺术领域探索，到人生深处体悟</p>
          <p>
            做钧瓷，搞艺术，成名家。像很多陶瓷大师一样，刘志钧在自己人生路上不断“开挂”，陆续获得中国工艺美术最高奖“百花奖”金奖、第十届中国陶瓷艺术设计创新评比金奖等100多项大奖。
          </p>
          <p>
            2015年，他的作品《祥云》系列获得全国陶瓷艺术评比金奖，唤醒了他一系列与云有关的艺术情怀。随后，他的“祥云系列”之《云卷》《云起云堕》《云鸮瓶》等，逐渐声闻业界。
          </p>
          <p>
            其中，《云卷》采用镂雕的手法，氤氲空灵意境与大胆镂空的造型，把“云卷云舒”的意态展现在胎体上，刻画出丰富多变的细节，突出了主题的深化。“宠辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。”刘志钧说，这是自己对事对物、对名对利的态度：得之不喜、失之不忧、宠辱不惊、去留无意。
          </p>
          <p>
            而《云起云堕》，造型是画缸的一种，本意是用浅浮雕在胎体外壁刻画，但雕刻时一条曲线刻得过深，使上半部云纹团掉了下来。可惜之余，他大胆想象，另辟蹊径，又用“隔空呼应”之法，将“云起云堕”表现出“偶然，也是一种必然”之感，体现出“堕在瓶底，人生如斯”的哲学意境。
          </p>
          <p>
            名气大了，刘志钧内心也有了些许骄傲。再后来，他担任中国传媒大学美术传播研究所研究员、北京邮电大学客座教授、河南工业大学艺术设计学院客座教授等，声名在业界也响亮起来。“成名之后，就该逐利了吧！”
          </p>
          <p>
            刘志钧踌躇满志时，张守智偶然的一句话，又成为他艺术人生“百折千回”的起点。
          </p>
          <p>
            很长一段时间，刘志钧将心思花在“拿奖”上。张守智有一次，轻描淡写地对他说，“拿奖固然重要，但能静下心来，把一件小作品做到极致，才是匠人该做的事。比如把茶盏作出‘花’来，在中国陶瓷界也是凤毛麟角。”
          </p>
          <p>
            这话打动了刘志钧。早些时候，人们印象里的钧瓷大多数较为粗糙、笨重，如何将茶盏、茶壶做得轻薄、美观？2013年，他着手开始“志钧盏”的设计与创作。
          </p>
          <p>
            造型设计要符合人体工程学，大小要符合人手拿盏的弧度，盏沿要给唇带来最好的舒适度……不断在细节上打磨，刘志钧还考虑到：什么茶适合搭配什么杯子，茶盏容量多少才能品出更多茶香等。
          </p>
          <p>
            重新和泥、采釉，阅读材料学、陶瓷史等书籍，这个“极致”一极竟近10年。“做出乾坤盏时，内心是宁静的，我也明白了老师的深意——瓷器作品，至少要人肯使用、自己满意、用者满意，满意至极……”
          </p>
          <p>
            一事极致后，便是事事极致。近两年，刘志钧又精心推出如意壶、美人肩、青莲壶等少量作品，款款让人见猎心喜、爱不释手。惜乎他仍坚持“只赠不售”，只有杨少华、侯耀华、刘惠等收藏大家为其传名，市场极其罕见。
          </p>
          <img src="https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220406-3.png" alt="" />
          <p style="font-weight:700">土与火煅烧成瓷，得与失归心于史</p>
          <p>
            “钧瓷泰斗”晋佩章的孙子，在郑州有一处“晋家钧瓷”专卖店，因为渊源深厚，为他在店里开辟了一间“刘志钧作品展厅”。请求前去鉴赏，收获很多意外。
          </p>
          <p>
            看瓷须先听道。落座品茶，茶台平凡，瓷器不多，反而是不上釉的茶盏，玻璃的茶壶，四方的玻璃烟灰缸——大师，“就这品位”？
          </p>
          <p>
            聊着聊着，谈兴渐浓。从双肩包里，刘志钧掏出一本《中国陶瓷史》，搂不住话匣子——从材料学到艺术史，从历史学到冶金术，天空海阔，条分缕析，将陶瓷发展，化为一个个精彩故事，让人听之向往之，不觉光阴逝。
          </p>
          <p>
            开灯，赏瓷。灯光衬托，釉生光华。无论是《腐》，还是《祥云》系列，无论是笔洗还是钧瓶，让人沉醉其中，深深领略“土与火艺术之美”，感悟“得与失人生百味”。
          </p>
          <p>
            “手上永远沾满土泥，艺术才能表达哲思。”往日的骄傲，刘志钧并不愿多提，反而对手中的陶瓷史，谈兴更浓厚。“眼界开阔，原理明晰，敢于创新，工匠烧瓷，才有未来。”
          </p>
          <p>
            刘志钧脑子里，攒了无数条瓷器烧制秘诀。“我做烧成实验最疯狂的时候，连杨文宪老师的观点我都反驳，因为整个钧汝瓷的烧成制度体系都是在杨老的指导下确立的，比如说大家烧窑转火温度临界点，960摄氏度一到点，就要把氧化气氛转为还原气氛。但从我实验结果看，是根据各个釉融溶程度定的，转火临界点的温度其实是根据釉的情况定，当然是根据窑炉结构的特殊性。事实证明这样做效果异常出彩。前辈给我们留下的宝贵经验、技法，在学习的初期要不折不扣的执行，但是到了艺术当中就要不拘一格、法无定法，求新求变的去烧瓷，才能随心所欲。”刘志钧说。“从物质运动的规律讲，万物皆可入釉”，抛开神秘主义，坚持科学的陶瓷研究体系，就可能获得更多质的提升，让科学与艺术融会贯通。
          </p>
          <p>
            近两年，因研究“摔不烂”瓷器等，刘志钧学习骨质瓷、玉质瓷等资料，逐渐对陶瓷史感起兴趣。“我的老师，有研究陶瓷材料学的，也有研究艺术陶瓷的，前辈们各自写过不同的陶瓷史。但另有本小册子，让我重新认识了陶瓷的另一层含义。”一部中国史，半部陶瓷史。刘志钧说，查阅资料期间，偶然看到一本小册子，因一篇《中国陶瓷史·序》，感动得不知所以。
          </p>
          <p>
            书的作者是吴仁敬，序云：中国陶器，发明于伏羲神农之时，而瓷器之名称，则始于汉代，真正成功于李唐。宋世，瓷业大盛，定汝官哥钧，垂名千古。明人继之，宣德、成化之作，尤为特出。清代，则古雅浑朴，不如前人，然精巧华丽、美妙绝伦，康乾所制，更有出类拔萃之慨。欧人自18世纪仿造瓷器以来，精益求精，一日千里，而我国墨守旧法，陈陈相因，且又为匪乱、苛税所苦，致使营业不振、喧宾夺主，各处销场，尽为洋瓷所占，瞻念往昔，何胜感慨！
          </p>
          <p>
            “从世界陶瓷发展史角度看，中国虽然是瓷器母国，但现代世界陶瓷的顶端品牌，都被国外占据，如英国的威基伍德、德国的麦森等。他们学做瓷器不过一两百年，但是从机械性能、审美功能等方面都超越了发展两千年的中国传统瓷器，我心里是五味杂陈。我想，中国陶瓷，除需要工匠精神，更需要超越工匠的家国情怀。”刘志钧说，“何处可承情怀？再编一部陶瓷史，势在必行。”
          </p>
          <p>
            编史，不能眼光短浅、贻笑大方，更不能无所目标、抄袭充数。而是要放下名利诱惑，虚心读书悟道。于是，刘志钧开始艰苦“啃”陶瓷科技史、艺术史，甚至政治学、经济学、历史学、传播学、广告学等书籍。案上，多了陶瓷类的书籍和材料；心里，更有了宏大的目标——集人类之巧思，展现陶瓷之深意。
          </p>
          <p>
            “我已经五十多岁了，看书很慢，一本300多页的书，一天看七八页，有时候一个关键词，就要查很多资料才能明白含义。”刘志钧说，还好有网络，能从旧书中温故知新，但遇到新领域，就要甘当小学生，用笨办法从头补。“科学面前人人平等，手艺人不光要手艺精，也要从学海找航向。”
          </p>
          <p>
            如今，陶瓷行业的使命已经质变，尖端陶瓷甚至被用于军事、航天等多个领域。刘志钧认为，陶瓷工匠不能只重名利与技巧，还要在兼顾实用性和艺术性同时，站在国家利益甚至人类智慧高度，将陶瓷业不断推向更高维度。
          </p>
          <p>
            “我才五十多岁。身为陶瓷匠人，在余生我要做好瓷器，始终坚持中国陶瓷再度崛起的信念。更要当好一个历史的记录者，集合古今中外的陶瓷工匠智慧，造福当代。”刘志钧说。
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
      id: 3,
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
