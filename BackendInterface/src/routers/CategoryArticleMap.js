// 分类-文章映射
const express = require("express")
const { db } = require("../db/DBUtils.js")

const router = express.Router()



// 分类-文章映射-查 --> 管理员权限
router.get("/getcategoryarticlemap", async (req, res) => {
    let get_article_sql = `
        SELECT * FROM category_article;
    `
    let { err, results, fileds } = await db.async.query(get_article_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "查询分类-文章映射失败"
        })
    }
})

// 分类-文章映射-按article_id删 --> 管理员权限
router.post("/deletecategoryarticlemapbyarticle", async (req, res) => {
    let delete_article_sql = `
        DELETE FROM category_article WHERE article_id = ${req.body.id}
    `
    let { err, results, fileds } = await db.async.query(delete_article_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "删除分类-文章映射成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "删除分类-文章映射失败"
        })
    }
})

// 分类-文章映射-按category_id删映射 --> 管理员权限
router.post("/deletecategoryarticlemapbycategory", async (req, res) => {
    let IDarray = await db.async.query(`select article_id from category_article where category_id = ${req.body.id}`)
    const articleArray = []
    if (IDarray.results.length == 0) {
        res.send({
            code: 200,
            msg: "该分类下无文章",
        })
    } else {
        IDarray.results.forEach(element => {
            articleArray.push(element.article_id)
        });
        let category_article = await db.async.query(`delete from category_article where article_id in (${articleArray.join(",")});`)
        let article = await db.async.query(`delete from article where id in (${articleArray.join(",")});`)

        if (category_article.err == null) {
            res.send({
                code: 200,
                msg: "删除分类-文章映射成功",
                rows: article.results,
            })
        } else {
            res.send({
                code: 500,
                msg: "删除分类-文章映射失败"
            })
        }
    }

})


// 分类-文章映射-增 --> 管理员权限
router.post("/addcategoryarticlemap", async (req, res) => {
    let add_article_sql = `
        INSERT INTO category_article (id, category_id, article_id)
        VALUES (null, ${req.body.category_id}, ${req.body.article_id});
    `
    let { err, results, fileds } = await db.async.query(add_article_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "添加分类-文章映射成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "添加分类-文章映射失败"
        })
    }
})

// 分类-文章映射-改 --> 管理员权限
router.post("/editcategoryarticlemap", async (req, res) => {
    let edit_article_sql = `
            UPDATE 
                category_article 
            SET 
                category_id = ${req.body.category_id}
            WHERE article_id=${req.body.article_id};
        `

    let { err, results, fileds } = await db.async.query(edit_article_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "修改分类-文章映射成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "修改分类-文章映射失败"
        })
    }


})






module.exports = router