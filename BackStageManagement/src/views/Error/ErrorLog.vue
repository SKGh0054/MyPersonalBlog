<template>
  <div class="card">
    <el-button @click="showErr">点击模拟一个错误</el-button>
    <el-button @click="showErr2">点击模拟另一个错误</el-button>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'

const showErr = () => {
  ElNotification({
    title: '错误模拟',
    message: h('i', { style: 'color: teal' }, '在做了, 在做了!'),
  })
}
const showErr2 = () => {
  ElNotification({
    title: '错误模拟',
    message: h('i', { style: 'color: teal' }, '咋还不信了, 真的在做了!'),
  })
}



</script>

<style></style>