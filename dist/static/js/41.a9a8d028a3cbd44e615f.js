webpackJsonp([41],{d4kk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{like:!1,news_hot:[],news:[]}},methods:{on:function(){this.like=!0;this.$http.get("http://39.101.122.176:88/news/like?id=4").then(function(t){console(t)})},news_gethot:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/hot").then(function(e){t.news_hot=e.data.data,console(e)})},news_getone:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/one?id=4").then(function(e){t.news=e.data.data,console(e)})},news_turn:function(t){console.log(t),this.$router.push({path:t})}},mounted:function(){this.news_gethot(),this.news_getone()}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-main",{staticClass:"news"},[s("el-header",[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[s("img",{staticStyle:{height:"80%"},attrs:{src:n("L0W3")}})]),t._v(" "),s("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[s("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),s("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/history"}},[s("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes"}},[s("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[s("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[s("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),s("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[s("img",{staticStyle:{height:"80%"},attrs:{src:n("7Otq")}})])],1)],1),t._v(" "),s("div",{staticClass:"news-main"},[s("div",{staticClass:"news-article"},[s("div",{staticClass:"news-title"},[s("div"),t._v(" "),s("h1",[t._v(t._s(t.news.title))]),t._v(" "),s("h4",[t._v("\n          "+t._s(t.news.date)+" 点赞"+t._s(t.news.up)+" 浏览"+t._s(t.news.click)+" | 来源："+t._s(t.news.source)+"\n        ")])]),t._v(" "),s("el-divider"),t._v(" "),s("div",{staticClass:"news-text"},[s("p",[t._v("\n          从2020年起，景德镇市相继与抖音、京东、快手、淘宝、天猫等平台开展战略合作，取得陶瓷直播带货平台经营权；\n        ")]),t._v(" "),s("p",[t._v("2021年10月，国家版权局批复授予景德镇市“全国版权示范城市”称号；")]),t._v(" "),s("p",[t._v("\n          今年1月，景德镇新闻传媒集团获批成为全国“区块链+版权”特色领域试点单位；\n        ")]),t._v(" "),s("p",[t._v("今年2月，中国（景德镇）跨境电子商务综合试验区获国务院正式批复。")]),t._v(" "),s("p",[t._v("…………")]),t._v(" "),s("p",[t._v("\n          数字经济的蓬勃发展，不断催生新产业新模式新业态。景德镇市作为担当建设全国陶瓷文化传承创新试验区主力军，正积极整合区位、平台、政策等资源要素，以“数”赋能，推动传统陶瓷产业转型升级。\n        ")]),t._v(" "),s("p",[t._v("“电商”撬动产业新机遇")]),t._v(" "),s("p",[t._v("\n          在位于景德镇市陶瓷产业园区内的贝汉美陶瓷有限公司生产车间，700多名工人在各自岗位上忙碌。记者不禁惊叹，景德镇陶瓷行业多以艺术瓷、手工瓷生产为主，作坊式企业占比多，像贝汉美这样规模化的企业并不多见。\n        ")]),t._v(" "),s("p",[t._v("\n          该公司总经理沈锋介绍，工厂主要生产陶瓷摆件和茶具，经过十余年的发展，已形成从研发、设计、生产到销售的全产业链。在这个过程中，电商犹如催化剂，一路助力公司从小变大、由弱变强。\n        ")]),t._v(" "),s("p",[t._v("\n          早在2006年，沈锋用借来的6000元购买电脑和相机，同妻子一道在网上卖瓷器，仅三年时间就创办了自己的公司；2014年，公司逐步扩大生产规模，先后两次在园区购买32亩土地建设一期和二期厂房；2021年，公司购买96亩土地，筹建新厂。公司每年推出300款新品，并陆续在淘宝、京东、抖音、小红书、1688批发网等平台开设网店10余家，同时开辟跨境电商销售渠道，积累粉丝近百万人，年销售量达500万件，多年稳居陶瓷摆件类互联网销售榜首。\n        ")]),t._v(" "),s("p",[t._v("在陶溪川，人们能更加直观地感受电商对传统陶瓷产业的影响。")]),t._v(" "),s("p",[t._v("\n          一到夜晚，陶溪川抖音直播基地灯火通明，这里聚集着一大批陶瓷直播间，一台手机、一名主播，新颖的销售模式和快速的成交量，令人耳目一新。\n        ")]),t._v(" "),s("p",[t._v("\n          基地相关负责人陈羲告诉记者，基地自2020年7月成立至今，已入驻陶瓷商户3500多家，总销售额达30多亿元，并孵化陶瓷主播5000余人，帮助上万陶瓷商家从线下转向线上销售。今年，陶瓷直播带货愈加火爆，仅3月份，基地成交额就达4.35亿元，其中单日最高成交额达1769万元。\n        ")]),t._v(" "),s("p",[t._v("\n          为抢占国际市场，景德镇还瞄准了跨境电商这个风口。仅用几个月时间打造的珠山区陶瓷跨境电商产业园，今年1月与浙江必创科技公司达成运营合作，并快速吸纳好活科技、敬瓷轩、简凡陶瓷、发现物流等30余家陶瓷及配套企业入驻。目前，园区已开展跨境电商人才培训、陶瓷品牌孵化服务，接下来将提供全球开店、海外营销、知识产权、海外仓等一站式全流程服务。\n        ")]),t._v(" "),s("p",[t._v("“智造”带动产业数字化")]),t._v(" "),s("p",[t._v("不仅是传统陶瓷，先进陶瓷也纷纷抢占数字化赛道。")]),t._v(" "),s("p",[t._v("\n          在景德镇乐华陶瓷洁具有限公司，偌大的洁具生产车间里，看不到工人汗流浃背、奔前跑后的场景，取而代之的是全智能化生产与管理：工人只需实时监控并操作智能设备，就能让机器人完成物料配送、高压注浆成型、成品打包入库等工序。\n        ")]),t._v(" "),s("p",[t._v("\n          据公司负责人介绍，他们采用智邦国际ERP、MRP等智能系统，将生产与采购、人资、财务、销售等管理环节无缝对接，大大提高了工作效率。今年10月，10万平方米陶瓷智能家居生产车间将投产，专门生产新型智能化陶瓷家居设备，将推动企业从产业数字化向数字产业化转变，大大提升企业的核心竞争力。\n        ")]),t._v(" "),s("p",[t._v("\n          投资2亿元建设50条陶瓷粉体生产线的万微先进陶瓷粉体项目，在其1.3万平方米的厂区内，也仅有员工32人。该企业依靠自主研发新技术，实现了项目全智能生产，预计今年可实现产值5000万元以上，将为该市生物陶瓷、精密结构陶瓷和电真空陶瓷产业发展注入新活力。\n        ")]),t._v(" "),s("p",[t._v("“赋能”打造产业新平台")]),t._v(" "),s("p",[t._v("\n          做优做强数字经济，不能靠企业单打独斗，还需要政府主导和全方位布局。对此，景德镇市全面启动陶瓷数字化赋能行动，为陶瓷产业发展打造数字化新平台。\n        ")]),t._v(" "),s("p",[t._v("\n          加快打造陶瓷“产业大脑”，景德镇市建成陶瓷产业大数据中心，为产业科学决策提供支撑；建设产业公有链平台，探索区块链技术在陶瓷溯源、陶瓷防伪等领域的应用；建设工业互联网平台，探索以“5G+工业互联网”赋能陶瓷产业振兴。今年3月底，该市成功通过工业互联网标识解析二级节点能力评估，成为国内首个标识解析二级节点（陶瓷行业）建设许可的城市。\n        ")]),t._v(" "),s("p",[t._v("\n          立体建设陶瓷电商。目前，景德镇陶瓷官方旗舰店已覆盖天猫、京东、抖音、快手、微信公众号等互联网平台；陶溪川直播基地正积极建设含产品设计、生产制造、仓储物流、直播选货、电商运营、产品营销等六大板块的陶瓷电商一体化中心。与此同时，该市积极拓展陶瓷交易平台，在2021年中国景德镇国际陶瓷博览会“云”交易额突破90亿元的基础上，打造线上线下相结合、交流交易常态化的“永不落幕瓷博会”。\n        ")])]),t._v(" "),s("div",{staticClass:"news-bottom"},[s("el-button",{attrs:{plain:"",width:"20px"},on:{click:function(e){return t.on()}}},[t.like?s("img",{attrs:{src:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-f.svg",alt:"123",width:"18px"}}):s("img",{attrs:{src:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-b.svg",alt:"123",width:"18px"}}),t._v(" "),s("div",[t._v("点赞")])])],1)],1),t._v(" "),s("el-card",{staticClass:"news-list-hot"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("热点新闻")])]),t._v(" "),t._l(t.news_hot,function(e){return s("a",{key:e.id,staticClass:"text",attrs:{href:"#"},on:{click:function(n){return t.news_turn(e.text)}}},[s("div",[t._v(t._s(e.title))])])})],2)],1)],1)},staticRenderFns:[]};var a=n("VU/8")(s,i,!1,function(t){n("ynsg")},null,null);e.default=a.exports},ynsg:function(t,e){}});
//# sourceMappingURL=41.a9a8d028a3cbd44e615f.js.map