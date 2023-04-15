import { getAllUser, deleteUserById, searchUser, addUser, editUser } from "../api/index.js"
import { reactive } from "vue"





// 对数据进行增删改查
export const useUserHook = () => {

    // user信息列表对象
    const user_list = reactive({
        list: []
    })

    // 查询所有user信息
    const getUser = () => {
        getAllUser().then(res => {
            user_list.list = res.data
        })
    }
    getUser()

    // 单条信息删除
    const deleteUser = (id) => {
        deleteUserById(id).then(res => {
            ElMessage({
                message: "成功删除用户",
                type: "success"
            })
            getUser()
        })
    }

    // 模糊搜索用户
    const searchUserDim = (keyword) => {
        searchUser(keyword).then(res => {
            user_list.list = res.data
        })
    }

    // 添加用户
    const addUserAccurate = (username, password, nickname, status) => {
        addUser(username, password, nickname, status).then(res => {
            console.log(res);
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功添加用户',
                    type: 'success',
                })
                getUser()
            }
            else {
                ElMessage.error('添加用户失败')

            }
        }).catch(err => {
            ElMessage.error('添加用户失败')
        })
    }


    // 修改用户
    const editUserAccurate = (id, username, password, nickname, status) => {
        editUser(id, username, password, nickname, status).then(res => {
            console.log(res);
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功修改用户信息',
                    type: 'success',
                })
                getUser()
            }
            else {
                ElMessage.error('修改用户信息失败')

            }
        }).catch(err => {
            ElMessage.error('修改用户信息失败')
        })
    }

    return { user_list, getUser, deleteUser, searchUserDim, addUserAccurate, editUserAccurate }

} 