<template>
    <article-item :title="article.title" :link="`/article/${article.id}`" :desc="article.content">
        <template #author>{{ article.author }}</template>
        <template #category>{{ article.category }}</template>
        <template #pubdate>{{ article.pub_date }}</template>
    </article-item>
</template>

<script setup>
import { reactive, watch } from "vue"
import { getArticleDetail } from "../api";
import { useRoute } from "vue-router";

const article = reactive({})
const route = useRoute()

watch(
    () => route.params,
    (newParams, oldParams) => {
        if (newParams.id) {
            getArticleDetail(newParams.id).then(res => {
                if (res.status == 200 && res.data.pub_date) {
                    res.data.pub_date = res.data.pub_date.substring(0, 10);
                    Object.assign(article, res.data)  // 合并对象
                }
            })
        }
    },
    {
        // 当watch对象被创建时就触发回调
        immediate: true
    }
)
</script>

<style scoped></style>