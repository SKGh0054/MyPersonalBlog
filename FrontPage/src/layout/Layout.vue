<template>
    <div id="main">
        <!-- 头部 -->
        <header class="header">
            <nav-bar></nav-bar>
        </header>


        <!-- 背景 -->
        <div class="background">
            <div class="bgcontainer">
                天下未有不散之筵席, 人生何处无离别之时, 但愿你我不畏风雨, 思虑专注, 志存高远。
            </div>
        </div>


        <!-- 中间 -->
        <div class="container">
            <a-row :gutter="[16, 16]">
                <a-col :span="18">
                    <!-- 轮播 -->
                    <a-carousel arrows>
                        <template #prevArrow>
                            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                                <left-circle-outlined />
                            </div>
                        </template>
                        <template #nextArrow>
                            <div class="custom-slick-arrow" style="right: 10px">
                                <right-circle-outlined />
                            </div>
                        </template>
                        <div>
                            <img src="../assets/carousel/1.jpg" alt="">
                        </div>
                        <div>
                            <img src="../assets/carousel/2.jpg" alt="">
                        </div>
                        <div>
                            <img src="../assets/carousel/3.jpg" alt="">
                        </div>
                        <div>
                            <img src="../assets/carousel/4.jpg" alt="">
                        </div>
                    </a-carousel>

                    <!-- 文章列表 -->
                    <RouterView></RouterView>

                </a-col>
                <a-col :span="6">
                    <aside-box type="search" @some-search="search1CallBack" v-model:searchValue="search1Value"></aside-box>
                    <aside-box name="最新文章" type="news" :newsData="newsDataComp"></aside-box>
                    <aside-box name="标签" type="tag" :tagsData="tagsData"></aside-box>
                    <aside-box name="归档" type="archive" :archiveData="archiveData"></aside-box>
                </a-col>
            </a-row>
        </div>


        <!-- 底部 -->
        <footer class="footer ">
            <a-layout-footer style="text-align: center;" class="foot">
                © 2023 阿杰的个人博客
            </a-layout-footer>
        </footer>
    </div>
</template>
  
<script setup>
import { reactive, ref, watch, computed } from "vue"
import { RouterView, useRoute } from 'vue-router'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';  // 单独引入图标
import NavBar from "./NavBar.vue";
import router from "../router/index.js"
import { getTagList, getHomeArticle } from "../api";




const tagsData = reactive([])  // 标签后端数据
const archiveData = reactive([])  // 归档后端数据
const newsData = reactive([])  // 标题后端数据
const search1Value = ref("")  // 搜索框内容


// 处理title名称过长
const newsDataComp = computed(() => {
    let itemsNewsData = []
    newsData.forEach(item => {
        if (item.length > 32) {
            item = item.substring(0, 32)
        }
        itemsNewsData.push(item)
    })
    return itemsNewsData
})


// 根据query值进行搜索
const route = useRoute()
function search1CallBack() {
    router.push({ name: "search", query: { search: search1Value.value || "" } })

}

// 监听路由,在search请求为空时跳转回home页
watch(
    () => route.query.search,
    (newSearch, oldSearch) => {
        if (route.query.search == "") {
            router.push("/home")
        }
    },
    {
        // 当watch对象被创建时就触发回调
        immediate: true
    }
)

// 调用标签接口获取数据
getTagList().then(res => {
    if (res.status == 200) {
        res.data.forEach(element => {
            tagsData.push(element)
        })
    }
})

// 调用文章接口获取文章与归档数据
getHomeArticle().then(res => {
    if (res.status == 200) {
        res.data.forEach(element => {
            if (!archiveData.includes(element.pub_date.substring(0, 7))) {  // 归档去重
                archiveData.push(element.pub_date.substring(0, 7))
            }
            newsData.push(element.title)
        })
    }
})




</script>
  
<style lang="scss">
@import "bulma/sass/base/minireset.sass"; // 全局重置样式
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
</style>

<style scoped>
/* 轮播图样式 */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}

.foot {
    margin-top: 20px;
    background: linear-gradient(to top, #bbb, #fff);
}


.background {
    width: 100%;
    height: 65vh;
    background: url(".././assets/background/background.svg") no-repeat center;
    overflow: hidden;
}

.bgcontainer {
    position: relative;
    margin: 35vh auto;
    width: 55%;
    font-size: 25px;
    font-family: "Times New Roman", Times, serif;
    line-height: 30px;
}

.header {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
}
</style>