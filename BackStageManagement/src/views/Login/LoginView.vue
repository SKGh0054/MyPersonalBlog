<template>
    <div class="loginview">
        <img src="../../assets/images/LoginImg/wave.png" class="wave">
        <div class="container">
            <div class="img">
                <img src="../../assets/images/LoginImg/bg.svg" alt="">
            </div>
            <div class="login-content">
                <form action="index.html" :model="loginModel">
                    <img src="../../assets/images/LoginImg/avatar.svg" alt="">
                    <h2 class="title">欢迎管理员用户</h2>

                    <!-- 用户名 -->
                    <div class="input-div one">
                        <div class="i">
                            <el-icon size="25">
                                <UserFilled />
                            </el-icon>
                        </div>
                        <div class="div">
                            <input type="text" class="input" v-model="loginModel.username" placeholder="账户">
                        </div>
                    </div>

                    <!-- 密码 -->
                    <div class="input-div pass">
                        <div class="i">
                            <el-icon size="25">
                                <Share />
                            </el-icon>
                        </div>
                        <div class="div">
                            <input type="password" class="input" v-model="loginModel.password" placeholder="密码">
                        </div>
                    </div>

                    <!-- 确认 -->
                    <input type="button" class="btn" value="登录" @click="btnClick">


                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { UserFilled, Share } from '@element-plus/icons-vue'
import { reactive, onMounted } from 'vue';
import { getAllUser } from "../../api/index.js"
import { StorageSerializers, useStorage } from "@vueuse/core"
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";


const router = useRouter();

const loginModel = reactive({
    username: "",
    password: ""
})

const blogAdminUser = useStorage("blogAdminUser", null, undefined, {
    serializer: StorageSerializers.object  // 存储与取出数据以对象的形式操作数据
})

const btnClick = () => {
    getAllUser().then(res => {
        res.data.forEach(element => {
            if (element.status == "administrator" && element.username == loginModel.username && element.password == loginModel.password) {
                blogAdminUser.value = {  // 向localhost存入管理员账户
                    username: element.username,
                    password: element.password
                };
                router.push("/home")  // 定向到主页
                ElMessage({  // 提示成功消息
                    message: '登陆成功',
                    type: 'success',
                })
            }
        });
        loginModel.username = ""
        loginModel.password = ""
    })
}

onMounted(() => {
    loginModel.username = blogAdminUser.value.username
    loginModel.password = blogAdminUser.value.password
})

</script>

<style scoped>
/* 初始化 */
* {
    padding: 0;
    margin: 0;
    /* 标准盒子 */
    box-sizing: border-box;
}

body {
    /* 引入字体 */
    font-family: "Poppins", sans-serif;
    /* 溢出隐藏 */
    overflow: hidden;
}

.wave {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
    /* 让他当作一个背景 */
    z-index: -1;
}

.container {
    width: 100vw;
    height: 100vh;
    /* 网格布局 */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;
}

.img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.login-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* 文字居中 */
    text-align: center;
}

.img img {
    width: 500px;
}

form {
    width: 360px;
}

.login-content img {
    height: 100px;
}

.login-content h2 {
    margin: 15px 0;
    color: #333;
    text-transform: uppercase;
    font-size: 2.9rem;
}

.login-content .input-div {
    /* 相对定位 */
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one {
    margin-top: 20px;
}

.i {
    color: #d9d9d9;
    /* 弹性布局 水平 垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.i i {
    transition: .3s;
}

.input-div>div {
    /* 相对定位 */
    position: relative;
    height: 45px;
}

.input-div>div>h5 {
    /* 绝对定位 */
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: .3s;
}

.input-div::before,
.input-div::after {
    content: "";
    /* 绝对定位 */
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #38d39f;
    transition: .4s;
}

.input-div::before {
    right: 50%;
}

.input-div::after {
    left: 50%;
}

.input-div.focus::before,
.input-div.focus::after {
    width: 50%;
}

.input-div.focus>div>h5 {
    top: -5px;
    font-size: 15px;
}

.input-div.focus>.i>i {
    color: #38d39f;
}

.input-div>div>input {
    /* 绝对定位 */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    /* 点击输入框的边框也消失 */
    outline: none;
    padding: 0.5rem 0.7rem;
    background: none;
    font-size: 1.2rem;
    color: #555;
    font-family: 'position', sans-serif;
}

.input-div.pass {
    margin-bottom: 4px;
}

a {
    display: block;
    text-align: right;
    /* 下划线消失 */
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: .3s;
}

a:hover {
    color: #38d39f;
}

.btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #32b39f, #32be8f);
    background-size: 200%;
    font-size: 1.2rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 1rem 0;
    /* 鼠标放上变小手 */
    cursor: pointer;
    transition: .5s;
}

.btn:hover {
    background-position: right;
}

@media screen and (max-width: 1050px) {
    .container {
        grid-gap: 5rem;
    }
}

@media screen and (max-width: 1000px) {
    form {
        width: 290px;
    }

    .login-content h2 {
        font-size: 2.4rem;
        margin: 8px 0;
    }

    .img img {
        width: 400px;
    }
}

@media screen and (max-width: 900px) {
    .container {
        grid-template-columns: 1fr;
    }

    .img {
        display: none;
    }

    .wave {
        display: none;
    }

    .login-content {
        justify-content: center;
    }
}
</style>