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
                        <a-space :size="30">

                            <!-- 新增AI对话--按钮 -->
                            <div @click="showModal">
                                <icon>
                                    <template #component>
                                        <svg t="1683182076324" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="9725"
                                            data-spm-anchor-id="a313x.7781069.0.i3" width="30" height="30">
                                            <path
                                                d="M623.786667 627.958519l-94.814815-274.204445a25.220741 25.220741 0 0 0-9.481482-12.98963 39.158519 39.158519 0 0 0-40.58074 0 25.220741 25.220741 0 0 0-9.481482 12.98963l-93.677037 273.066667c-4.266667 12.515556-3.508148 21.238519 2.085926 26.453333a31.194074 31.194074 0 0 0 22.376296 7.774815 30.814815 30.814815 0 0 0 21.522963-6.637037 44.847407 44.847407 0 0 0 11.282963-17.445926l20.100741-52.148148h92.065185l21.712593 54.518518a43.045926 43.045926 0 0 0 10.429629 15.54963 28.444444 28.444444 0 0 0 21.048889 6.162963 32.142222 32.142222 0 0 0 22.376297-8.059259c5.688889-5.214815 6.637037-13.463704 3.034074-25.031111zM464.592593 533.617778l35.176296-112.82963 34.891852 112.82963zM718.696296 632.225185a29.677037 29.677037 0 0 1-7.111111 21.997037 30.340741 30.340741 0 0 1-22.85037 7.300741 28.444444 28.444444 0 0 1-22.471111-7.300741 30.814815 30.814815 0 0 1-6.637037-21.428148V364.373333q0-29.013333 29.013333-29.013333A33.564444 33.564444 0 0 1 711.111111 341.333333a27.117037 27.117037 0 0 1 7.774815 22.186667z"
                                                fill="#2c2c2c" p-id="9726" data-spm-anchor-id="a313x.7781069.0.i5" class="">
                                            </path>
                                            <path
                                                d="M555.804444 56.888889a410.074074 410.074074 0 0 0-409.41037 409.41037 35.460741 35.460741 0 0 0 0 4.930371c-28.444444 29.297778-88.746667 96.331852-88.746667 143.454814 0 52.148148 49.303704 72.248889 84.48 73.386667l40.106667 9.007408 7.585185 197.025185a73.765926 73.765926 0 0 0 74.145185 73.007407h150.281482a29.297778 29.297778 0 1 0 0-58.500741H263.964444a14.980741 14.980741 0 0 1-14.885925-14.885926l-9.481482-243.768888-87.04-18.962963-3.034074-0.663704h-3.318519a64.948148 64.948148 0 0 1-19.911111-4.551111c-9.481481-3.792593-9.481481-7.300741-9.481481-10.619259 0-16.971852 37.262222-68.171852 79.549629-109.700741a29.297778 29.297778 0 0 0 7.300741-29.771852 28.444444 28.444444 0 0 0 1.422222-9.007407 350.814815 350.814815 0 0 1 701.62963 0c0 16.308148 29.297778 29.297778 29.297778 29.297777s29.297778-12.98963 29.297778-29.297777A409.979259 409.979259 0 0 0 555.804444 56.888889z"
                                                fill="#2c2c2c" p-id="9727" data-spm-anchor-id="a313x.7781069.0.i0" class="">
                                            </path>
                                            <path
                                                d="M860.728889 291.271111s146.299259 247.751111-81.92 485.451852c0 0-11.282963 50.725926 47.407407 36.124444 0 0 163.555556-134.542222 136.912593-392.438518z"
                                                fill="#2c2c2c" p-id="9728" data-spm-anchor-id="a313x.7781069.0.i4" class="">
                                            </path>
                                        </svg>
                                    </template>
                                </icon>
                            </div>

                            <!-- 新增AI对话--组件 -->
                            <a-modal v-model:visible="modalVisible" width="100%" wrap-class-name="full-modal"
                                :footer="null">
                                <template #title>
                                    <icon>
                                        <template #component>
                                            <svg t="1683182076324" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="9725"
                                                data-spm-anchor-id="a313x.7781069.0.i3" width="25" height="25">
                                                <path
                                                    d="M623.786667 627.958519l-94.814815-274.204445a25.220741 25.220741 0 0 0-9.481482-12.98963 39.158519 39.158519 0 0 0-40.58074 0 25.220741 25.220741 0 0 0-9.481482 12.98963l-93.677037 273.066667c-4.266667 12.515556-3.508148 21.238519 2.085926 26.453333a31.194074 31.194074 0 0 0 22.376296 7.774815 30.814815 30.814815 0 0 0 21.522963-6.637037 44.847407 44.847407 0 0 0 11.282963-17.445926l20.100741-52.148148h92.065185l21.712593 54.518518a43.045926 43.045926 0 0 0 10.429629 15.54963 28.444444 28.444444 0 0 0 21.048889 6.162963 32.142222 32.142222 0 0 0 22.376297-8.059259c5.688889-5.214815 6.637037-13.463704 3.034074-25.031111zM464.592593 533.617778l35.176296-112.82963 34.891852 112.82963zM718.696296 632.225185a29.677037 29.677037 0 0 1-7.111111 21.997037 30.340741 30.340741 0 0 1-22.85037 7.300741 28.444444 28.444444 0 0 1-22.471111-7.300741 30.814815 30.814815 0 0 1-6.637037-21.428148V364.373333q0-29.013333 29.013333-29.013333A33.564444 33.564444 0 0 1 711.111111 341.333333a27.117037 27.117037 0 0 1 7.774815 22.186667z"
                                                    fill="#2c2c2c" p-id="9726" data-spm-anchor-id="a313x.7781069.0.i5"
                                                    class="">
                                                </path>
                                                <path
                                                    d="M555.804444 56.888889a410.074074 410.074074 0 0 0-409.41037 409.41037 35.460741 35.460741 0 0 0 0 4.930371c-28.444444 29.297778-88.746667 96.331852-88.746667 143.454814 0 52.148148 49.303704 72.248889 84.48 73.386667l40.106667 9.007408 7.585185 197.025185a73.765926 73.765926 0 0 0 74.145185 73.007407h150.281482a29.297778 29.297778 0 1 0 0-58.500741H263.964444a14.980741 14.980741 0 0 1-14.885925-14.885926l-9.481482-243.768888-87.04-18.962963-3.034074-0.663704h-3.318519a64.948148 64.948148 0 0 1-19.911111-4.551111c-9.481481-3.792593-9.481481-7.300741-9.481481-10.619259 0-16.971852 37.262222-68.171852 79.549629-109.700741a29.297778 29.297778 0 0 0 7.300741-29.771852 28.444444 28.444444 0 0 0 1.422222-9.007407 350.814815 350.814815 0 0 1 701.62963 0c0 16.308148 29.297778 29.297778 29.297778 29.297777s29.297778-12.98963 29.297778-29.297777A409.979259 409.979259 0 0 0 555.804444 56.888889z"
                                                    fill="#2c2c2c" p-id="9727" data-spm-anchor-id="a313x.7781069.0.i0"
                                                    class="">
                                                </path>
                                                <path
                                                    d="M860.728889 291.271111s146.299259 247.751111-81.92 485.451852c0 0-11.282963 50.725926 47.407407 36.124444 0 0 163.555556-134.542222 136.912593-392.438518z"
                                                    fill="#2c2c2c" p-id="9728" data-spm-anchor-id="a313x.7781069.0.i4"
                                                    class="">
                                                </path>
                                            </svg>
                                        </template>
                                    </icon>
                                    <span> 在线AI对话</span>
                                </template>
                                <div class="list-container">
                                    <AIModal></AIModal>
                                </div>

                            </a-modal>

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


                            <!-- 新增右侧模态框--组件 -->
                            <a-drawer v-model:visible="visible" :closable="false" class="custom-class" style="color: red"
                                title="来首歌放松一下吧！" placement="right" @after-visible-change="afterVisibleChange">
                                <MusicDrawer></MusicDrawer>
                            </a-drawer>


                            <!-- 右侧登录按钮 -->
                            <div v-if="loggedIn && !blogAdminUser">{{ user.nickname }}</div>
                            <div v-if="loggedIn && blogAdminUser"><a :href="backstageURL" target="_blank">{{ user.nickname
                            }}</a></div>
                            <a-button type="primary" @click="loginClick" v-if="!loggedIn">登录<login-outlined /></a-button>
                            <a-button type="primary" @click="logout" v-if="loggedIn">退出<logout-outlined /></a-button>
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
import AIModal from "../components/AIModal.vue"


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




// 侧边音乐框逻辑
const visible = ref(false);
const afterVisibleChange = (bool) => {
    // console.log('visible', bool);
};
const showDrawer = () => {
    visible.value = true;
};

// 全屏模态框逻辑
const modalVisible = ref(false);
const showModal = () => {
    modalVisible.value = true
}

</script>

<style scoped>
.list-container {
    max-height: 70vh;
    overflow: auto;
}
</style>