import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from "../api/index.js"

export const useCategoryStore = defineStore('category', () => {

    // state状态
    const categoryDatas = ref([])

    // getter计算属性
    const compCategoryDatas = computed(() => {
        return JSON.parse(sessionStorage.getItem("CategoryDatas")) || categoryDatas  // 从本地sessionStorage将数据取出
    })

    // 修改state
    async function apiCategory() {
        await getCategory().then(res => {
            if (res.status == 200) {
                console.log(res.data);
                categoryDatas.value = res.data
                sessionStorage.setItem("CategoryDatas", JSON.stringify(res.data))  // 将从服务器请求的数据存储到本地sessionStorage
            }
        })
    }

    return { categoryDatas, compCategoryDatas, apiCategory }
})