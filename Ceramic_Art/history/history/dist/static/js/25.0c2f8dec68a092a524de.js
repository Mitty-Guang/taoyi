webpackJsonp([25],{B5qM:function(t,e,i){t.exports=i.p+"static/img/图片3.f599de8.png"},DEmg:function(t,e,i){t.exports=i.p+"static/img/图片1.d98a79b.png"},bAJ0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{opends:["7"],bannerHeight:200,collectors:"收藏",imgwrap:[{url:i("DEmg")},{url:i("tvqm")},{url:i("B5qM")}],srcList:[i("DEmg"),i("tvqm"),i("B5qM")]}},mounted:function(){var t=this;this.setSize(),window.addEventListener("resize",function(){t.setSize()},!1)},methods:{setSize:function(){this.bannerHeight=document.body.clientWidth/4},change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("L0W3")}})]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[n("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),n("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/history"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/classes"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[n("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[n("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("7Otq")}})])],1)],1),t._v(" "),n("el-container",[n("el-aside",[n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("新石器时代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/xinshiqi/theoldest"}},[t._v("世界上最古老的陶器")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/yangshao"}},[t._v("仰韶文化（彩陶艺术）")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/longshan"}},[t._v("龙山文化（黑陶艺术）")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("商周时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/shangzhou/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("战国时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/zhanguo/kongxinzhuan"}},[t._v("空心砖")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/zhanguo/huitao"}},[t._v("灰陶")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/zhanguo/yinwenyingtao"}},[t._v("印纹硬陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("秦汉时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qinhan/bingmayong"}},[t._v("兵马俑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qinhan/caihuitao"}},[t._v("彩绘陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("唐代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/tang/tangsancai"}},[t._v("唐三彩")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"6"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("宋代五大官窑")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/song/ruyao"}},[t._v("汝窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/guanyao"}},[t._v("官窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/geyao"}},[t._v("哥窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/junyao"}},[t._v("钧窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/dingyao"}},[t._v("定窑")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"yuan",attrs:{index:"/history/yuan"}},[t._v("元代")]),t._v(" "),n("el-submenu",{attrs:{index:"7"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("明代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/ming/mingchu"}},[t._v("明初")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/yongxuan"}},[t._v("永乐、宣德")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/zjt"}},[t._v("正统、景泰、天顺")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/chz"}},[t._v("成化、弘治、正德")]),t._v(" "),n("el-menu-item",{staticClass:"is-active",attrs:{index:"/history/ming/jlw"}},[t._v("嘉靖、隆庆、万历")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/tianqi"}},[t._v("天启")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"8"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("清代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qing/shunzhi"}},[t._v("顺治")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/kangxi"}},[t._v("康熙")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/yongqian"}},[t._v("雍正、乾隆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/jiaqing"}},[t._v("嘉庆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/guangxu"}},[t._v("光绪")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/xuantong"}},[t._v("宣统")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"xdty",attrs:{index:"/history/xiandai"}},[t._v("现代陶艺")])],1)],1),t._v(" "),n("el-container",[n("el-main",[n("div",{staticClass:"breadcrumb"},[n("div",{staticClass:"bread"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("历史")]),t._v(" "),n("el-breadcrumb-item",[t._v("明代")]),t._v(" "),n("el-breadcrumb-item",[t._v("嘉靖、隆庆、万历")]),t._v(" "),n("el-breadcrumb-item")],1)],1)]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"title"},[t._v("【嘉靖、隆庆、万历】")]),t._v(" "),n("p",{staticClass:"p_main"},[t._v("\n              明晚期的嘉靖（1522—1566）、隆庆（1567—1572）、万历（1573—1620）三朝中，以嘉靖的时间最长，故此朝的器物发色不尽相同，早期的与正德器相近，发色灰蓝。但此期独具特色的是使用回青料。纹饰除传统的仍流行外，道教色彩的纹饰大量增加，如云鹤、八仙、八卦、道家八宝等。花组字为独具特色的纹饰。此外还有婴戏、高士、鱼藻图等。婴戏图的娃娃头前额突出明显。胎、釉均是小器细、大器粗。大器较多。八角形、四方形、六角形、上圆下方式葫芦瓶等异型器多见。朝珠盒为此朝独特器型。款识“制”、“造”均用，以“制”字居多。器底心书“金录大醮坛用”为祭祀用器。还有东书堂、东萝馆等堂名款。\n            "),n("br"),t._v("  隆庆朝由于时间短，因而器物也少，大器、带年款器则更少。青料用回青，呈色稳定、纯正，蓝中泛紫（不像嘉靖器般紫得厉害）。纹饰与嘉靖朝相近。因以小件器为主，胎、釉较细腻。多六角、八角等造型。官窑器的款识有“大明隆庆年造”和“隆庆年造”两种，不见“制”款；民窑器款有“隆庆年造”或“制”四字款；吉语款有万福攸同、福寿康宁等，颂语款有富贵佳器等。\n            "),n("br"),t._v("  万历早期用回青，中晚期用石子青及浙料。多淡描青花。纹饰除传统的外，还流行锦地开光纹饰；纹饰布局繁密，主题不清；另外福禄寿字为纹饰的也多见。瓶类较多见镂空、套活环等工艺。器型除传统的外，新出现了壁瓶。胎质较粗，釉白中泛青。款识多见“大明万历年造”，也有“大明万历年制”、“万历年造”；多伪托款，有宣德、成化、嘉靖的。总的来说工艺水平较前退步。\n          ")]),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("el-carousel",{staticStyle:{width:"60%"},attrs:{height:t.bannerHeight+"px"}},t._l(t.imgwrap,function(e){return n("el-carousel-item",{key:e.url},[n("el-image",{staticStyle:{height:"100%"},attrs:{src:e.url,"preview-src-list":t.srcList}})],1)}),1)],1),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),n("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[n("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),n("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var a=i("VU/8")(n,s,!1,function(t){i("gZZ7")},null,null);e.default=a.exports},gZZ7:function(t,e){},tvqm:function(t,e,i){t.exports=i.p+"static/img/图片2.0f3c3fc.png"}});
//# sourceMappingURL=25.0c2f8dec68a092a524de.js.map