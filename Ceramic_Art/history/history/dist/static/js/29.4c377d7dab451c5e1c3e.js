webpackJsonp([29],{"5s+S":function(t,e,i){t.exports=i.p+"static/img/图片1.baec1c8.png"},Cccu:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{opends:["7"],bannerHeight:200,collectors:"收藏",imgwrap:[{url:i("5s+S")},{url:i("dvAi")}],srcList:[i("5s+S"),i("dvAi")]}},mounted:function(){var t=this;this.setSize(),window.addEventListener("resize",function(){t.setSize()},!1)},methods:{setSize:function(){this.bannerHeight=document.body.clientWidth/4},change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-header",[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[s("img",{staticStyle:{height:"80%"},attrs:{src:i("L0W3")}})]),t._v(" "),s("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[s("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),s("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/history"}},[s("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/classes"}},[s("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[s("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),s("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[s("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),s("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[s("img",{staticStyle:{height:"80%"},attrs:{src:i("7Otq")}})])],1)],1),t._v(" "),s("el-container",[s("el-aside",[s("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("新石器时代")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/xinshiqi/theoldest"}},[t._v("世界上最古老的陶器")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/xinshiqi/yangshao"}},[t._v("仰韶文化（彩陶艺术）")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/xinshiqi/longshan"}},[t._v("龙山文化（黑陶艺术）")])],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("商周时期")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/shangzhou/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"3"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("战国时期")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/zhanguo/kongxinzhuan"}},[t._v("空心砖")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/zhanguo/huitao"}},[t._v("灰陶")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/zhanguo/yinwenyingtao"}},[t._v("印纹硬陶")])],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"4"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("秦汉时期")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/qinhan/bingmayong"}},[t._v("兵马俑")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/qinhan/caihuitao"}},[t._v("彩绘陶")])],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"5"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("唐代")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/tang/tangsancai"}},[t._v("唐三彩")])],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"6"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("宋代五大官窑")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/song/ruyao"}},[t._v("汝窑")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/song/guanyao"}},[t._v("官窑")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/song/geyao"}},[t._v("哥窑")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/song/junyao"}},[t._v("钧窑")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/song/dingyao"}},[t._v("定窑")])],1)],2),t._v(" "),s("el-menu-item",{staticClass:"yuan",attrs:{index:"/history/yuan"}},[t._v("元代")]),t._v(" "),s("el-submenu",{attrs:{index:"7"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("明代")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/ming/mingchu"}},[t._v("明初")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/ming/yongxuan"}},[t._v("永乐、宣德")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/ming/zjt"}},[t._v("正统、景泰、天顺")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/ming/chz"}},[t._v("成化、弘治、正德")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/ming/jlw"}},[t._v("嘉靖、隆庆、万历")]),t._v(" "),s("el-menu-item",{staticClass:"is-active",attrs:{index:"/history/ming/tianqi"}},[t._v("天启")])],1)],2),t._v(" "),s("el-submenu",{attrs:{index:"8"}},[s("template",{slot:"title"},[s("span",{staticClass:"menutitle"},[t._v("清代")])]),t._v(" "),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"/history/qing/shunzhi"}},[t._v("顺治")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/qing/kangxi"}},[t._v("康熙")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/qing/yongqian"}},[t._v("雍正、乾隆")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/qing/jiaqing"}},[t._v("嘉庆")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/qing/guangxu"}},[t._v("光绪")]),t._v(" "),s("el-menu-item",{attrs:{index:"/history/qing/xuantong"}},[t._v("宣统")])],1)],2),t._v(" "),s("el-menu-item",{staticClass:"xdty",attrs:{index:"/history/xiandai"}},[t._v("现代陶艺")])],1)],1),t._v(" "),s("el-container",[s("el-main",[s("div",{staticClass:"breadcrumb"},[s("div",{staticClass:"bread"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),s("el-breadcrumb-item",[t._v("历史")]),t._v(" "),s("el-breadcrumb-item",[t._v("明代")]),t._v(" "),s("el-breadcrumb-item",[t._v("天启")]),t._v(" "),s("el-breadcrumb-item")],1)],1)]),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"title"},[t._v("【天启】")]),t._v(" "),s("p",{staticClass:"p_main"},[t._v("\n              明末天启（1620—1627）、崇祯（1628—1644）时由于政治动荡，导致百业凋敝，陶瓷业也萧条冷清。天启十九年以后朝廷即无下令造官窑器，因此天启年款器甚少，以“大明天启年制”为主，也有“天启年制”款。民窑器中各种图记款、堂名款、吉语款、颂语款增多，如玉堂佳器、万福攸同等；多伪托款，有永乐、宣德、成化、天顺、正德、嘉靖等朝的，其中伪托天顺款的惟有天启。纹饰仍以传统纹饰为主，但道教内容的纹饰较万历时少，画意粗率。此期的纹饰较疏朗，生活气息较重。胎体厚重、胎质粗松、器形不规整、器底粘砂、塌底、跳刀痕等已成时代特征。\n            "),s("br"),t._v("  崇祯无官款器。器型不多，以钵式炉多见，此外还有碗、杯、瓶、花觚等。青料有石子青、浙料等。发色粗者多晕散、精者稳定。纹饰图案除传统题材外，高士图尤其多见。婴戏图小孩头大脚小比例不谐调。山水人物图（高士图）中秋草、括号云、小太阳等为典型特色。胎质粗疏。釉白中闪青，有的发灰。\n          ")]),t._v(" "),s("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[s("el-carousel",{staticStyle:{width:"60%"},attrs:{height:t.bannerHeight+"px"}},t._l(t.imgwrap,function(e){return s("el-carousel-item",{key:e.url},[s("el-image",{staticStyle:{height:"100%"},attrs:{src:e.url,"preview-src-list":t.srcList}})],1)}),1)],1),t._v(" "),s("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[s("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),s("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),s("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[s("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),s("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("s7eE")},null,null);e.default=a.exports},dvAi:function(t,e,i){t.exports=i.p+"static/img/图片2.8ed1d04.png"},s7eE:function(t,e){}});
//# sourceMappingURL=29.4c377d7dab451c5e1c3e.js.map