<template>
    <div>
        <!-- 评论列表 -->
        <a-list item-layout="horizontal" :data-source="comments" v-if="comments.length > 0">
            <template #renderItem="{ item }">
                <!-- 列表项 -->
                <a-list-item>
                    <!-- 具体评论 -->
                    <a-comment :author="item.nickname">
                        <!-- 头像 -->
                        <template #avatar>
                            <a-avatar style="background-color: rgb(102,102,102)">{{ item.nickname }}</a-avatar>
                        </template>
                        <!-- 内容 -->
                        <template #content>
                            <p>
                                {{ item.content }}
                            </p>
                        </template>
                        <!-- 时间 -->
                        <template #datetime>
                            <a-tooltip :title="dayjs(item.pub_date).toString()">
                                <span>{{ dayjs(item.pub_date).format('YYYY-MM-DD HH:mm:ss') }}</span>
                            </a-tooltip>
                        </template>
                        <!-- 删除 -- 管理员权限 -->
                        <template #actions v-if="blogAdminUser">
                            <span @click="deleteClick(item)">delete</span>
                        </template>
                    </a-comment>
                </a-list-item>
            </template>
        </a-list>

        <!-- 编辑回复框 -->
        <a-comment>
            <template #avatar>
                <a-avatar style="background-color: #87d068" v-if="user">{{ user.nickname }}</a-avatar>
                <a-avatar style="background-color: rgb(102,102,102)" v-if="!user">未登录</a-avatar>
            </template>
            <template #content>
                <a-form-item>
                    <a-textarea v-model:value="commentsValue.content" :rows="6" />
                </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" type="primary" @click="handleSubmit">
                        添加评论
                    </a-button>
                </a-form-item>
            </template>
        </a-comment>

    </div>
</template>

<script setup>
import { watch, ref, reactive } from 'vue';
import { useRoute } from "vue-router";
import { getArticlecomments, verifyToken, addArticlecomments, deleteArticlecomments } from "../api/index.js"
import dayjs from 'dayjs';
import { useUserHook } from "../composables/useUserHook.js"
import { message } from "ant-design-vue";


const { user, blogAdminUser } = useUserHook()
console.log(blogAdminUser);
const route = useRoute()
const comments = ref([])
const commentsValue = reactive({
    article_id: "",
    nickname: "",
    content: "",
    pub_date: ""
})

const handleSubmit = () => {
    commentsValue.pub_date = dayjs().toISOString()

    if (commentsValue.content == "" || commentsValue.content == null) {
        message.warn("请填写评论！");
    } else {
        if (!user.value) {  // 没有登录的情况
            // 提示先登录
            message.warn("您需要先登录才能进行评论！");
        } else {  // 登录后判断是否token过期--过期重新登录--没过期就提交表单刷新页面
            verifyToken(user.value.token).then(res => {
                if (res.data == true) {
                    commentsValue.nickname = user.value.nickname
                    // 添加评论 刷新组件
                    addArticlecomments(commentsValue.article_id, commentsValue.nickname, commentsValue.content, commentsValue.pub_date).then(res => {
                        if (res.status == 200) {
                            message.success("成功添加评论！")

                            // 重新获取数据
                            getArticlecomments(commentsValue.article_id).then(res => {
                                comments.value = res.data
                            })
                            // 清空表单
                            commentsValue.content = ""

                        } else {
                            message.error("添加评论失败！")
                        }
                    })
                } else {
                    message.warn("您的登录信息已过期，请重新登录!");
                }
            })

        }
    }

}


watch(
    () => route.params,
    (newParams, oldParams) => {
        if (route.name == "article") {
            // 获取到当前文章的id 即 newParams.id
            getArticlecomments(newParams.id).then(res => {
                comments.value = res.data
                commentsValue.article_id = newParams.id
            })

        }
    },
    {
        // 当watch对象被创建时就触发回调
        immediate: true
    }
)

const deleteClick = (item) => {
    // 获取评论id 即 item.id
    deleteArticlecomments(item.id).then(res => {
        if (res.status == 200) {
            message.success("删除评论成功！")
        } else {
            message.error("删除评论失败！")
        }
        // 重新获取数据
        getArticlecomments(commentsValue.article_id).then(res => {
            comments.value = res.data
        })
    })
}


</script>

<style scoped></style>