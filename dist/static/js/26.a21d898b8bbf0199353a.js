webpackJsonp([26],{N25K:function(t,e){},cItd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{opends:["7"],bannerHeight:200,collectors:"收藏",imgwrap:[{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/mingchu/图片1.png"}],srcList:["https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/ming/mingchu/图片1.png"]}},mounted:function(){var t=this;this.setSize(),window.addEventListener("resize",function(){t.setSize()},!1)},methods:{setSize:function(){this.bannerHeight=document.body.clientWidth/4},change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("L0W3")}})]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[n("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),n("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/history"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/classes"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[n("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[n("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("7Otq")}})])],1)],1),t._v(" "),n("el-container",[n("el-aside",[n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("新石器时代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/xinshiqi/theoldest"}},[t._v("世界上最古老的陶器")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/yangshao"}},[t._v("仰韶文化（彩陶艺术）")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/longshan"}},[t._v("龙山文化（黑陶艺术）")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("商周时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/shangzhou/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("战国时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/zhanguo/kongxinzhuan"}},[t._v("空心砖")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/zhanguo/huitao"}},[t._v("灰陶")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/zhanguo/yinwenyingtao"}},[t._v("印纹硬陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("秦汉时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qinhan/bingmayong"}},[t._v("兵马俑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qinhan/caihuitao"}},[t._v("彩绘陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("唐代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/tang/tangsancai"}},[t._v("唐三彩")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"6"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("宋代五大官窑")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/song/ruyao"}},[t._v("汝窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/guanyao"}},[t._v("官窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/geyao"}},[t._v("哥窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/junyao"}},[t._v("钧窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/dingyao"}},[t._v("定窑")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"yuan",attrs:{index:"/history/yuan"}},[t._v("元代")]),t._v(" "),n("el-submenu",{attrs:{index:"7"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("明代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{staticClass:"is-active",attrs:{index:"/history/ming/mingchu"}},[t._v("明初")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/yongxuan"}},[t._v("永乐、宣德")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/zjt"}},[t._v("正统、景泰、天顺")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/chz"}},[t._v("成化、弘治、正德")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/jlw"}},[t._v("嘉靖、隆庆、万历")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/tianqi"}},[t._v("天启")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"8"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("清代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qing/shunzhi"}},[t._v("顺治")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/kangxi"}},[t._v("康熙")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/yongqian"}},[t._v("雍正、乾隆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/jiaqing"}},[t._v("嘉庆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/guangxu"}},[t._v("光绪")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/xuantong"}},[t._v("宣统")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"xdty",attrs:{index:"/history/xiandai"}},[t._v("现代陶艺")])],1)],1),t._v(" "),n("el-container",[n("el-main",[n("div",{staticClass:"breadcrumb"},[n("div",{staticClass:"bread"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("历史")]),t._v(" "),n("el-breadcrumb-item",[t._v("明代")]),t._v(" "),n("el-breadcrumb-item",[t._v("明初")]),t._v(" "),n("el-breadcrumb-item")],1)],1)]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"title"},[t._v("【明初】")]),t._v(" "),n("p",{staticClass:"p_main"},[t._v("\n              明初（洪武朝1368--1402）的青花器有大小盘、碗、梅瓶、玉壶春瓶等。所用青料以国产料为主，也不排除有少量进口料。青花发色有的淡蓝，有的泛灰。前者有一部分有晕散现象。纹饰布局仍有元代多层装饰的遗风，题材也变化不大，但许多细节已有变化：如蕉叶的中梗留白；花瓣留白边较之元代更明显清晰；牡丹叶子“缺刻”部位较深，不如元代的肥硕；菊花绘成“扁菊”，花芯以方格纹表现；龙纹仍是细长身，但除了三、四爪外，已出现五爪，爪形似风轮，气势不如元龙凶猛矫健。辅助纹饰的如意云头由元代的三阶云改为二阶云；莲瓣纹内多绘佛家八宝（元代多绘道家杂宝）。碗、小盘多绘云气纹，仅绘于器物外壁的上半部。器物底足多平切、砂底无釉见窑红。未出现年款，带款的器物也极少。\n          ")]),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("el-carousel",{staticStyle:{width:"60%"},attrs:{height:t.bannerHeight+"px"}},t._l(t.imgwrap,function(e){return n("el-carousel-item",{key:e.url},[n("el-image",{staticStyle:{height:"100%"},attrs:{src:e.url,"preview-src-list":t.srcList}})],1)}),1)],1),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),n("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[n("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),n("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var a=i("VU/8")(n,s,!1,function(t){i("N25K")},null,null);e.default=a.exports}});
//# sourceMappingURL=26.a21d898b8bbf0199353a.js.map