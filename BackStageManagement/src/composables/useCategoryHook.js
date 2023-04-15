import { getcategory, deletecategory, addcategory, editcategory, deletecategoryarticlemapbycategory } from "../api/index.js"
import { reactive } from "vue"





// 对数据进行增删改查
export const useCategoryHook = () => {

    // category信息列表对象
    const category_list = reactive({
        list: []
    })

    // 查询所有category信息
    const getCategoryAdmin = () => {
        getcategory().then(res => {
            category_list.list = res.data
        })
    }
    getCategoryAdmin()

    // 添加category
    const addCategoryAdmin = (add_date, pub_date, name, keywords, description, parent_id) => {
        addcategory(add_date, pub_date, name, keywords, description, parent_id).then(res => {
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功添加分类',
                    type: 'success',
                })
                getCategoryAdmin()
            }
            else {
                ElMessage.error('添加分类失败')

            }
        }).catch(err => {
            ElMessage.error('添加分类失败')
        })
    }

    // 删除category
    const deleteCategoryAdmin = (id) => {
        deletecategoryarticlemapbycategory(id).then(res => {
            deletecategory(id).then(res => {  // 删除分类
                if (res.data.code == 200) {
                    ElMessage({
                        message: '成功删除分类',
                        type: 'success',
                    })
                    getCategoryAdmin()
                }
                else {
                    ElMessage.error('删除分类失败')

                }
            }).catch(err => {
                ElMessage.error('删除分类失败')
            })
        })  // 删除外键

    }


    // 修改tag
    const editCategoryAdmin = (id, add_date, pub_date, name, keywords, description, parent_id) => {
        editcategory(id, add_date, pub_date, name, keywords, description, parent_id).then(res => {
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功修改分类',
                    type: 'success',
                })
                getCategoryAdmin()
            }
            else {
                ElMessage.error('修改分类失败')

            }
        }).catch(err => {
            ElMessage.error('修改分类失败')
        })
    }


    return { category_list, getCategoryAdmin, addCategoryAdmin, deleteCategoryAdmin, editCategoryAdmin }

} 