<template>
    <article-item v-for="(item, index) in articleDatas" :key="index" :title="item.title" :desc="item.description"
        :link="`/article/${item.id}`">
        <template #author>{{ item.author }}</template>
        <template #category>{{ item.category }}</template>
        <template #pubdate>{{ item.pub_date }}</template>
    </article-item>
</template>

<script setup>
import { ref, watch } from "vue"
import { getHomeArticle } from "../api";
import { useRoute } from "vue-router";
import { message } from 'ant-design-vue';


const route = useRoute()
const articleDatas = ref([])

watch(
    () => route.query,
    (newQuery, oldQuery) => {
        getHomeArticle(route.query).then(res => {
            if (res.data.length && res.status == 200 && route.query.search) {
                res.data.forEach(element => {
                    element.pub_date = element.pub_date.substring(0, 10)
                });
                articleDatas.value = res.data
            } else {
                if (newQuery?.search == undefined) {
                    return
                }else{
                    message.info("没有查询到任何一篇文章!", 1.5)
                }
            }
        })
    },
    {
        // 当watch对象被创建时就触发回调
        immediate: true
    }
)

</script>

<style scoped></style>