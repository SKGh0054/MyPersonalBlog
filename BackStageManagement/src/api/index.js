import { request } from "../utils/request"

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



// 用户
// 获取所有用户 --> 管理员权限
export async function getAllUser() {
    return await request({
        url: "/userget/",
        method: "get"
    })
}

// 按id删除用户 --> 管理员权限
export async function deleteUserById(id) {
    return await request({
        url: "/userdelete/",
        method: "post",
        data:
        {
            "id": id,
        }
    })
}

// 模糊搜索用户 --> 管理员权限
export async function searchUser(keyword) {
    return await request({
        url: "/usersearch/",
        method: "post",
        data:
        {
            "keyword": keyword,
        }
    })
}

// 添加用户 --> 管理员权限
export async function addUser(username, password, nickname, status) {
    return await request({
        url: "/useraddadmin/",
        method: "post",
        data:
        {
            "username": username,
            "password": password,
            "nickname": nickname,
            "status": status
        }
    })
}

// 修改用户 --> 管理员权限
export async function editUser(id, username, password, nickname, status) {
    return await request({
        url: "/usereditadmin/",
        method: "post",
        data:
        {
            "id": id,
            "username": username,
            "password": password,
            "nickname": nickname,
            "status": status
        }
    })
}


// 标签
// 添加标签 --> 管理员权限
export async function addTag(add_date, pub_date, name) {
    return await request({
        url: "/tagsadd/",
        method: "post",
        data:
        {
            "add_date": add_date,
            "pub_date": pub_date,
            "name": name
        }
    })
}

// 删除标签 --> 管理员权限
export async function deleteTag(id) {
    return await request({
        url: "/tagsdelete/",
        method: "post",
        data:
        {
            "id": id
        }
    })
}

// 修改标签 --> 管理员权限
export async function editTag(id, name, add_date, pub_date) {
    return await request({
        url: "/tagsedit/",
        method: "post",
        data:
        {
            "id": id,
            "name": name,
            "add_date": add_date,
            "pub_date": pub_date
        }
    })
}


// 分类
// 查找分类-- > 管理员权限
export async function getcategory() {
    return await request({
        url: "/getcategory/",
        method: "get"
    })
}

// 删除分类-- > 管理员权限
export async function deletecategory(id) {
    return await request({
        url: "/deletecategory/",
        method: "post",
        data: {
            "id": id
        }
    })
}

// 添加分类-- > 管理员权限
export async function addcategory(add_date, pub_date, name, keywords, description, parent_id) {
    return await request({
        url: "/addcategory/",
        method: "post",
        data: {
            "add_date": add_date,
            "pub_date": pub_date,
            "name": name,
            "keywords": keywords,
            "description": description,
            "parent_id": parent_id
        }
    })
}

// 修改分类-- > 管理员权限
export async function editcategory(id, add_date, pub_date, name, keywords, description, parent_id) {
    return await request({
        url: "/editcategory/",
        method: "post",
        data: {
            "id": id,
            "add_date": add_date,
            "pub_date": pub_date,
            "name": name,
            "keywords": keywords,
            "description": description,
            "parent_id": parent_id
        }
    })
}



// 文章
// 查找文章-- > 管理员权限
export async function getarticle() {
    return await request({
        url: "/getarticle/",
        method: "get"
    })
}

// 删除文章-- > 管理员权限
export async function deletearticle(id) {
    return await request({
        url: "/deletearticle/",
        method: "post",
        data: {
            "id": id
        }
    })
}

// 添加文章-- > 管理员权限
export async function addarticle(category, author, add_date, pub_date, title, keywords, description, content) {
    return await request({
        url: "/addarticle/",
        method: "post",
        data: {
            "category": category,
            "author": author,
            "add_date": add_date,
            "pub_date": pub_date,
            "title": title,
            "keywords": keywords,
            "description": description,
            "content": content
        }
    })
}

// 修改文章-- > 管理员权限
export async function editarticle(id, category, author, add_date, pub_date, title, keywords, description, content) {
    return await request({
        url: "/editarticle/",
        method: "post",
        data: {
            "id": id,
            "category": category,
            "author": author,
            "add_date": add_date,
            "pub_date": pub_date,
            "title": title,
            "keywords": keywords,
            "description": description,
            "content": content
        }
    })
}



// 分类-文章-映射
// 分类-文章映射-查 --> 管理员权限
export async function getcategoryarticlemap() {
    return await request({
        url: "/getcategoryarticlemap/",
        method: "get"
    })
}
// 分类-文章映射-按article_id删 --> 管理员权限
export async function deletecategoryarticlemapbyarticle(id) {
    return await request({
        url: "/deletecategoryarticlemapbyarticle/",
        method: "post",
        data: {
            "id": id
        }
    })
}
// 分类-文章映射-按category_id删 --> 管理员权限
export async function deletecategoryarticlemapbycategory(id) {
    return await request({
        url: "/deletecategoryarticlemapbycategory/",
        method: "post",
        data: {
            "id": id
        }
    })
}
// 分类-文章映射-增 --> 管理员权限
export async function addcategoryarticlemap(category_id, article_id) {
    return await request({
        url: "/addcategoryarticlemap/",
        method: "post",
        data: {
            category_id: category_id,
            article_id: article_id
        }
    })
}
// 分类-文章映射-改 --> 管理员权限
export async function editcategoryarticlemap(category_id, article_id) {
    return await request({
        url: "/editcategoryarticlemap/",
        method: "post",
        data: {
            category_id: category_id,
            article_id: article_id
        }
    })
}