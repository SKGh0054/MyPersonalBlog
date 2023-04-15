import { computed, ref } from 'vue';
import { message } from 'ant-design-vue';
import { StorageSerializers, useStorage } from "@vueuse/core"
import { postSuccessToken, addConsumerUser } from "../api/index.js"

const user = useStorage("user", null, undefined, {
    serializer: StorageSerializers.object  // 存储与取出数据以对象的形式操作数据
})

const blogAdminUser = useStorage("blogAdminUser", null, undefined, {
    serializer: StorageSerializers.object  // 存储与取出数据以对象的形式操作数据
})

export const useUserHook = () => {
    // 登录
    const loginModel = ref({
        username: "",
        password: "",
        nickname: ""
    })
    const login = async (callback) => {
        const { username, password } = loginModel.value
        postSuccessToken(username, password).then(res => {
            
            // 判断是否为管理员管理员自动存储账户密码
            if (res.data.data.status == "administrator") {
                blogAdminUser.value = {
                    username: loginModel.value.username,
                    password: loginModel.value.password
                }
            }

            user.value = { // 存入用户名与token
                username: loginModel.value.username,
                token: res.data.token,
                nickname: res.data.data.nickname
            }
            loginModel.value.nickname = res.data.data.nickname
            message.success("登陆成功!", 1).then(() => {
                callback()  // 执行回调
            })
        })

    }
    const logout = async () => {
        user.value = null

        blogAdminUser.value = null

        message.success("退出成功!", 1)

    }
    const loggedIn = computed(() => {
        return user.value?.username
    })


    // 注册
    const registryModel = ref({
        username: "",
        password: "",
        nickname: ""
    })
    const registrySuccess = async (callback) => {
        const { username, password, nickname } = registryModel.value
        addConsumerUser(username, password, nickname).then(res => {
            if (res.data.code == 200) {
                message.success("注册成功!", 1).then(() => {
                    callback()
                    postSuccessToken(username, password).then(res => {
                        user.value = {
                            username: registryModel.value.username,
                            token: res.data.token,
                            nickname: res.data.data.nickname
                        }
                    })
                })
            } else {
                message.warning("注册失败, 用户已存在请更改用户名!", 1.5);
            }
        }).catch(err => {
            message.error(err)
        })
    }

    return { loginModel, user, login, logout, loggedIn, registryModel, registrySuccess }
}