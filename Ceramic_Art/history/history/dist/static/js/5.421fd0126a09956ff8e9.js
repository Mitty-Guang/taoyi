webpackJsonp([5],{"1nP5":function(t,e,i){t.exports=i.p+"static/img/图片4.f2a4d7a.png"},Mbq5:function(t,e,i){t.exports=i.p+"static/img/图片5.dcd578f.png"},hEG0:function(t,e){},j3tD:function(t,e,i){t.exports=i.p+"static/img/图片6.5206c63.png"},kKNB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{opends:["3"],bannerHeight:200,collectors:"收藏",imgwrap:[{url:i("rPO2")},{url:i("lMJj")},{url:i("pZD7")},{url:i("1nP5")},{url:i("Mbq5")},{url:i("j3tD")}],srcList:[i("rPO2"),i("lMJj"),i("pZD7"),i("1nP5"),i("Mbq5"),i("j3tD")]}},mounted:function(){var t=this;this.setSize(),window.addEventListener("resize",function(){t.setSize()},!1)},methods:{setSize:function(){this.bannerHeight=document.body.clientWidth/4},change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("L0W3")}})]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[n("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),n("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/history"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/classes"}},[n("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[n("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),n("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[n("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[n("img",{staticStyle:{height:"80%"},attrs:{src:i("7Otq")}})])],1)],1),t._v(" "),n("el-container",[n("el-aside",[n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("新石器时代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/xinshiqi/theoldest"}},[t._v("世界上最古老的陶器")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/yangshao"}},[t._v("仰韶文化（彩陶艺术）")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/xinshiqi/longshan"}},[t._v("龙山文化（黑陶艺术）")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("商周时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/shangzhou/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("战国时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/zhanguo/kongxinzhuan"}},[t._v("空心砖")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/zhanguo/huitao"}},[t._v("灰陶")]),t._v(" "),n("el-menu-item",{staticClass:"is-active",attrs:{index:"/history/zhanguo/yinwenyingtao"}},[t._v("印纹硬陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("秦汉时期")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qinhan/bingmayong"}},[t._v("兵马俑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qinhan/caihuitao"}},[t._v("彩绘陶")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("唐代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/tang/tangsancai"}},[t._v("唐三彩")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"6"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("宋代五大官窑")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/song/ruyao"}},[t._v("汝窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/guanyao"}},[t._v("官窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/geyao"}},[t._v("哥窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/junyao"}},[t._v("钧窑")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/song/dingyao"}},[t._v("定窑")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"yuan",attrs:{index:"/history/yuan"}},[t._v("元代")]),t._v(" "),n("el-submenu",{attrs:{index:"7"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("明代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/ming/mingchu"}},[t._v("明初")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/yongxuan"}},[t._v("永乐、宣德")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/zjt"}},[t._v("正统、景泰、天顺")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/chz"}},[t._v("成化、弘治、正德")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/jlw"}},[t._v("嘉靖、隆庆、万历")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/ming/tianqi"}},[t._v("天启")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"8"}},[n("template",{slot:"title"},[n("span",{staticClass:"menutitle"},[t._v("清代")])]),t._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/history/qing/shunzhi"}},[t._v("顺治")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/kangxi"}},[t._v("康熙")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/yongqian"}},[t._v("雍正、乾隆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/jiaqing"}},[t._v("嘉庆")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/guangxu"}},[t._v("光绪")]),t._v(" "),n("el-menu-item",{attrs:{index:"/history/qing/xuantong"}},[t._v("宣统")])],1)],2),t._v(" "),n("el-menu-item",{staticClass:"xdty",attrs:{index:"/history/xiandai"}},[t._v("现代陶艺")])],1)],1),t._v(" "),n("el-container",[n("el-main",[n("div",{staticClass:"breadcrumb"},[n("div",{staticClass:"bread"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("历史")]),t._v(" "),n("el-breadcrumb-item",[t._v("战国时期")]),t._v(" "),n("el-breadcrumb-item",[t._v("印纹硬陶")]),t._v(" "),n("el-breadcrumb-item")],1)],1)]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"title"},[t._v("【印纹硬陶】")]),t._v(" "),n("p",{staticClass:"p_main"},[t._v("\n              印纹硬陶(Stamped Hard Pottery)"),n("br"),t._v("  亦称硬陶。新石器时代晚期我国南方地区首先出现的一种陶器。商代的硬陶，在长江中下游地区发现较多，黄河中下游地区也有少量发现。到西周时期，发展到兴盛阶段。"),n("br"),t._v("  烧制印纹硬陶的原料是一种含铁量很高的粘土，胎质颜色多呈紫色、红褐色、灰褐色或黄褐色。烧成温度比一般陶器高，有的达到烧结程度，少数器物表现呈现出因窑内高温溶化而形成的光泽，似施有一层薄釉。印纹硬陶基本上采用泥条盘筑法成型。常见的器形有小口深腹圜底尊，小口深腹圜底罐等等。器表多拍印叶脉纹、云雷纹、人字纹、绳纹、方格纹、回纹、曲折纹、菱形纹、波浪纹、夔纹等。硬陶在长江以南和东南沿海地区出土数量较多，是承袭当地软陶发展起来的。在江西、湖南和福建等地的新石器时代晚期遗址中出现有硬陶。"),n("br"),t._v("  中国青铜时代至汉代长江中下游和东南沿海地区生产的一种质地坚硬、表面拍印几何图案的日用陶器。质地比一般陶器细腻。原料含铁量较高，烧成温度也比一般陶器高，颜色多呈紫褐、红褐、黄褐、灰褐或青灰色。泥料中部分成分和原始青瓷相似，烧制地区也一致。成型方法主要采用泥条盘筑法，也有轮制成型。器鼻和耳等附件是手捏成型后粘贴的。初步成型后要用“抵手”抵住内壁，用刻有花纹的拍子拍打器壁，使胎体坚密。印纹硬陶在黄河中下游地区也有发现，但数量很少，出现时间比白陶为晚。在相当长的一段时间内曾与白陶并存。在江西、湖南、福建等地距今四千年左右的遗址里，只发现有少量造型简单的器物，器表拍印叶脉纹。至商代器形增多，有罍、罐、尊、釜、碗、杯、豆等。花纹增加了云雷纹、曲折纹、绳纹和人字纹。西周是印纹硬陶生产的发展时期，器形增加了瓮、罐、瓿等。有的器物高达99厘米。纹饰增加了方格纹、曲尺纹、回纹、菱形纹、波浪纹和夔纹等。也有的用几种花纹组成图案。春秋时期印纹硬陶与西周基本相同，花纹增加了大小方格纹、席纹和布纹。战国秦汉时印纹硬陶变化不大，器物主要有瓮、罐、坛、瓿、钵、盂、缸、匏壶等。新的纹饰主要有漩涡纹、S纹、麻布纹、米筛孔形纹、水波纹、栉齿纹、圆珠纹、篦纹、纹饰，与器形协调得体，比较美观。\n          ")]),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("el-carousel",{staticStyle:{width:"60%"},attrs:{height:t.bannerHeight+"px"}},t._l(t.imgwrap,function(e){return n("el-carousel-item",{key:e.url},[n("el-image",{staticStyle:{height:"100%"},attrs:{src:e.url,"preview-src-list":t.srcList}})],1)}),1)],1),t._v(" "),n("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[n("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),n("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[n("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),n("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var a=i("VU/8")(n,s,!1,function(t){i("hEG0")},null,null);e.default=a.exports},lMJj:function(t,e,i){t.exports=i.p+"static/img/图片2.59be6be.png"},pZD7:function(t,e,i){t.exports=i.p+"static/img/图片3.6fcf066.png"},rPO2:function(t,e,i){t.exports=i.p+"static/img/图片1.58b2141.png"}});
//# sourceMappingURL=5.421fd0126a09956ff8e9.js.map