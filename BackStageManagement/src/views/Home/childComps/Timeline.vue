<template>
  <span class="title">程序开发日志</span>
  <el-timeline>
    <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp"
      :color="activity.color">
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
const activities = [
  {
    content:
      "整体业务逻辑已经完善，修复了原有代码中存在的 bug，并进一步美化界面的设计和交互。",
    timestamp: "2023-4-15",
    color: "#eebe77",
  },
  {
    content:
      "基于最新的 Vue3.2 技术及 Vue 全家桶，开发了功能强大且美观易用的后台管理员界面。",
    timestamp: "2023-4-10",
  },
  {
    content:
      " 采用 Vue3.2 的最新技术及 Vue 全家桶，打造了优秀的前端界面，既具有良好的用户体验，也具有较高的性能和可维护性。",
    timestamp: "2023-4-05",
  },
  {
    content:
      "基于 Node.js 框架，开发了强大稳定的后端 API 接口，在确保数据安全的前提下，实现了多样化的业务需求，并在经过充分测试后保证了接口的有效性。",
    timestamp: "2023-3-30",
  },
  {
    content:
      "在确定了前后端分离的开发模式后，我为各段业务需求挑选了最适合的技术方案，并在与辅导老师充分讨论交流的基础上进行整体框架的构思。",
    timestamp: "2023-3-25",
  },
  {
    content:
      "进行了充分的程序选题工作，并成功立项。同时，还撰写了详尽的开题报告，全面阐述了本次项目的目标、定位、实现方案等重要内容。",
    timestamp: "2023-3-20",
  },
];
</script>

<style></style>