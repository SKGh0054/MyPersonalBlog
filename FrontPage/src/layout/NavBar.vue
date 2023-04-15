<template>
    <nav class="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
        <!-- container剧中 -->
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" target="_blank" href="https://github.com/SKGh0054">
                    <img src="../assets/dog.svg" width="40" height="28">
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link :to="{ name: 'home' }" class="navbar-item">
                        主页
                    </router-link>
                    <template v-for="item in categoryDatas">
                        <!-- 有子类的分类 -->
                        <div class="navbar-item has-dropdown is-hoverable" v-if="item.children.length > 0">
                            <router-link :to="{ name: 'category', params: { id: item.id } }" class="navbar-link">
                                {{ item.name }}
                            </router-link>

                            <div class="navbar-dropdown">
                                <router-link :to="{ name: 'category', params: { id: subItem.id } }" class="navbar-item"
                                    v-for="subItem in item.children" :key="item.children.id">
                                    {{ subItem.name }}
                                </router-link>
                            </div>
                        </div>
                    </template>


                    <!-- 无子类的分类 -->
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            更多文章分类
                        </a>
                        <div class="navbar-dropdown">
                            <template v-for="item in categoryDatas">
                                <router-link :to="{ name: 'category', params: { id: item.id } }" class="navbar-item"
                                    :key="item.id" v-if="item.children.length == 0">
                                    {{ item.name }}
                                </router-link>
                            </template>
                        </div>
                    </div>

                    <!-- 分类 -->
                    <!-- <div v-for="item in categoryDatas">
                        <router-link :to="{ name: 'category', params: { id: item.id } }" class="navbar-item" :key="item.id"
                            v-if="item.children.length == 0">
                            {{ item.name }}
                        </router-link>

                        <div class="navbar-item has-dropdown is-hoverable" v-if="item.children.length > 0">
                            <router-link :to="{ name: 'category', params: { id: item.id } }" class="navbar-link">
                                {{ item.name }}
                            </router-link>

                            <div class="navbar-dropdown">
                                <router-link :to="{ name: 'category', params: { id: subItem.id } }" class="navbar-item"
                                    v-for="subItem in item.children" :key="item.children.id">
                                    {{ subItem.name }}
                                </router-link>
                            </div>
                        </div>
                    </div> -->
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <a-space>
                            <div v-if="loggedIn && !blogAdminUser">{{ user.nickname }}</div>
                            <div v-if="loggedIn && blogAdminUser"><a :href="backstageURL" target="_blank">{{ user.nickname
                            }}</a></div>
                            <a-button type="primary" @click="loginClick" v-if="!loggedIn">登录
                                <login-outlined /></a-button>
                            <a-button type="primary" @click="logout" v-if="loggedIn">退出 <logout-outlined /></a-button>
                        </a-space>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useCategoryStore } from "../stores/category"
import { RouterLink } from "vue-router";
import router from "../router/index.js"
import { useUserHook } from "../composables/useUserHook.js"
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons-vue';  // 单独引入图标
import { StorageSerializers, useStorage } from "@vueuse/core"


const blogAdminUser = useStorage("blogAdminUser", null, undefined, {
    serializer: StorageSerializers.object  // 存储与取出数据以对象的形式操作数据
})

const backstageURL = import.meta.env.VITE_APP_API_BACKSTAGE

const { loggedIn, user, logout } = useUserHook()
// 使用store
const store = useCategoryStore()

// 使用计算属性拿到数据
const categoryDatas = store.compCategoryDatas

// 如果本地没有数据就请求服务器
if (!categoryDatas.length) {
    store.apiCategory()
}

function loginClick() {
    router.push("/login")
}

</script>

<style scoped></style>