<!-- 右侧顶部栏 -->
<template>
  <div class="header">
    <h3 class="title">阿杰博客的后台管理系统</h3>
    <div class="right-area">
      <screen-full />
      <error-badge />
      <div class="person-info">
        <el-badge is-dot class="item">
          <el-button class="message-button" type="primary">
            <iconpark-icon name="message"></iconpark-icon>
          </el-button>
        </el-badge>
        <el-dropdown trigger="click" @command="handleCommand">
          <div class="drop-link">
            <span>{{ username }}</span>
            <iconpark-icon name="down"></iconpark-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="exit" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ScreenFull from "./ScreenFull.vue";
import ErrorBadge from "./ErrorBadge.vue";
import { StorageSerializers, useStorage } from "@vueuse/core"

const blogAdminUser = useStorage("blogAdminUser", null, undefined, {
    serializer: StorageSerializers.object  // 存储与取出数据以对象的形式操作数据
})

const username = blogAdminUser.value.username || "";


const router = useRouter();
const handleCommand = (command) => {
  if (command == "exit") router.push("/");
};


</script>

<style lang="scss">
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: $base-font-color;

  iconpark-icon {
    cursor: pointer;
  }

  .title {
    margin: 0 300px 0 10px;
  }

  .right-area {
    display: flex;
    align-items: center;
    margin-right: 20px;

    .person-info {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 20px;
      }
    }
  }
}
.message-button{
  margin-left: 20px;
}
.drop-link{
  margin-left: 20px;
}
</style>
