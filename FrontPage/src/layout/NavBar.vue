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

                    <!-- 原一级分类 -->
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

                            <!-- 新增右侧模态框--按钮 -->
                            <div @click="showDrawer">
                                <icon>
                                    <template #component>
                                        <svg t="1683031882745" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="4498" width="40" height="40">
                                            <path
                                                d="M773.9392 301.8752m-200.0384 0a200.0384 200.0384 0 1 0 400.0768 0 200.0384 200.0384 0 1 0-400.0768 0Z"
                                                fill="#dbdbdb" p-id="4499" data-spm-anchor-id="a313x.7781069.0.i6" class="">
                                            </path>
                                            <path
                                                d="M924.4672 706.2528a24.32 24.32 0 0 1-24.2688 24.2688h-145.7664a24.3712 24.3712 0 0 0-24.2688 24.32 24.2688 24.2688 0 0 0 24.2688 24.2688h48.5888a24.32 24.32 0 0 1 24.2688 24.32 24.32 24.32 0 0 1-24.2688 24.2688h-64.512A388.7616 388.7616 0 0 1 122.88 390.4512h-48.5888a24.32 24.32 0 0 1 0-48.5888h97.28a24.2688 24.2688 0 0 0 6.8096-47.5648l0.768-0.9728H122.88a24.32 24.32 0 1 1 0-48.5888h101.632a388.7616 388.7616 0 0 1 619.52 437.248h56.32a24.32 24.32 0 0 1 24.1152 24.2688z"
                                                fill="#f43349" p-id="4500" data-spm-anchor-id="a313x.7781069.0.i5" class="">
                                            </path>
                                            <path
                                                d="M565.8112 478.8736a3.84 3.84 0 0 0-4.5568 4.608c3.1744 14.7456 7.8848 40.96 9.984 60.0576 3.6352 32.2048-28.5696 62.3104-53.6064 70.7584-39.424 13.568-84.8896-18.688-95.1296-56.32-11.776-43.9808 12.6464-97.5872 53.2992-115.0464 4.5056-2.0992 9.0112-3.8912 13.568-5.9904 9.3184-4.2496 4.8128-11.1616 3.2768-17.5104-4.1984-17.4592-6.6048-34.9184 2.4064-51.2 13.568-24.4224 48.7936-43.6736 76.1856-31.9488a276.48 276.48 0 0 1 34.6624 16.5888 25.1904 25.1904 0 0 1 10.5472 28.2624c-5.7344 15.36-20.7872 18.9952-36.7616 9.6768a196.1984 196.1984 0 0 0-17.4592-9.9328 16.2304 16.2304 0 0 0-23.808 15.36 150.3744 150.3744 0 0 0 1.9456 18.0224 18.4832 18.4832 0 0 0 13.568 14.8992 200.3456 200.3456 0 0 1 29.3888 8.9088c38.8096 17.152 66.56 45.1584 79.5136 87.04 24.064 77.6704-21.0944 155.0848-87.9616 184.6272a182.016 182.016 0 0 1-116.8384 13.2096 185.6 185.6 0 0 1-126.464-104.8064c-18.0736-40.96-22.8864-82.7904-8.7552-127.0784 18.9952-59.2384 56.9344-99.6352 114.7392-121.9072a23.4496 23.4496 0 0 1 28.0064 9.728 21.1456 21.1456 0 0 1-6.0416 29.5424 259.8912 259.8912 0 0 1-25.2928 13.568c-31.8976 16.2304-51.7632 42.752-64.4096 75.8784-24.7296 64.4096 9.3184 139.1104 65.6384 168.3456 51.7632 27.0848 122.5728 16.2304 160.8192-28.3136A106.2912 106.2912 0 0 0 619.52 542.72c-5.12-25.6-34.5088-59.2896-53.7088-63.8464z m-53.4016 5.9904a6.144 6.144 0 0 0-7.9872-4.5056c-33.28 11.4688-47.5136 47.2576-31.9488 76.4416a28.0064 28.0064 0 0 0 30.1056 13.824c14.1824-4.1984 24.1152-14.4384 22.016-27.6992-2.9696-19.5072-7.936-38.8096-12.1856-58.0608z"
                                                fill="#FFFFFF" p-id="4501"></path>
                                        </svg>
                                    </template>
                                </icon>
                            </div>


                            <!-- 新增右侧模态框--组件--暂未封装 -->
                            <a-drawer v-model:visible="visible" :closable="false" class="custom-class" style="color: red"
                                title="来首歌放松一下吧！" placement="right" @after-visible-change="afterVisibleChange">
                                <MusicDrawer></MusicDrawer>
                            </a-drawer>



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
import { ref } from "vue"
import { useCategoryStore } from "../stores/category"
import { RouterLink } from "vue-router";
import router from "../router/index.js"
import { useUserHook } from "../composables/useUserHook.js"
import Icon, { LoginOutlined, LogoutOutlined } from '@ant-design/icons-vue';  // 单独引入图标
import { StorageSerializers, useStorage } from "@vueuse/core"
import MusicDrawer from "../components/MusicDrawer.vue";


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




// 模态框逻辑
const visible = ref(false);
const afterVisibleChange = (bool) => {
    // console.log('visible', bool);
};
const showDrawer = () => {
    visible.value = true;
};



</script>

<style scoped></style>