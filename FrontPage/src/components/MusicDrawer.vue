<template>
    <div>
        <!-- 搜索框部分 -->
        <a-input-search v-model:value="SearchValue" placeholder="请输入歌曲名" enter-button @search="onSearch" />

        <!-- 列表展示部分 -->
        <a-table :columns="columns" :data-source="dataSource" v-if="dataSource">
            <template #headerCell="{ column }">
                <template v-if="column.key === 'name'">
                    <span>
                        歌曲名
                    </span>
                </template>

                <template v-if="column.key === 'id'">
                    <span>
                        歌曲ID
                    </span>
                </template>

                <template v-if="column.key === 'play'">
                    <span>
                        播放
                    </span>
                </template>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'name'">
                    <span>
                        {{ record.name }}
                    </span>
                </template>
                <template v-if="column.key === 'id'">
                    <span>
                        {{ record.id }}
                    </span>
                </template>
                <template v-if="column.key === 'play'">
                    <span @click="stepClick(record)">
                        <!-- <step-forward-outlined /> -->
                        <play-circle-outlined />
                    </span>
                </template>
            </template>
        </a-table>

        <!-- 加载动画 -->
        <a-spin v-if="loading" tip="歌曲加载中..." size="large"></a-spin>

        <!-- 播放器部分 -->
        <audio controls autoplay :src="musicURL" v-if="musicURL"></audio>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { StepForwardOutlined, PlayCircleOutlined } from '@ant-design/icons-vue';
import { message } from "ant-design-vue";


const SearchValue = ref("")
const dataSource = ref()
const musicURL = ref()
const loading = ref(false)


const stepClick = (row) => {
    musicUrlSearch(row.id)
}

// 表单表头
const columns = [
    {
        name: '歌曲名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        name: '歌曲ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        name: '播放',
        key: 'play',
    }
]

// 搜索按钮点击事件
const onSearch = () => {
    dataSource.value = null
    loading.value = true
    if (SearchValue.value == "" || SearchValue.value == null) {
        loading.value = false
        return
    }
    axios({
        method: "post",
        url: "https://autumnfish.cn/search",
        params: {
            keywords: SearchValue.value
        }
    }).then(res => {
        if (res.data.code == 200) {
            dataSource.value = res.data.result.songs
            loading.value = false
        } else {
            message.warn("搜索歌曲失败！");
            loading.value = false
        }
    });
}

// 歌曲播放事件
const musicUrlSearch = (musicID) => {
    axios({
        method: "post",
        url: "https://autumnfish.cn/song/url",
        params: {
            id: musicID
        }
    }).then(res => {
        if (res.data.code == 200) {
            musicURL.value = res.data.data[0].url
        } else {
            message.warn("播放歌曲失败！");
        }
    });
}

</script>

<style scoped>
.ant-table-wrapper {
    margin-top: 20px;
}

audio {
    margin-top: 25px;
    margin-left: 15px;
}

.ant-spin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>