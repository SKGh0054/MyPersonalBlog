<template>
    <a-typography class="box">
        <a-typography-title :level="3">
            <router-link :to="props.link">
                {{ props.title }}
            </router-link>
        </a-typography-title>
        <a-space size="large">
            <a-space>
                <user-outlined></user-outlined>
                <span>
                    作者：<slot name="author">{{ props.author }}</slot>
                </span>
            </a-space>
            <a-space>
                <folder-outlined></folder-outlined>
                <span>
                    分类：<slot name="category">{{ props.category }}</slot>
                </span>
            </a-space>
            <a-space>
                <clock-circle-outlined></clock-circle-outlined>
                <span>
                    发布时间：<slot name="pubdate">{{ props.pubdate }}</slot>
                </span>
            </a-space>
        </a-space>
        <a-typography-paragraph type="secondary">
            {{ props.desc }}
        </a-typography-paragraph>
    </a-typography>
</template>

<script setup>
import { UserOutlined, FolderOutlined, ClockCircleOutlined } from '@ant-design/icons-vue';
import { RouterLink } from 'vue-router';

// 父组件数据
const props = defineProps({
    title: {
        type: String,
        default: "错误！无法获取标题数据",
    },
    link: {
        type: String,
        default: "/",
    },
    author: {
        type: String,
        default: "错误！无法获取作者数据"
    },
    category: {
        type: String,
        default: "错误！无法获取分类数据"
    },
    pubdate: {
        type: String,
        default: "错误！无法获取日期数据"
    },
    desc: {
        type: String,
        default:
            `
            错误！无法获取文章具体内容！！！
            错误！无法获取文章具体内容！！！
            错误！无法获取文章具体内容！！！
            错误！无法获取文章具体内容！！！
            错误！无法获取文章具体内容！！！
            `
    }
})

</script>

<style scoped></style>