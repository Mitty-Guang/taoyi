webpackJsonp([25],{GboP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{opends:["8"],bannerHeight:200,collectors:"收藏",imgwrap:[{url:"https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qing/yongqian/图片1.png"}],srcList:["https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qing/yongqian/图片1.png"]}},mounted:function(){var t=this;this.setSize(),window.addEventListener("resize",function(){t.setSize()},!1)},methods:{setSize:function(){this.bannerHeight=document.body.clientWidth/4},change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("L0W3")}})]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[n("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),n("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/history"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/classes"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[n("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[n("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("7Otq")}})])],1)],1),t._v(" "),n("el-container",[n("el-aside",[n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("新石器时代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/xinshiqi/theoldest"}},[t._v("世界上最古老的陶器")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/yangshao"}},[t._v("仰韶文化（彩陶艺术）")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/longshan"}},[t._v("龙山文化（黑陶艺术）")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("商周时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/shangzhou/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("战国时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/zhanguo/kongxinzhuan"}},[t._v("空心砖")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/zhanguo/huitao"}},[t._v("灰陶")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/zhanguo/yinwenyingtao"}},[t._v("印纹硬陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("秦汉时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qinhan/bingmayong"}},[t._v("兵马俑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qinhan/caihuitao"}},[t._v("彩绘陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("唐代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/tang/tangsancai"}},[t._v("唐三彩")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"6"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("宋代五大官窑")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/song/ruyao"}},[t._v("汝窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/guanyao"}},[t._v("官窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/geyao"}},[t._v("哥窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/junyao"}},[t._v("钧窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/dingyao"}},[t._v("定窑")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"yuan",attrs:{index:"/history/yuan"}},[t._v("元代")]),t._v(" "),n("el-submenu",{attrs:{index:"7"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("明代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/ming/mingchu"}},[t._v("明初")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/yongxuan"}},[t._v("永乐、宣德")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/zjt"}},[t._v("正统、景泰、天顺")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/chz"}},[t._v("成化、弘治、正德")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/jlw"}},[t._v("嘉靖、隆庆、万历")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/tianqi"}},[t._v("天启")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"8"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("清代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qing/shunzhi"}},[t._v("顺治")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/kangxi"}},[t._v("康熙")]),t._v(" "),n("el-menu-item",{staticClass:"is-active",attrs:{index:"/history/qing/yongqian"}},[t._v("雍正、乾隆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/jiaqing"}},[t._v("嘉庆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/guangxu"}},[t._v("光绪")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/xuantong"}},[t._v("宣统")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"xdty",attrs:{index:"/history/xiandai"}},[t._v("现代陶艺")])],1)],1),t._v(" "),n("el-container",[n("el-main",[n("div",{staticClass:"breadcrumb"},[n("div",{staticClass:"bread"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("历史")]),t._v(" "),n("el-breadcrumb-item",[t._v("清代")]),t._v(" "),n("el-breadcrumb-item",[t._v("雍正、乾隆")]),t._v(" "),n("el-breadcrumb-item")],1)],1)]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"title"},[t._v("【雍正、乾隆】")]),t._v(" "),n("p",{staticClass:"p_main"},[t._v("\n              雍正（1723—1735）、乾隆（1736—1795）时期青花器多仿明永乐、宣德的苏麻离青，但没有进口料，以笔端点染铁锈斑痕。其次是仿成化的淡描青花。仿明器物除了从胎、釉、青料等方面区别外，器型也是重要的区别点：明器的胎接口是上下接，清器是前后接。\n            "),n("br"),t._v("  雍正时工艺精细，修胎讲究，民窑器则粗糙、有旋胎痕。乾隆时尤其是后期工艺开始走下坡路，除了继承前朝的品种外，还有创新的品种青花玲珑瓷。纹饰内容也较雍正时多样，但总的来说以寓意吉祥的图案为主。\n            "),n("br"),t._v("  款识除年款外，雍正时较多见的有杂宝款、四朵花款、动物形款等，堂名款较康熙少。乾隆时堂名款又较雍正的多，年款多篆书，也有四朵花款。\n          ")]),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("el-carousel",{staticStyle:{width:"60%"},attrs:{height:t.bannerHeight+"px"}},t._l(t.imgwrap,function(e){return n("el-carousel-item",{key:e.url},[n("el-image",{staticStyle:{height:"100%"},attrs:{src:e.url,"preview-src-list":t.srcList}})],1)}),1)],1),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),n("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[n("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),n("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var a=i("VU/8")(n,s,!1,function(t){i("fGjX")},null,null);e.default=a.exports},fGjX:function(t,e){}});
//# sourceMappingURL=25.399e450d44cc2c5a52bf.js.map