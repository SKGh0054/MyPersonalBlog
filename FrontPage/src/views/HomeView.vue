<template>
    <article-item v-for="(item, index) in articleDatas" :key="index" :title="item.title" :desc="item.description"
        :link="`/article/${item.id}`">
        <template #author>{{ item.author }}</template>
        <template #category>{{ item.category }}</template>
        <template #pubdate>{{ item.pub_date }}</template>
    </article-item>
</template>

<script setup>
import { reactive } from "vue"
import { getHomeArticle } from "../api";

const articleDatas = reactive([])

getHomeArticle().then(res => {
    if (res.status == 200) {
        res.data.forEach(element => {
            element.pub_date = element.pub_date.substring(0, 10)  // 时间处理
            articleDatas.push(element)
        })
    }
})

</script>

<style scoped></style>