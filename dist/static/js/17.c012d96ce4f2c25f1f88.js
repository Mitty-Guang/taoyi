webpackJsonp([17],{"0uw5":function(t,e){},gZOc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{opends:["2"],bannerHeight:200,collectors:"收藏",imgwrap:[{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片1.png"},{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片2.png"},{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片3.png"},{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片4.png"}],srcList:["https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片1.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片2.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片3.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/caitao/majiayao/图片4.png"]}},mounted:function(){var t=this;this.setSize(),window.addEventListener("resize",function(){t.setSize()},!1)},methods:{setSize:function(){this.bannerHeight=document.body.clientWidth/4},change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-header",[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[s("img",{staticStyle:{height:"80%"},attrs:{src:a("L0W3")}})]),t._v(" "),s("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[s("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),s("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/history"}},[s("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes"}},[s("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[s("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[s("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),s("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[s("img",{staticStyle:{height:"80%"},attrs:{src:a("7Otq")}})])],1)],1),t._v(" "),s("el-container",[s("el-aside",[s("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("颜色陶")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/classes/yansetao/hongtao"}},[t._v("红陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/yansetao/heitao"}},[t._v("黑陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/yansetao/huitao"}},[t._v("灰陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/yansetao/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("彩陶")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/classes/caitao/caitao"}},[t._v("彩陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/caitao/yangshao"}},[t._v("仰韶文化彩陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/caitao/banpo"}},[t._v("半坡彩陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/caitao/miaodigou"}},[t._v("庙底沟彩陶")]),t._v(" "),s("el-menu-item",{staticClass:"is-active",attrs:{index:"/classes/caitao/majiayao"}},[t._v("马家窑文化彩陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/caitao/banshan"}},[t._v("半山彩陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes/caitao/machang"}},[t._v("马厂类型彩陶")])],1)],2),t._v(" "),s("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/caihui"}},[t._v("彩绘陶")]),t._v(" "),s("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/yinwen"}},[t._v("印纹陶")]),t._v(" "),s("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/youtao"}},[t._v("釉陶")])],1)],1),t._v(" "),s("el-container",[s("el-main",[s("div",{staticClass:"breadcrumb"},[s("div",{staticClass:"bread"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),s("el-breadcrumb-item",[t._v("分类")]),t._v(" "),s("el-breadcrumb-item",[t._v("彩陶")]),t._v(" "),s("el-breadcrumb-item",[t._v("马家窑文化彩陶")]),t._v(" "),s("el-breadcrumb-item")],1)],1)]),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"title"},[t._v("【马家窑文化彩陶】")]),t._v(" "),s("p",{staticClass:"p_main"},[t._v("\n              马家窑类型的彩陶器，质地细腻，打磨光滑，表面绘画流转生动的弦纹与涡纹。\n            "),s("br"),t._v("  马家窑文化是黄河上游新石器时代晚期文化，彩陶文物的出土数量十分丰富，而且呈现完整的发展序列，一般分为石岭下、马家窑、半山、马厂等类型，代表马家窑文化早、中、晚、末四期之特色。\n          ")]),t._v(" "),s("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[s("el-carousel",{staticStyle:{width:"60%"},attrs:{height:t.bannerHeight+"px"}},t._l(t.imgwrap,function(e){return s("el-carousel-item",{key:e.url},[s("el-image",{staticStyle:{height:"100%"},attrs:{src:e.url,"preview-src-list":t.srcList}})],1)}),1)],1),t._v(" "),s("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[s("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),s("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[s("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),s("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("0uw5")},null,null);e.default=l.exports}});
//# sourceMappingURL=17.c012d96ce4f2c25f1f88.js.map