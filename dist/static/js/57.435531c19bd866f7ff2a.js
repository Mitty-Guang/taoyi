webpackJsonp([57],{bSGh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{like:!1,news_hot:[],news:[]}},methods:{on:function(){this.like=!0;this.$http.get("http://39.101.122.176:88/news/like?id=8").then(function(t){console(t)})},news_gethot:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/hot").then(function(e){t.news_hot=e.data.data,console(e)})},news_getone:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/one?id=8").then(function(e){t.news=e.data.data,console(e)})},news_turn:function(t){console.log(t),this.$router.push({path:t})}},mounted:function(){this.news_gethot(),this.news_getone()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",{staticClass:"news"},[n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:s("L0W3")}})]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[n("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),n("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/history"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/classes"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[n("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[n("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:s("7Otq")}})])],1)],1),t._v(" "),n("div",{staticClass:"news-main"},[n("div",{staticClass:"news-article"},[n("div",{staticClass:"news-title"},[n("div"),t._v(" "),n("h1",[t._v(t._s(t.news.title))]),t._v(" "),n("h4",[t._v("\n          "+t._s(t.news.date)+" 点赞"+t._s(t.news.up)+" 浏览"+t._s(t.news.click)+" | 来源："+t._s(t.news.source)+"\n        ")])]),t._v(" "),n("el-divider"),t._v(" "),n("div",{staticClass:"news-text"},[n("p",[t._v("\n          集资料存储、考古研究、科技分析、保护修复、成果展示于一体的中华陶瓷文明文物基因库，将有利于我们更好地研究、阐释陶瓷文化蕴含的中华文明之美。\n        ")]),t._v(" "),n("p",[t._v("\n          “商人重利轻别离，前月浮梁买茶去。”白居易的这首诗家喻户晓。你想了解那个时期浮梁地区与茶叶相关的制瓷工艺吗？在景德镇的古陶瓷基因库里正好可以找到这样一件标本。\n        ")]),t._v(" "),n("p",[t._v("\n          2012年，考古人在景德镇浮梁县兰田窑进行发掘，发现一件晚唐时期的青瓷碗，侈口，曲腹，圈足，釉面光亮，呈青绿色，碗内有支钉叠烧痕。支钉叠烧的具体方法是：用高岭土捏成“支钉”，把这些钉粘于碗盘圈足的边沿，然后把碗坯放在垫柱上，再把粘有支钉的碗坯重叠起来。这代表了这一地区最早的制瓷工艺。如今，在基因库里它有了一个编号，打头的T代表“唐代”，随后的QY代表“青釉”，WA代表“碗”，C代表“残片”，还有数字代表序号。以此类推，基因库的标本都会按照年代、品类、器类和形态信息进行编码。\n        ")]),t._v(" "),n("p",[t._v("\n          今年6月11日，由国内多家知名学术机构共建的全球首个古陶瓷基因库在景德镇御窑博物院挂牌。这标志着集资料存储、考古研究、科技分析、保护修复、成果展示于一体的中华陶瓷文明文物基因库建设正式启动，一个新型的多学科合作和协同创新平台正在形成。\n        ")]),t._v(" "),n("p",[t._v("\n          景德镇古陶瓷基因库，指景德镇古代生产的各类瓷器的典型标本及其信息总和。景德镇御窑博物院及其前身景德镇市陶瓷考古研究所在40多年的考古工作中，出土了数以千万计的古陶瓷标本，在此基础上，与北京大学、清华大学、故宫博物院、中国科学院上海硅酸盐研究所等院校机构合作，开展基因标本制作和知识图谱型数据库的建设。科研人员将对御窑厂、湖田窑、观音阁、丽阳乡、兰田窑等瓷业遗址发掘出土的标本进行整理，根据器物的年代、形制、工艺等特征，选出最具代表性的标本组成“标准器物流”，并完成每件标准器物所对应的残片、截面、薄片、粉末4种实体样品制备与虚拟样品构建。这些样品作为信息元，全面涵盖了景德镇瓷器的“考古信息片段”“胎料技术片段”“成型技术片段”“釉料技术片段”“装烧技术片段”“彩绘装饰片段”等基因片段信息。\n        ")]),t._v(" "),n("p",[t._v("\n          明清时期入库最多的是御窑瓷器标本。御窑出土的基因标本还会加上一个特殊编号“Y”，代表“御窑”。最新收入的一件标本来自2020年御窑厂西围墙的考古勘探，编号中用“QH”来代表青花，用“SZ”代表“试照”，说明它是一件民窑试验青花料的试照标本，上面以不同深浅的钴料书写“淡”“浓”等字样，揭示了明代正统到天顺年间民窑以青花为主打产品的“密码”。\n        ")]),t._v(" "),n("p",[t._v("\n          基因库对每件残片标本和对应修复完整器建立三维数字模型，同时对考古资料、器物信息、样品状态、相关成果、分析数据等信息进行汇总。秉持共建共享理念，基因库将通过互联网有序开放数据查询、标本测试申请、研究成果发布等。此外，正在开发的知识图谱型数据库通过智能化算法和友好的交互界面，让文创机构和普通用户也能轻松检索和获取感兴趣的延展信息。比如对一件明宣德青花云龙纹蟋蟀罐的查询，可以检索出基因库中所有包含云龙纹图案的瓷器，也可以关联到苏州博物馆和日本户栗美术馆的相关蟋蟀罐收藏，还可以延伸到有关青花瓷歌曲、梅州和漳州产瓷区等信息。\n        ")]),t._v(" "),n("p",[t._v("\n          景德镇御窑博物院正与上海市文物保护研究中心协商，拟合作开展长江口二号沉船上的景德镇晚清瓷器的考古整理和研究，这其中就包含了古陶瓷基因库的相关数据共享和标本采集。此外，今年5月的国际博物馆日，法国吉美博物馆将葡萄牙桑托斯宫瓷厅穹顶上的15至18世纪景德镇外销瓷，以数字化形式捐赠给景德镇御窑博物院，相关数据也将成为古陶瓷基因库的一部分。\n        ")]),t._v(" "),n("p",[t._v("\n          景德镇古陶瓷基因库的设立，对于构建陶瓷考古年代框架体系、研发古陶瓷鉴定方法、制定陶瓷行业技术标准、推动陶瓷数字藏品与文旅应用都将产生重要影响。在此基础上，我们将进一步研究、阐释陶瓷文化蕴含的中华文明之美，讲好新时代文物故事，不断扩大中华优秀传统文化的影响力。\n        ")]),t._v(" "),n("p",[t._v("（作者为景德镇御窑博物院院长）")])]),t._v(" "),n("div",{staticClass:"news-bottom"},[n("el-button",{attrs:{plain:"",width:"20px"},on:{click:function(e){return t.on()}}},[t.like?n("img",{attrs:{src:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-f.svg",alt:"123",width:"18px"}}):n("img",{attrs:{src:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-b.svg",alt:"123",width:"18px"}}),t._v(" "),n("div",[t._v("点赞")])])],1)],1),t._v(" "),n("el-card",{staticClass:"news-list-hot"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("热点新闻")])]),t._v(" "),t._l(t.news_hot,function(e){return n("a",{key:e.id,staticClass:"text",attrs:{href:"#"},on:{click:function(s){return t.news_turn(e.text)}}},[n("div",[t._v(t._s(e.title))])])})],2)],1)],1)},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("y7dT")},null,null);e.default=a.exports},y7dT:function(t,e){}});
//# sourceMappingURL=57.435531c19bd866f7ff2a.js.map