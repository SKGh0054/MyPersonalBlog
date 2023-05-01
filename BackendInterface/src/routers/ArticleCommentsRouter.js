// 文章评论
const express = require("express")
const { db } = require("../db/DBUtils.js")

const router = express.Router()


// 文章评论查找 按文章id查询全部
router.post("/articlecomments/", async (req, res) => {
    let get_articlecomments_sql = `
        SELECT 
            *
        FROM 
            article_comments
        WHERE
            article_id = ${req.body.article_id};
    `
    let { err, results, fileds } = await db.async.query(get_articlecomments_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})


// 文章评论添加
router.post("/articlecommentsadd/", async (req, res) => {
    let get_articlecommentsadd_sql = `
        INSERT INTO article_comments (id, article_id, nickname, content, pub_date)
        VALUES (null, '${req.body.article_id}', '${req.body.nickname}', '${req.body.content}', '${req.body.pub_date}');
    `
    let { err, results, fileds } = await db.async.query(get_articlecommentsadd_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "添加失败"
        })
    }
})


// 文章评论删除 --> 管理员权限
router.post("/articlecommentsdelete", async (req, res) => {
    let delete_articlecomments_sql = `
        DELETE FROM article_comments WHERE id = ${req.body.id}
    `
    let { err, results, fileds } = await db.async.query(delete_articlecomments_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "删除文章评论成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "删除文章评论失败"
        })
    }
})




module.exports = router