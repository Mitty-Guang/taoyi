<template>
  <el-container>
    <el-header>
      <el-menu :default-active="$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#c6ad8b" text-color="#fff" active-text-color="#000" style="justify-content:center" router>
        <!-- <el-menu-item index="1">
          <el-image
            style="width: 10vh; height: 10vh;"
            :src="require('@/assets/images/taoci_white.png')"
          />
        </el-menu-item> -->
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/news">新闻</el-menu-item>
        <el-submenu index="3">
          <template slot="title">介绍</template>
          <el-menu-item index="/history">历史</el-menu-item>
          <el-menu-item index="/classes">分类</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">学习</el-menu-item>
        <el-menu-item index="5">论坛</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu default-active="$router.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#ece4d9" text-color="#333333" active-text-color="#ffd04b" style="height: 100vh" router>
          <el-submenu index="1">
            <template slot="title">
              <span>新石器时代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/history/the_oldest">世界上最古老的陶器</el-menu-item>
              <el-menu-item index="1-2">仰韶文化（彩陶艺术）</el-menu-item>

              <el-menu-item index="1-3">龙山文化（黑陶艺术）</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>商周时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">白陶</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>战国时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">空心砖</el-menu-item>
              <el-menu-item index="3-2">灰陶</el-menu-item>
              <el-menu-item index="3-3">印纹硬陶</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>秦汉时期</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">兵马俑</el-menu-item>
              <el-menu-item index="4-2">彩绘陶</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span>唐代</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">唐三彩</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <span>宋代</span>
            </template>
            <el-menu-item-group>
              <template slot="title">宋代五大名窑</template>
              <el-menu-item index="6-1">汝窑</el-menu-item>
              <el-menu-item index="6-2">官窑</el-menu-item>
              <el-menu-item index="6-3">哥窑</el-menu-item>
              <el-menu-item index="6-4">钧窑</el-menu-item>
              <el-menu-item index="6-5">定窑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <span>元明清</span>
            </template>
            <el-menu-item-group>
              <template slot="title">青花瓷</template>
              <el-menu-item index="7-1">元</el-menu-item>
              <el-submenu index="7-2">
                <template slot="title">明</template>
                <el-menu-item index="7-2-1">明初</el-menu-item>
                <el-menu-item index="7-2-2">永乐、宣德</el-menu-item>
                <el-menu-item index="7-2-3">正统、景泰、天顺</el-menu-item>
                <el-menu-item index="7-2-4">成化、弘治、正德</el-menu-item>
                <el-menu-item index="7-2-5">嘉靖、隆庆、万历</el-menu-item>
                <el-menu-item index="7-2-6">天启</el-menu-item>
              </el-submenu>
              <el-submenu index="7-3">
                <template slot="title">清</template>
                <el-menu-item index="7-3-1">顺治</el-menu-item>
                <el-menu-item index="7-3-2">康熙</el-menu-item>
                <el-menu-item index="7-3-3">雍正、乾隆</el-menu-item>
                <el-menu-item index="7-3-4">嘉庆</el-menu-item>
                <el-menu-item index="7-3-5">光绪</el-menu-item>
                <el-menu-item index="7-3-6">宣统</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="8">现代陶艺</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style>
body {
  margin: 0%;
}

.el-header {
  padding-left: 0%;
  padding-right: 0%;
}

.el-aside {
  width: 25vh !important;
  height: 100vh;
}

.el-main {
  background-color: #e5e7e9;
}

.el-aside .el-sub-menu__title {
  background: #c6ad8b !important;
  color: #333333 !important;
}

.el-aside .el-menu-item:hover {
  background: #e5e7e9 !important;
  color: #c6ad8b !important;
}

.el-aside .el-sub-menu__title:hover {
  background: #e5e7e9 !important;
  color: #c6ad8b !important;
}

.el-aside .el-menu-item.is-active {
  background: #e5e7e9 !important;
  color: #c6ad8b !important;
}

/* .el-aside .el-sub-menu__title.is-active {
  background: #c6ad8b !important;
  color: #ffffff !important;
} */
/* .el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 120px !important;
} */
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
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
