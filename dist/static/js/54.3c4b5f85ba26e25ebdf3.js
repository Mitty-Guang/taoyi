webpackJsonp([54],{"3REx":function(t,e){},pjH3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{opends:["1"],bannerHeight:200,collectors:"收藏",imgwrap:[{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片1.png"},{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片2.png"},{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片3.png"},{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片4.png"}],srcList:["https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片1.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片2.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片3.png","https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/classes/yansetao/heitao/图片4.png"]}},mounted:function(){var t=this;this.setSize(),window.addEventListener("resize",function(){t.setSize()},!1)},methods:{setSize:function(){this.bannerHeight=document.body.clientWidth/4},change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[a("img",{staticStyle:{height:"80%"},attrs:{src:s("L0W3")}})]),t._v(" "),a("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[a("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),a("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[a("template",{slot:"title"},[a("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),a("el-menu-item",{attrs:{index:"/history"}},[a("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes"}},[a("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[a("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[a("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),a("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[a("img",{staticStyle:{height:"80%"},attrs:{src:s("7Otq")}})])],1)],1),t._v(" "),a("el-container",[a("el-aside",[a("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("span",{staticClass:"menutitle"},[t._v("颜色陶")])]),t._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/classes/yansetao/hongtao"}},[t._v("红陶")]),t._v(" "),a("el-menu-item",{staticClass:"is-active",attrs:{index:"/classes/yansetao/heitao"}},[t._v("黑陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/yansetao/huitao"}},[t._v("灰陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/yansetao/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("span",{staticClass:"menutitle"},[t._v("彩陶")])]),t._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/classes/caitao/caitao"}},[t._v("彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/yangshao"}},[t._v("仰韶文化彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/banpo"}},[t._v("半坡彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/miaodigou"}},[t._v("庙底沟彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/majiayao"}},[t._v("马家窑文化彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/banshan"}},[t._v("半山彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/machang"}},[t._v("马厂类型彩陶")])],1)],2),t._v(" "),a("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/caihui"}},[t._v("彩绘陶")]),t._v(" "),a("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/yinwen"}},[t._v("印纹陶")]),t._v(" "),a("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/youtao"}},[t._v("釉陶")])],1)],1),t._v(" "),a("el-container",[a("el-main",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"bread"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("分类")]),t._v(" "),a("el-breadcrumb-item",[t._v("颜色陶")]),t._v(" "),a("el-breadcrumb-item",[t._v("黑陶")]),t._v(" "),a("el-breadcrumb-item")],1)],1)]),t._v(" "),a("div",{staticClass:"text"},[a("p",{staticClass:"title"},[t._v("【黑陶】")]),t._v(" "),a("p",{staticClass:"p_main"},[t._v("\n              诞生于中国新石器时代，古老的中国制陶技艺，有黑如漆，声如罄，薄如纸，亮如镜，硬如瓷的美誉。在大溪文化、屈家岭文化、龙山文化遗址中均有发现，其中以大汶口文化为最早，距今6000年左右。1928年，中国著名考古学者吴金鼎，在山东省章丘县（现济南市章丘区）龙山镇的考古发掘中，首次发现了这一史前遗存，故被命名为“龙山文化”。因以黑色陶器为主要特征。黑陶按质地可分为三种：泥质黑陶、夹砂黑陶、细泥黑陶。\n          ")]),t._v(" "),a("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[a("el-carousel",{staticStyle:{width:"60%"},attrs:{height:t.bannerHeight+"px"}},t._l(t.imgwrap,function(e){return a("el-carousel-item",{key:e.url},[a("el-image",{staticStyle:{height:"100%"},attrs:{src:e.url,"preview-src-list":t.srcList}})],1)}),1)],1),t._v(" "),a("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[a("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),a("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),a("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[a("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),a("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(a,i,!1,function(t){s("3REx")},null,null);e.default=l.exports}});
//# sourceMappingURL=54.3c4b5f85ba26e25ebdf3.js.map