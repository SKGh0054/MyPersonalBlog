

<template>
  <template v-if="$route.path == '/'"><router-view /></template>
  <template v-else>
    <div class="container">
      <!-- 左侧边栏 -->
      <my-aside class="left-aside" />
      
      <!-- 右主体部分 -->
      <el-scrollbar height="100vh" class="center-area">
        <!-- 右侧头部栏 -->
        <my-header class="top-header" />
        <!-- 路由标签 -->
        <tags />
        <!-- 路由显示部分 -->
        <router-view class="router-view" />
      </el-scrollbar>
    </div>
  </template>
</template>

<script setup>
// vite需要加上vue后缀
import myHeader from "components/Header.vue";
import myAside from "components/Aside.vue";
import Tags from "components/Tags.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background-color: $container-bgc;
  .left-aside,
  .top-header {
    background-color: #fff;
  }
  .center-area {
    flex: 1;
    padding: 20px;
    background-color: $container-bgc;
    .router-view {
      margin-bottom: 50px;
    }
  }
}
</style>
