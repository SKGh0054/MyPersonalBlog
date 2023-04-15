import { getarticle, deletearticle, addarticle, editarticle, addcategoryarticlemap, deletecategoryarticlemapbyarticle } from "../api/index.js"
import { reactive } from "vue"




// 对数据进行增删改查
export const useArticleHook = () => {

    // article信息列表对象
    const article_list = reactive({
        list: [],
        maxID: 0
    })

    // 查询所有article信息
    const getArticleAdmin = () => {
        getarticle().then(res => {
            article_list.list = res.data.rows
        })
    }
    getArticleAdmin()

    // 添加article
    const addArticleAdmin = (category, author, add_date, pub_date, title, keywords, description, content, category_id) => {
        addarticle(category, author, add_date, pub_date, title, keywords, description, content).then(res => {
            if (res.data.code == 200) {
                article_list.maxID = res.data.maxID
                ElMessage({
                    message: '成功添加文章',
                    type: 'success',
                })
                getArticleAdmin()
                addcategoryarticlemap(category_id, article_list.maxID)
            }
            else {
                ElMessage.error('添加文章失败')

            }
        }).catch(err => {
            ElMessage.error('添加文章失败')
        })
    }

    // 删除article
    const deleteArticleAdmin = (id) => {
        deletecategoryarticlemapbyarticle(id)  // 先删除外键约束
        deletearticle(id).then(res => {  // 在删除文章
            if (res.data.code == 200) {
                ElMessage({
                    message: '成功删除文章',
                    type: 'success',
                })
                getArticleAdmin()
            }
            else {
                ElMessage.error('删除文章失败')

            }
        }).catch(err => {
            ElMessage.error('删除文章失败')
        })

    }


    // 修改article
    const editArticleAdmin = (id, category, author, add_date, pub_date, title, keywords, description, content) => {
        editarticle(id, category, author, add_date, pub_date, title, keywords, description, content).then(res => {

            if (res.data.code == 200) {
                ElMessage({
                    message: '成功修改文章',
                    type: 'success',
                })
                getArticleAdmin()
            }
            else {
                ElMessage.error('修改文章失败')

            }
        }).catch(err => {
            ElMessage.error('修改分类失败')
        })
    }


    return { article_list, getArticleAdmin, addArticleAdmin, deleteArticleAdmin, editArticleAdmin }

} 