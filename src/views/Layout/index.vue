<template>
  <div id="layout">
    <el-container>
      <el-aside>
        <el-scrollbar class="base">
          <LeftMenu></LeftMenu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <top-bar></top-bar>
        </el-header>
        <el-main>
          <el-scrollbar class="base">
            <TagsView></TagsView>
            <keep-alive>
              <transition>
                <router-view v-if="$route.meta.keepAlive"/>
              </transition>
            </keep-alive>
            <transition>
              <router-view v-if="!$route.meta.keepAlive"/>
            </transition>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from "@/views/Layout/LeftMenu";
import TagsView from "@/views/Layout/TagsView";
import TopBar from "@/views/Layout/TopBar";
export default {
  name: "layout",
  components: { LeftMenu, TagsView,TopBar },
  data() {
    return {};
  },
  // components: { LeftMenu },
  methods: {
    /*组件内部的方法*/
    
  },
  mounted() {},
  updated() {
    /*数据更新完成*/
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #f4f7fa;
}
#layout {
  height: 100%;
  width: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      width: auto !important;
      height: 100%;
      background: #545c64;
    }
    .el-header {
      background: #409eff;
      color: #fff;
      line-height: 60px;
    }
    .el-main {
      padding: 0;
      height: 100%;
      
    }
    .nav-menu {
      font-size: 20px;
    }
  }
}
</style>
