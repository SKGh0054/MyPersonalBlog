import { addTag, getTagList, deleteTag, editTag } from "../api/index.js"
import { reactive } from "vue"





// 对数据进行增删改查
export const useTagHook = () => {

    // tag信息列表对象
    const tag_list = reactive({
        list: []
    })

    // 查询所有tag信息
    const getTag = () => {
        getTagList().then(res => {
            tag_list.list = res.data
        })
    }
    getTag()

    // 添加tag
    const addTagAdmin = (add_date, pub_date, name) => {
        addTag(add_date, pub_date, name).then(res => {
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功添加标签',
                    type: 'success',
                })
                getTag()
            }
            else {
                ElMessage.error('添加标签失败')

            }
        }).catch(err => {
            ElMessage.error('添加标签失败')
        })
    }

    // 删除tag
    const deleteTagAdmin = (id) => {
        deleteTag(id).then(res => {
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功删除标签',
                    type: 'success',
                })
                getTag()
            }
            else {
                ElMessage.error('删除标签失败')

            }
        }).catch(err => {
            ElMessage.error('删除标签失败')
        })
    }


    // 修改tag
    const editTagAdmin = (id, name, add_date, pub_date) => {
        editTag(id, name, add_date, pub_date).then(res => {
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功修改标签',
                    type: 'success',
                })
                getTag()
            }
            else {
                ElMessage.error('修改标签失败')

            }
        }).catch(err => {
            ElMessage.error('修改标签失败')
        })
    }


    return { tag_list, addTagAdmin, deleteTagAdmin, editTagAdmin }

} 