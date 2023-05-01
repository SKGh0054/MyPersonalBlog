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

// 按文章id获取当前文章评论
export async function getArticlecomments(article_id) {
    return await request({
        url: "/articlecomments/",
        method: "post",
        data:
        {
            "article_id": article_id,
        }
    })
}

// 添加某文章的评论
export async function addArticlecomments(article_id, nickname, content, pub_date) {
    return await request({
        url: "/articlecommentsadd/",
        method: "post",
        data:
        {
            "article_id": article_id,
            "nickname": nickname,
            "content": content,
            "pub_date": pub_date
        }
    })
}

// 删除某文章的某条评论 --- 管理员权限
export async function deleteArticlecomments(id) {
    return await request({
        url: "/articlecommentsdelete/",
        method: "post",
        data:
        {
            "id": id
        }
    })
}