webpackJsonp([51],{VLWZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{opends:["2"],collectors:"收藏"}},methods:{change1:function(){this.$refs.on.style.display="block",this.$refs.off.style.display="none",this.collectors="已收藏"},change2:function(){this.$refs.on.style.display="none",this.$refs.off.style.display="block",this.collectors="收藏"},handleSelect:function(t,e){console.log(t,e)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$router.path,mode:"horizontal","background-color":"#c6ad8b","text-color":"#000","active-text-color":"#000",router:""},on:{select:t.handleSelect}},[a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/index"}},[a("img",{staticStyle:{height:"80%"},attrs:{src:s("L0W3")}})]),t._v(" "),a("div",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},[a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"/news"}},[a("span",{staticClass:"menutitle"},[t._v("新闻")])]),t._v(" "),a("el-submenu",{staticStyle:{float:"left"},attrs:{index:"3"}},[a("template",{slot:"title"},[a("span",{staticClass:"menutitle"},[t._v("介绍")])]),t._v(" "),a("el-menu-item",{attrs:{index:"/history"}},[a("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("历史")])]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes"}},[a("span",{staticClass:"menutitle",staticStyle:{"font-size":"120%"}},[t._v("分类")])])],2),t._v(" "),a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"4"}},[a("span",{staticClass:"menutitle"},[t._v("教程")])]),t._v(" "),a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"5"}},[a("span",{staticClass:"menutitle"},[t._v("论坛")])])],1),t._v(" "),a("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"/user"}},[a("img",{staticStyle:{height:"80%"},attrs:{src:s("7Otq")}})])],1)],1),t._v(" "),a("el-container",[a("el-aside",[a("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100vh"},attrs:{"default-openeds":t.opends,"default-active":t.$router.path,"background-color":"#c6ad8b","text-color":"#333333","active-text-color":"#ffd04b",router:""},on:{open:t.handleOpen,close:t.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("span",{staticClass:"menutitle"},[t._v("颜色陶")])]),t._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/classes/yansetao/hongtao"}},[t._v("红陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/yansetao/heitao"}},[t._v("黑陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/yansetao/huitao"}},[t._v("灰陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/yansetao/baitao"}},[t._v("白陶")])],1)],2),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("span",{staticClass:"menutitle"},[t._v("彩陶")])]),t._v(" "),a("el-menu-item-group",[a("el-menu-item",{staticClass:"is-active",attrs:{index:"/classes/caitao/caitao"}},[t._v("彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/yangshao"}},[t._v("仰韶文化彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/banpo"}},[t._v("半坡彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/miaodigou"}},[t._v("庙底沟彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/majiayao"}},[t._v("马家窑文化彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/banshan"}},[t._v("半山彩陶")]),t._v(" "),a("el-menu-item",{attrs:{index:"/classes/caitao/machang"}},[t._v("马厂类型彩陶")])],1)],2),t._v(" "),a("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/caihui"}},[t._v("彩绘陶")]),t._v(" "),a("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/yinwen"}},[t._v("印纹陶")]),t._v(" "),a("el-menu-item",{staticClass:"xdty",attrs:{index:"/classes/youtao"}},[t._v("釉陶")])],1)],1),t._v(" "),a("el-container",[a("el-main",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"bread"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("分类")]),t._v(" "),a("el-breadcrumb-item",[t._v("彩陶")]),t._v(" "),a("el-breadcrumb-item",[t._v("彩陶")]),t._v(" "),a("el-breadcrumb-item")],1)],1)]),t._v(" "),a("div",{staticClass:"text"},[a("p",{staticClass:"title"},[t._v("【彩陶】")]),t._v(" "),a("p",{staticClass:"p_main"},[t._v("\n              亦称陶瓷绘画，它是我国悠久的“国粹”——陶瓷艺术之中的艺术，早在距今七千年左右的半坡文化时期，陶上便出现了最早的彩绘。而瓷上作品相对纸本更具张力，彩陶艺术中融合了艺术家的各种创作思想、风格、语言，创作出风格各异而又多姿多彩的艺术珍品，是我国不可多得的文化瑰宝。\n            彩陶是指在打磨光滑的橙红色陶坯上，以天然的矿物质颜料进行描绘，用赭石和氧化锰作呈色元素，然后入窑烧制。在橙红色的胎体上呈现出赭红、黑、白、诸种颜色的美丽图案，形成纹样与器物造型高度统一，达到装饰美化效果的陶器。\n            彩陶制作精美，以泥质陶为主，质地细腻，因之既是实用器皿，又具有很高的艺术价值。由于色彩绘于烧制前，故和陶器一起焙烧后，色彩和陶胎结合紧密，不易发生脱落。彩绘的形式总体上可分为图案和图画两大类。\n            彩陶发源于距今约10000年前的新石器时代。人类在新石器时代伴随着相对定居的农耕文化一起发明了烧陶技术。关中地区大约在公元前6000年的老官台文化时期就有了较发达的陶器，有个别钵形器口沿装饰一条宽彩带，这是彩陶的萌芽。在公元前5000年的西安半坡村的仰韶文化遗址中，发现了很多精美的彩陶，表明在半坡时期，人们已经能熟练地控制窑温，并且彩绘艺术也达到了很高的水平。\n            烧成温度约在900℃。\n          ")]),t._v(" "),a("div",{staticStyle:{"padding-top":"30px"},attrs:{align:"center"}},[a("i",{ref:"off",staticClass:"el-icon-star-off",staticStyle:{display:"block"},on:{click:t.change1}}),t._v(" "),a("i",{ref:"on",staticClass:"el-icon-star-on",staticStyle:{display:"none"},on:{click:t.change2}})]),t._v(" "),a("div",{staticStyle:{"padding-top":"10px","margin-bottom":"30px"},attrs:{align:"center"}},[a("span",[t._v(t._s(t.collectors))])])])]),t._v(" "),a("el-footer",[t._v("Footer")])],1)],1)],1)},staticRenderFns:[]};var i=s("VU/8")(a,l,!1,function(t){s("gdpG")},null,null);e.default=i.exports},gdpG:function(t,e){}});
//# sourceMappingURL=51.f9b6f75a17fe46bf00e9.js.map