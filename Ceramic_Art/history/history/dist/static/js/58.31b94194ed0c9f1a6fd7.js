webpackJsonp([58],{"/7/R":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{like:!1,news_hot:[],news:[]}},methods:{on:function(){this.like=!0;this.$http.get("http://39.101.122.176:88/news/like?id=10").then(function(t){console(t)})},news_gethot:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/hot").then(function(e){t.news_hot=e.data.data,console(e)})},news_getone:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/one?id=10").then(function(e){t.news=e.data.data,console(e)})},news_turn:function(t){console.log(t),this.$router.push({path:t})}},mounted:function(){this.news_gethot(),this.news_getone()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",{staticClass:"news"},[n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:s("L0W3")}})]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[n("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),n("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/history"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/classes"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[n("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[n("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:s("7Otq")}})])],1)],1),t._v(" "),n("div",{staticClass:"news-main"},[n("div",{staticClass:"news-article"},[n("div",{staticClass:"news-title"},[n("div"),t._v(" "),n("h1",[t._v(t._s(t.news.title))]),t._v(" "),n("h4",[t._v("\n          "+t._s(t.news.date)+" 点赞"+t._s(t.news.up)+" 浏览"+t._s(t.news.click)+" | 来源："+t._s(t.news.source)+"\n        ")])]),t._v(" "),n("el-divider"),t._v(" "),n("div",{staticClass:"news-text"},[n("p",[t._v("\n          9月10日，由景德镇新闻传媒集团、英国江西总商会主办的“丝路瓷行——天涯共此时”中秋陶瓷文化国际交流活动在景德镇三宝蓬艺术聚落举行。\n        ")]),t._v(" "),n("p",[t._v("\n          以中秋元素为主要内容的陶艺作品展，由景德镇艺术家、“景漂”艺术家及其他国际文化交流代表等共同参与的星空晚宴，植入中国传统灯谜的游园灯会，集参与感和体验性于一体的太平窑山谷乐烧……在活动现场，一场场精彩纷呈的配套活动，令中外来宾流连忘返、好评如潮。\n        ")]),t._v(" "),n("p",[t._v("\n          当日20时，一场“云端”互动中秋文化活动正式拉开帷幕。通过视频连线，现场留学生以及“洋景漂”代表与万里之外的华人华侨等共度了一个难忘的中秋佳节，共同感受了中国传统节日文化和千年瓷都陶瓷文化的独特魅力。\n        ")])]),t._v(" "),n("div",{staticClass:"news-bottom"},[n("el-button",{attrs:{plain:"",width:"20px"},on:{click:function(e){return t.on()}}},[t.like?n("img",{attrs:{src:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-f.svg",alt:"123",width:"18px"}}):n("img",{attrs:{src:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/like-b.svg",alt:"123",width:"18px"}}),t._v(" "),n("div",[t._v("点赞")])])],1)],1),t._v(" "),n("el-card",{staticClass:"news-list-hot"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("热点新闻")])]),t._v(" "),t._l(t.news_hot,function(e){return n("a",{key:e.id,staticClass:"text",attrs:{href:"#"},on:{click:function(s){return t.news_turn(e.text)}}},[n("div",[t._v(t._s(e.title))])])})],2)],1)],1)},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("ZsfN")},null,null);e.default=a.exports},ZsfN:function(t,e){}});
//# sourceMappingURL=58.31b94194ed0c9f1a6fd7.js.map