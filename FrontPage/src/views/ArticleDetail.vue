<template>
    <!-- <article-item :title="article.title" :link="`/article/${article.id}`" :desc="article.content">
        <template #author>{{ article.author }}</template>
        <template #category>{{ article.category }}</template>
        <template #pubdate>{{ article.pub_date }}</template>
    </article-item> -->

    <!-- 文章详情页 -->
    <article-item-details :title="article.title" :link="`/article/${article.id}`" :desc="computedContent">
        <template #author>{{ article.author }}</template>
        <template #category>{{ article.category }}</template>
        <template #pubdate>{{ article.pub_date }}</template>
    </article-item-details>

    <!-- 评论组件 -->
    <ArticleComments></ArticleComments>
</template>

<script setup>
import { reactive, watch, computed } from "vue"
import { getArticleDetail } from "../api";
import { useRoute } from "vue-router";
import ArticleComments from "../components/ArticleComments.vue"
import ArticleItemDetails from "../components/ArticleItemDetails.vue"
// import MarkdownIt from "markdown-it"
import { md } from "../utils/markdownUtils";



const article = reactive({
    add_date: "",
    author: "",
    category: "",
    content: "",
    description: "",
    id: null,
    keywords: "",
    pub_date: "",
    tags: null,
    title: "",
})
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

// 计算属性返回md转html
// const computedContent = computed(() => {
//     const md = new MarkdownIt();
//     console.log(article);
//     console.log(article.content);
//     console.log(typeof article.content);
//     const result = md.render(article.content)
//     return result
// })

const computedContent = computed(() => {
    return md.render(article.content)
})
</script>

<style lang="scss"  scoped></style>