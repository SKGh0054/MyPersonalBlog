<template>
    <aside class="box side-title">
        <h1>{{ props.name }}</h1>
        <!-- 搜索box -->
        <div v-if="props.type == 'search'">
            <a-input-search v-model:value="searchValue" @change="$event => $emit('update:searchValue', $event.target.value)"
                @search="$event => $emit('someSearch')" placeholder="输入内容进行查询" />
        </div>

        <!-- 新闻box -->
        <div class="news" v-if="props.type == 'news' && props.newsData.length > 0">
            <ul>
                <li v-for="(item, index) in props.newsData" :key="index">
                    <router-link :to="{ name: 'search', query: { search: item } }">{{ item }}</router-link>
                </li>
            </ul>
        </div>

        <!-- 标签box -->
        <div v-if="props.type == 'tag' && props.tagsData.length > 0">
            <a-tag v-for="(item, index) in props.tagsData" :key="index" color="#666666">
                <router-link :to="{ name: 'search', query: { search: item.name } }">{{ item.name }}</router-link>
            </a-tag>
        </div>

        <!-- 文章归档box -->
        <div class="archive" v-if="props.type == 'archive' && props.archiveData.length > 0">
            <ul class="pl-2 pr-2">
                <li v-for="(item, index) in props.archiveData" :key="index">
                    <router-link :to="{ name: 'search', query: { search: item } }">{{ item }}</router-link>
                </li>
            </ul>
        </div>

        <!-- 插槽box -->
        <slot name="box" v-if="props.type == 'box'"></slot>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from "vue-router";

const props = defineProps({
    name: {
        type: String,
        default: "搜索"
    },
    type: {
        type: String,
        default: "search",
        validator(value) {
            return ['search', 'news', 'tag', 'archive', 'box'].includes(value)
        },
    },
    newsData: {
        type: Array,
        default: []
    },
    tagsData: {
        type: Array,
        default: []
    },
    archiveData: {
        type: Array,
        default: []
    },
})

let searchValue = ref("")
defineEmits(["update:searchValue", "someSearch"])

</script>

<style scoped>
.side-title h1 {
    font-size: 20px;
    font-weight: bold;
    border-bottom: solid 1px #eee;
    padding-bottom: .3em;
    margin-bottom: .3em;
    word-break: break-all;
}

.news li,
.archive li {
    line-height: 2.5em;
    border-bottom: dashed 1px #eee;
}
</style>