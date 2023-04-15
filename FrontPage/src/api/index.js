import { request } from "../utils/request"

// 首页全部菜单
export async function getCategory() {
    return await request({
        url: "/category",
        method: "get"
    })
}

// 分类菜单页
export async function getCategoryArticleList(id) {
    return await request({
        url: "/category/" + id + "/",
        method: "get"
    })
}

// 单文章详情页
export async function getArticleDetail(id) {
    return await request({
        url: "/article/" + id + "/",
        method: "get"
    })
}

// 文章search搜索
export async function getHomeArticle(params = {}) {
    return await request({
        url: "/article/",
        method: "get",
        params: params
    })
}

// 所有标签查询
export async function getTagList() {
    return await request({
        url: "/tags/",
        method: "get"
    })
}

// 登录身份验证 成功=>返回该用户data与token
export async function postSuccessToken(username, password) {
    return await request({
        url: "/token/",
        method: "post",
        data:
        {
            "username": username,
            "password": password
        }
    })
}

// 验证token时效 成功=>返回true
export async function verifyToken(token) {
    return await request({
        url: "/token/verify",
        method: "post",
        data:
        {
            "token": token
        }
    })
}

// 注册普通用户
export async function addConsumerUser(username, password, nickname) {
    return await request({
        url: "/useradd/",
        method: "post",
        data:
        {
            "username": username,
            "password": password,
            "nickname": nickname
        }
    })
}