webpackJsonp([53],{EZvQ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={data:function(){return{news_list:[],news_hot:[],urls:["https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220406-1.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220426.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220618-1.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/news/20220822.png"],fits:["fill","contain","cover","none","scale-down"],url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",input:""}},methods:{news_getlist:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/all?page=0&pagesize=10").then(function(e){t.news_list=e.data.data.records})},news_gethot:function(){var t=this;this.$http.get("http://39.101.122.176:88/news/hot").then(function(e){t.news_hot=e.data.data})},news_turn:function(t){console.log(t),this.$router.push({path:t})}},mounted:function(){this.news_getlist(),this.news_gethot()}},n={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-header",[l("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[l("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[l("img",{staticStyle:{height:"80%"},attrs:{src:s("L0W3")}})]),t._v(" "),l("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[l("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[l("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),l("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[l("template",{slot:"title"},[l("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),l("el-menu-item",{attrs:{index:"/history"}},[l("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),l("el-menu-item",{attrs:{index:"/classes"}},[l("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),l("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[l("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),l("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[l("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),l("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[l("img",{staticStyle:{height:"80%"},attrs:{src:s("7Otq")}})])],1)],1),t._v(" "),l("el-main",{staticClass:"news"},[l("div",{staticClass:"news-hot"},[l("el-carousel",{attrs:{height:"350px"}},t._l(t.urls,function(t){return l("el-carousel-item",{key:t},[l("img",{attrs:{src:t,alt:"",height:"350px",width:"100%"}})])}),1)],1),t._v(" "),l("div",{staticClass:"news-list-box"},[l("el-card",{staticClass:"news-list-all"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[t._v("陶 艺 新 闻")]),t._v(" "),l("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")]),t._v(" "),l("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),t._l(t.news_list,function(e){return l("div",{key:e.id,staticClass:"text"},[l("a",{attrs:{href:"#"},on:{click:function(s){return t.news_turn(e.text)}}},[t._v(t._s(e.title))]),t._v(" "),l("p",[t._v(t._s(e.date)+" 点赞数"+t._s(e.up)+" 浏览数"+t._s(e.click))]),t._v(" "),null!=e.url1?l("el-image",{attrs:{src:e.url1}}):t._e(),t._v(" "),null!=e.url2?l("el-image",{attrs:{src:e.url2}}):t._e(),t._v(" "),l("el-divider")],1)})],2),t._v(" "),l("el-card",{staticClass:"news-list-hot"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[t._v("热点新闻")])]),t._v(" "),t._l(t.news_hot,function(e){return l("div",{key:e.id,staticClass:"text"},[null!=e.url1?l("a",{attrs:{href:"#"},on:{click:function(s){return t.news_turn(e.text)}}},[null!=e.url1?l("el-image",{attrs:{src:e.url1}}):t._e(),t._v(" "),l("div",{staticClass:"text_title"},[t._v(t._s(e.title))])],1):t._e()])})],2)],1)])],1)},staticRenderFns:[]};var a=s("VU/8")(l,n,!1,function(t){s("ju4P")},null,null);e.default=a.exports},ju4P:function(t,e){}});
//# sourceMappingURL=53.cf3f55aa52092ae755b8.js.map