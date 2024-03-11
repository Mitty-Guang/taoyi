<template>
  <el-container>
    <el-header
      ><el-menu
        :default-active="$router.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#c6ad8b"
        text-color="#000"
        active-text-color="#000"
        router
      >
        <el-menu-item index="/index" style="float:left;">
          <img
            src="../../../assets/images/taoci_black.png"
            style="height: 80%; "
          />
        </el-menu-item>
        <div
          style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%);"
        >
          <el-menu-item index="/news" style="float: left;">
            <span class="menutitle">新闻</span>
          </el-menu-item>
          <el-submenu index="3" style="float: left;">
            <template slot="title">
              <span class="menutitle">介绍</span>
            </template>
            <el-menu-item index="/history">
              <span class="menutitle" style="font-size: 120%;">历史</span>
            </el-menu-item>
            <el-menu-item index="/classes">
              <span class="menutitle" style="font-size: 120%;">分类</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="4" style="float: left;">
            <span class="menutitle">教程</span></el-menu-item
          >
          <el-menu-item index="5" style="float: left;"
            ><span class="menutitle">论坛</span></el-menu-item
          >
        </div>
        <el-menu-item index="/user" style="float:right;">
          <img src="../../../assets/logo.png" style="height: 80%; " />
        </el-menu-item> </el-menu
    ></el-header>
    <el-container>
      <el-aside>
        <el-menu
          :default-openeds="opends"
          :default-active="$router.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#c6ad8b"
          text-color="#333333"
          active-text-color="#ffd04b"
          style="height: 100%"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="menutitle">新石器时代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/xinshiqi/theoldest"
                >世界上最古老的陶器</el-menu-item
              >
              <el-menu-item index="/history/xinshiqi/yangshao"
                >仰韶文化（彩陶艺术）</el-menu-item
              >
              <el-menu-item index="/history/xinshiqi/longshan"
                >龙山文化（黑陶艺术）</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span class="menutitle">商周时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/shangzhou/baitao"
                >白陶</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span class="menutitle">战国时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/zhanguo/kongxinzhuan"
                >空心砖</el-menu-item
              >
              <el-menu-item index="/history/zhanguo/huitao">灰陶</el-menu-item>
              <el-menu-item index="/history/zhanguo/yinwenyingtao"
                >印纹硬陶</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span class="menutitle">秦汉时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/qinhan/bingmayong" class="is-active"
                >兵马俑</el-menu-item
              >
              <el-menu-item index="/history/qinhan/caihuitao"
                >彩绘陶</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span class="menutitle">唐代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/tang/tangsancai"
                >唐三彩</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <span class="menutitle">宋代五大官窑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/song/ruyao">汝窑</el-menu-item>
              <el-menu-item index="/history/song/guanyao">官窑</el-menu-item>
              <el-menu-item index="/history/song/geyao">哥窑</el-menu-item>
              <el-menu-item index="/history/song/junyao">钧窑</el-menu-item>
              <el-menu-item index="/history/song/dingyao">定窑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/history/yuan" class="yuan">元代</el-menu-item>
          <el-submenu index="7">
            <template slot="title">
              <span class="menutitle">明代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/ming/mingchu">明初</el-menu-item>
              <el-menu-item index="/history/ming/yongxuan"
                >永乐、宣德</el-menu-item
              >
              <el-menu-item index="/history/ming/zjt"
                >正统、景泰、天顺</el-menu-item
              >
              <el-menu-item index="/history/ming/chz"
                >成化、弘治、正德</el-menu-item
              >
              <el-menu-item index="/history/ming/jlw"
                >嘉靖、隆庆、万历</el-menu-item
              >
              <el-menu-item index="/history/ming/tianqi">天启</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <span class="menutitle">清代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/qing/shunzhi">顺治</el-menu-item>
              <el-menu-item index="/history/qing/kangxi">康熙</el-menu-item>
              <el-menu-item index="/history/qing/yongqian"
                >雍正、乾隆</el-menu-item
              >
              <el-menu-item index="/history/qing/jiaqing">嘉庆</el-menu-item>
              <el-menu-item index="/history/qing/guangxu">光绪</el-menu-item>
              <el-menu-item index="/history/qing/xuantong">宣统</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="/history/xiandai" class="xdty"
            >现代陶艺</el-menu-item
          >
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="breadcrumb">
            <div class="bread">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index' }"
                  >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>历史</el-breadcrumb-item>
                <el-breadcrumb-item>秦汉时期</el-breadcrumb-item>
                <el-breadcrumb-item>兵马俑</el-breadcrumb-item>
                <el-breadcrumb-item></el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="text">
            <p class="title">【兵马俑】</p>
            <p class="p_main">
              &emsp;&emsp;兵马俑，即秦始皇陵兵马俑，亦简称秦兵马俑或秦俑，是第一批全国重点文物保护单位、第一批中国世界遗产，位于今陕西省西安市临潼区秦始皇陵以东1.5千米处的兵马俑坑内。<br />&emsp;&emsp;兵马俑是古代墓葬雕塑的一个类别。古代施行人殉，奴隶是奴隶主生前的附属品，奴隶主死后奴隶要作为殉葬品为奴隶主陪葬。兵马俑即制成兵马（战车、战马、士兵）形状的殉葬品。<br />&emsp;&emsp;1961年3月4日，秦始皇陵被国务院公布为第一批全国重点文物保护单位
              。1974年3月，兵马俑被发现。1987年，秦始皇陵及兵马俑坑被联合国教科文组织批准列入《世界遗产名录》，被誉为“世界第八大奇迹”
              ，先后有200多位外国元首和政府首脑参观访问，成为中国古代辉煌文明的一张金字名片，又被誉为世界十大古墓稀世珍宝之一。
            </p>
            <p class="title2">制作工艺</p>
            <p class="p_main">
              &emsp;&emsp;兵马俑大部分是采用陶冶烧制的方法制成，先用陶模做出初胎，再覆盖一层细泥进行加工刻画加彩，有的先烧后接，有的先接再烧。火候均匀、色泽单纯、硬度很高。每一道工序中，都有不同的分工，都有一套严格的工作系统。<br />&emsp;&emsp;当初的兵马俑都有鲜艳和谐的彩绘，发掘过程中发现有的陶俑刚出土时局部还保留着鲜艳的颜色，但是出土后由于被氧气氧化，颜色不到十秒钟瞬间消尽，化作白灰。现在能看到的只是残留的彩绘痕迹。
            </p>

            <p class="title3">陶俑工艺</p>
            <p class="p_main">
              &emsp;&emsp;陶俑的制作分三个步骤进行：<br />&emsp;&emsp;第一步先用泥塑成俑的大型（粗胎或初胎）；第二步是在俑大型的基础上，进行第二次复泥并加以修饰和细部刻划；第三步是将单独制作的头、手和躯干组装套合在一起，完成陶俑的大型。<br />&emsp;&emsp;制成的陶俑大型一般是在阴干后放进窑内焙烧的，焙烧的温度约为1000℃。俑烧成出窑后，再一件件绘彩，最终完成陶俑的制作。就陶俑的整体而言，制造方法是塑模结合、以塑为主。俑是在兵马俑坑的附近就地烧造的，所用的泥土就是当地的黄土，再加石英砂调和而成的。<br />&emsp;&emsp;依据破碎的陶俑为我们提供的信息可以推测，陶俑的头和手是用模子制成粗胎后再进行细部雕刻的。俑头的制作多用合模法制成，就是将俑头分为大致相等的前后两半，分别用单片模制作，然后将两片单模组合粘接在一起成为头的大型。合模线多数位于耳后，一般比较整齐，没有交错结构的痕迹。与俑头相连接的脖颈都是空心的。俑头制成初胎后，再堆泥贴接耳朵、发髻、发辫、冠帻，并进行面部五官的细部刻划。头部雕饰的重点是五官、胡须和发丝。五官是在模制的基础上再经过精心的雕刻、修饰来完成的，以表现人物不同的性格和心理特征。陶俑胡须和发型也是表现人物特征的重要方面，其刻划手法也变化多样，俑头虽是模塑结合，但经过细部的雕饰后，模制的意味已经淡薄，很难找到两个完全相同的面容。加上制作俑头的模子有许多种不同的脸型，因而使陶俑的形象更加丰富多彩。也有学者根据对残损陶俑做的实地考察提出，“千人千面”的俑头并非用模具制造而成的，而是工匠直接对俑头的捏塑，从而提出俑头的造型并非标准化生产的观点。<br />&emsp;&emsp;陶俑的躯干为纯手塑制作。是先用泥做成粗胎后，再进行服饰衣纹、铠甲、腰带、带钩等细部的刻划。陶俑躯干的粗胎是由下而上逐段叠塑而成的，其工艺过程大致可分为六个步骤：<br />&emsp;&emsp;第一步先制作陶俑站立的足踏板；第二步塑造俑的双脚；第三步接塑双腿及短裤；第四步塑造陶俑的躯干；第五步阴干陶俑躯干的大型后，粘接俑的双臂；第六步插接俑的双手。<br />&emsp;&emsp;上述六个步骤完成俑的大型后，再进一步细致雕饰。陶俑衣服的纹样是在俑躯干的粗胎上覆一层细泥后进行雕饰的；铠甲、腰带、带钩等则是在俑的粗胎上直接雕刻的。陶俑的躯干及四肢经过精心而细致的雕刻后，再把单独制作的俑头安装上，就完成了陶俑的整个造型。
            </p>
            <div align="center" style="padding-top: 30px;">
              <el-carousel style="width: 60%;" :height="bannerHeight1 + 'px'">
                <el-carousel-item v-for="item in imgwrap1" :key="item.url">
                  <el-image
                    style=" height: 100%;"
                    :src="item.url"
                    :preview-src-list="srcList1"
                  ></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>
            <p class="title3">彩绘工艺</p>
            <p class="p_main">
              &emsp;&emsp;兵马俑坑出土的陶俑原来都是彩色的，出土时彩色大部分已经脱落，陶俑身上仅存斑驳残迹，残存颜色较多的个别俑色泽如新。通过对陶俑身上色彩的分析，可以大体了解秦俑各种服装色彩的特点，为研究秦代的服色及军服装备情况提供了宝贵的实物例证。
              <br />&emsp;&emsp;通过对已出土的陶俑身上服饰彩绘颜色的初步统计和分析得知，秦俑的服色种类很多，上衣的颜色有粉绿、朱红、枣红、粉红、粉紫、天蓝、白色、赭石色等，领、袖、襟边等处还镶着彩色边缘。裤子的颜色一般为粉绿色，还有红色、天蓝、粉紫、白色等。总之，秦俑的服色色彩艳丽，但没有统一颜色。在众多的颜色中，粉绿、朱红、粉紫、天蓝四种颜色使用的最多，因此这四种颜色应该是秦俑服饰的主要色彩。化验表明这些颜色均为矿物质。红色由辰砂、铅丹、赭石制成。绿色为孔雀石，蓝色为蓝铜矿，紫色为铅丹与蓝铜矿合成，褐色为褐铁矿，白色为铅白和高岭土，黑色为无定形炭。这些矿物质都是中国传统绘画的主要颜料。秦俑运用了如此丰富的矿物颜料，表明2000多年前中国劳动人民已能大量生产和广泛使用这些颜料。这不仅在彩绘艺术史上，而且在世界科技史上都有着重要意义。<br />&emsp;&emsp;从俑坑出土陶俑的服色看，官吏与一般战士的服色无明显区别，不同兵种之间的服色也没有区别。因此，可以说秦代各兵种都没有专有的服色，而且每一兵种中的众多成员的服色也是多种多样而没有统一的颜色规定。这种情况一直延续到西汉初年。这是因为，虽然旧的制度摧毁了，但新的封建制的服饰等级制度尚未完全确立起来，因而从战国经秦王朝直到西汉初年，在衣服的颜色和质地等方面都表现出了多样性的特点，各等级人们之间在服色和衣服质地上并无严格的等级限制，这一历史时期的特点也反应在了兵马俑身上。<br />&emsp;&emsp;秦俑彩绘技术也有许多独到之处。一般在彩绘之前对陶俑表面先进行处理。由于陶俑是没有釉的素陶，具有较多的毛细孔，表面不能滑润。而彩绘则要求毛细孔不易太多，也不能太少，表面不易太滑，也不能太涩。为了达到这一要求，陶俑在烧造之前表面似用极细的泥均匀涂抹，并加以压光，减少了毛孔，又提高了光洁度，同时在陶俑烧造之后，似进行了化学物理处理。从陶俑陶片断面观察，也证明了陶俑烧造之前表面曾用细泥涂抹，有的部位不只涂抹一次，陶俑表面还涂有一层薄薄的类似以胶质的物质，表面涂胶减少了陶俑两者紧密地粘接起来，使之彩绘不易脱落。彩绘技法则是根据不同部位采取不同的方法。一般陶俑的颜面、手、脚面部分先用一层赭石打底，再绘一层白色，再绘一层粉红色，尽量使色调与人体肤色接近。而袍、短裤、鞋等处的彩绘则是采取平涂一种颜色，只是在衣袖与袖口、甲片与连甲带之间运用不同的色调作对比，更显示出甲衣的质感。有些胡须、眼眉的处理，则是用黑色绘成一道道细细的毛发。<br />&emsp;&emsp;总之，彩绘工序复杂，手法多样，着色讲究，充分显示了彩绘的层次和质感，使雕塑与彩绘达到相得益彰的艺术效果。其中有些彩绘技法为汉代所继承。陶俑、陶马彩绘严格模拟实物，但在色调的掌握上以暖色为主，很少使用冷色。红、蓝、绿等色调的使用，巧妙地表现出秦军威武。
            </p>
            <div align="center" style="padding-top: 30px;margin-bottom: 0px;">
              <el-image :src="img1"></el-image>
            </div>
            <p class="title3">陶马工艺</p>
            <p class="p_main">
              &emsp;&emsp;一、二、三号坑出土的陶马，有战车用的车马和骑兵用的鞍马两种，这些马的制作工艺过程是先把马的头、颈、躯干、四肢及尾、耳等分别制作后拼装粘合成为粗胎，再经过二次覆泥修饰、雕刻成型，阴干后入窑焙烧，最后彩绘，完成陶马的制作。<br /><br />&emsp;&emsp;陶马出土时，马头已从合缝处破裂，合缝面上残存着粘泥的遗迹，证明马头是用模具制成的。马头有宽、窄两种，各自作法不同。窄狭型的马头，合缝线位于马头的正中，左右两片大小相同。每片的内侧都有按压、锤打的凹窝，说明它们是用模具制作的，然后将两片粘接合在一起制成马头。所有的马均张口作嘶鸣状，马口的下颔是单独捏塑，并经舌和牙齿的刻划后，再粘接在马头下部的。宽博型的马头，是由五块泥片拼合粘接而成的，即左、右两侧的面颊各一片，马头的三片均系手塑。将上述五片拼合粘接在一起后，在内侧合缝线上一般都要覆泥进行加固。<br />&emsp;&emsp;马头上的附件如马耳、飞鬃的大小、长短和厚薄都不一样，且上面留有用刀削刮、刻划的痕迹，说明这些附件都是单独捏制后再与马头连接的。陶马的颈部中空，体腔中空，从破裂的合缝看，这些都是由不同形状的泥片拼合而成的，而所有的泥片合缝处，都在内侧覆有一层硬泥，经过锤打使接茬牢固。陶马体腔内部遗留有成片的麻布纹和细绳纹，以及直径约5厘米的圆形锤窝，说明锤打时衬着麻布或麻绳的编织物。<br />&emsp;&emsp;马腿和马尾也是单独用手工制成的。陶马的各个部件分别做好后，即进行拼装组合。其顺序是由腿到体腔，再接上颈、头、尾，从而组成马体的大型。每匹陶马重达245公斤，在拼装组合的过程中需要借助支架的支撑才能防止马体变形。<br />&emsp;&emsp;组合后的陶马还要对其外表进行一些细部修饰。躯干的外部涂一层细泥，经过打磨使表面光滑平整，显得马体肌肉丰满：在马胸部堆贴泥块，雕刻出凸块状胸肌；双肩处覆泥较厚，以显示肩胛的高大宽博；马的立鬃为高浮雕，上面用篦状工具划出细细的鬃毛。<br />&emsp;&emsp;骑兵的鞍马比车马的雕饰略为复杂，在马背上要堆泥雕出高浮雕的鞍桥、浅浮雕的鞍鞯，鞍上的流苏及肚带、锹等细部装饰，这些都是用减地法或贴泥条法雕成的。鞍上一排排鞍钉及细部的纹饰用阴线显示。由于运用了不同的雕刻技法，使鞍鞯造型十分逼真。陶马的四肢经过细致地刻削打磨，圆的地方溜圆有光泽，扁的地方棱角分明，皮肉、骨节的关系都表现得十分清楚。
            </p>
            <div align="center" style="padding-top: 30px;">
              <el-carousel style="width: 60%;" :height="bannerHeight + 'px'">
                <el-carousel-item v-for="item in imgwrap" :key="item.url">
                  <el-image
                    style=" height: 100%;"
                    :src="item.url"
                    :preview-src-list="srcList"
                  ></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div align="center" style="padding-top: 30px;">
              <i
                ref="off"
                class="el-icon-star-off"
                @click="change1"
                style="display: block"
              ></i>
              <i
                ref="on"
                class="el-icon-star-on"
                @click="change2"
                style="display: none"
              ></i>
            </div>
            <div align="center" style="padding-top: 10px;margin-bottom: 30px;">
              <span>{{ collectors }}</span>
            </div>
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      opends: ["4"],
      bannerHeight: 200,
      bannerHeight1: 200,
      collectors: "收藏",
      img1:
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/img1.png",
      imgwrap1: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/img2.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/img3.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片1.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片2.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片3.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片4.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片5.png"
        }
      ],
      srcList1: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/img2.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/img3.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片2.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片3.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片4.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/图片5.png"
      ],
      imgwrap: [
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/horse1.png"
        },
        {
          url:
            "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/horse2.png"
        }
      ],
      srcList: [
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/horse1.png",
        "https://gulimall-nkhyx.oss-cn-beijing.aliyuncs.com/qinhan/bingmayong/horse2.png"
      ]
    };
  },
  mounted() {
    this.setSize();
    window.addEventListener(
      "resize",
      () => {
        this.setSize();
      },
      false
    );
  },
  methods: {
    setSize() {
      this.bannerHeight = document.body.clientWidth / 4;
      this.bannerHeight1 = document.body.clientWidth / 4;
    },
    change1() {
      this.$refs.on.style.display = "block";
      this.$refs.off.style.display = "none";
      this.collectors = "已收藏";
    },
    change2() {
      this.$refs.on.style.display = "none";
      this.$refs.off.style.display = "block";
      this.collectors = "收藏";
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
