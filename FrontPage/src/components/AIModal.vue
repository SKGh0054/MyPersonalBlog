<template>
    <div>
        <!-- 对话列表 -->
        <a-list item-layout="horizontal" :data-source="dialogue" v-if="dialogue.length > 0">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta>
                        <template #avatar v-if="item.identity == 'AI'">
                            <icon>
                                <template #component>
                                    <svg t="1683182076324" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="9725"
                                        data-spm-anchor-id="a313x.7781069.0.i3" width="25" height="25">
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
                        </template>
                        <template #avatar v-if="item.identity != 'AI'">
                            <icon>
                                <template #component>
                                    <svg t="1683195574923" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="4565" width="25" height="25">
                                        <path
                                            d="M511.931733 1023.351467a512.887467 512.887467 0 0 1-377.514666-166.126934l-20.241067-21.742933 20.241067-21.742933a513.7408 513.7408 0 0 1 377.514666-166.126934c143.121067 0 281.088 60.552533 377.514667 166.126934l20.241067 21.742933-20.206934 21.742933a512.887467 512.887467 0 0 1-377.514666 166.126934z m-308.565333-187.869867a448.853333 448.853333 0 0 0 308.565333 123.1872 448.853333 448.853333 0 0 0 308.565334-123.1872 448.853333 448.853333 0 0 0-308.565334-123.1872 448.853333 448.853333 0 0 0-308.565333 123.221333z m309.077333-234.461867c-90.2144 0-163.84-73.489067-163.84-163.5328 0-90.043733 73.6256-163.566933 163.84-163.566933 90.248533 0 163.874133 73.5232 163.874134 163.566933a163.7376 163.7376 0 0 1-163.84 163.5328z m0-262.382933a99.259733 99.259733 0 0 0-99.0208 98.850133 99.259733 99.259733 0 0 0 99.0208 98.850134 99.259733 99.259733 0 0 0 99.054934-98.850134 98.952533 98.952533 0 0 0-99.054934-98.850133z"
                                            fill="#515151" p-id="4566" data-spm-anchor-id="a313x.7781069.0.i3"
                                            class="selected"></path>
                                        <path
                                            d="M116.770133 721.1008A442.88 442.88 0 0 1 64.9216 512c0-246.340267 200.704-446.122667 447.010133-446.122667 246.340267 0 447.010133 200.2944 447.010134 446.122667 0 72.977067-18.1248 144.930133-51.848534 208.5888 16.5888 15.530667 32.1536 32.085333 46.6944 49.698133A506.914133 506.914133 0 0 0 1023.761067 512c0-282.043733-229.717333-511.317333-512.341334-511.317333C229.307733 1.160533 0.1024 230.434133 0.1024 512c0 91.101867 24.3712 180.6336 70.519467 258.286933 13.994667-17.066667 29.559467-33.655467 46.148266-49.152z"
                                            fill="#515151" p-id="4567" data-spm-anchor-id="a313x.7781069.0.i4"
                                            class="selected"></path>
                                    </svg>
                                </template>
                            </icon>
                        </template>
                        <template #description>
                            <div :class="{ 'isHuman': item.identity == 'human' }">
                                {{ item.description }}
                            </div>
                            <a-spin v-if="loading && item.description == dialogue[dialogue.length - 1].description"
                                tip="思考ing..."></a-spin>
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>

        <!-- 提问对话框组件 -->
        <a-comment>
            <template #avatar>
                <a-avatar v-if="loggedIn" style="background-color: rgb(102,102,102)">{{ loggedIn }}</a-avatar>
                <a-avatar v-if="!loggedIn" style="background-color: rgb(102,102,102)">{{ "未登录" }}</a-avatar>
            </template>
            <template #content>
                <a-form-item>
                    <a-textarea v-model:value="textValue" :rows="3" />
                </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" type="primary" @click="handleSubmit">
                        <icon>
                            <template #component>
                                <svg t="1683196014133" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="6401" width="16" height="16">
                                    <path
                                        d="M915.515273 142.819385 98.213046 458.199122c-46.058539 17.772838-44.90475 43.601756 2.348455 57.622994l197.477685 58.594874 80.292024 238.91085c10.51184 31.277988 37.972822 37.873693 61.462483 14.603752l103.584447-102.611545 204.475018 149.840224c26.565749 19.467242 53.878547 9.222132 61.049613-23.090076l149.210699-672.34491C965.264096 147.505054 946.218922 130.971848 915.515273 142.819385zM791.141174 294.834331l-348.61988 310.610267c-6.268679 5.58499-11.941557 16.652774-12.812263 24.846818l-15.390659 144.697741c-1.728128 16.24808-7.330491 16.918483-12.497501 1.344894l-67.457277-203.338603c-2.638691-7.954906 0.975968-17.705389 8.022355-21.931178l442.114555-265.181253C812.67481 268.984974 815.674251 272.975713 791.141174 294.834331z"
                                        p-id="6402" fill="#e6e6e6"></path>
                                </svg>
                            </template>
                        </icon>
                        发送
                    </a-button>
                </a-form-item>
            </template>
        </a-comment>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import Icon from '@ant-design/icons-vue';  // 单独引入图标
import { useUserHook } from '../composables/useUserHook';

const loading = ref(false)
const { loggedIn } = useUserHook()
// 列表数据
const dialogue = reactive([])
// 输入框数据
const textValue = ref(null)
// 发送按钮点击事件
const handleSubmit = () => {
    if (textValue.value == null || textValue.value == "") {
        return
    }
    loading.value = true
    // 添加对话到列表
    dialogue.push({
        identity: "human",  // 之后替换成当前登录的人
        description: textValue.value
    })
    // 请求接口
    dialogue.push({
        identity: "AI",
        description: ""
    })
    axiosRequest(textValue.value)
    textValue.value = null
}

const axiosRequest = (axiosRequestValue) => {
    // 接口数据配置
    let data = JSON.stringify({
        // "phonenum": "15757279978",
        "phonenum": "13120923209",
        "prompt": axiosRequestValue,
        "options": {},
        "template": 1,
        "viplevel": "0"
    });
    // 以下为axios配置
    let config = {
        method: 'post',
        url: 'https://chatmindai.aabiji.com/api4/chat-process',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        data: data
    };

    axios(config).then(function (response) {
        const chatRecords = response.data
        const chatArray = chatRecords.split(/(?<=})\s+(?={)/); // 使用正则表达式分割字符串
        const chatObjects = chatArray.map(item => JSON.parse(item)); // 将每个元素解析为对象
        chatObjects.forEach(element => {
            dialogue[dialogue.length - 1].description += element.delta
        });
        loading.value = false
    }).catch(function (error) {
        console.log(error);
    });

}



</script>

<style scoped>
.isHuman {
    color: rgb(106, 165, 254);
}
</style>