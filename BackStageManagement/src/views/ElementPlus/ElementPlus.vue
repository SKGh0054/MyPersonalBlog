<template>
  <div class="element-container">
    <el-button
      class="documentation"
      type="primary"
      @click="dialogVisible = true"
    >
      element全部文档点这里
    </el-button>
    <el-dialog v-model="dialogVisible" width="95%" title="element-plus">
      <iframe
        src="https://element-plus.gitee.io/zh-CN/component/button.html"
        class="element-iframe"
      ></iframe>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const dialogVisible = ref(false);

</script>

<style lang="scss" scoped>
.el-button {
  margin: 20px;
  &.documentation {
    margin: 20px 0;
    background-color: red;
  }
}
:deep(.el-dialog) {
  position: fixed;
  left: 30px;
  top: 20px;
  bottom: 20px;
  margin: 0;
  .el-dialog__header {
    margin: 0;
    height: 60px;
    border-bottom: 2px solid $app-bgc;
  }
  .el-dialog__body {
    height: calc(100% - 60px);
    .element-iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
