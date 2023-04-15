// 标签
const express = require("express")
const { db } = require("../db/DBUtils.js")

const router = express.Router()

// 获取tags
router.get("/tags", async (req, res) => {
    let get_tags_sql = "select * from tags"
    let { err, results, fileds } = await db.async.query(get_tags_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})

// 添加tags --> 管理员权限
router.post("/tagsadd", async (req, res) => {
    let search_tag_sql = `
        SELECT COUNT(*) as count FROM tags WHERE name = '${req.body.name}'
    `
    let results_count = await db.async.query(search_tag_sql)
    if (results_count.results[0].count > 0) {
        res.send({
            code: 500,
            msg: "添加标签失败"
        })
    } else {
        let add_tag_sql = `
            INSERT INTO tags (id, add_date, pub_date, name)
            VALUES (null, '${req.body.add_date}', '${req.body.pub_date}', '${req.body.name}');
        `

        let { err, results, fileds } = await db.async.query(add_tag_sql)
        if (err == null) {
            res.send({
                code: 200,
                msg: "添加标签成功",
                rows: results,
            })
        } else {
            res.send({
                code: 500,
                msg: "添加标签失败"
            })
        }
    }
})

// 按id删除tags --> 管理员权限
router.post("/tagsdelete", async (req, res) => {
    let delete_tag_sql = `DELETE FROM tags WHERE id = ${req.body.id}`
    let { err, results, fileds } = await db.async.query(delete_tag_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "删除标签成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "删除标签失败"
        })
    }
})

// 修改标签接口 --> 管理员权限
router.post("/tagsedit", async (req, res) => {
    if (!req.body.id || req.body.id == undefined || req.body.id == null || req.body.id == NaN) {
        res.send({
            code: 500,
            msg: "修改标签失败"
        })
    }
    let search_tags_sql = `
        SELECT COUNT(*) as count FROM tags WHERE id = ${parseInt(req.body.id)}
    `
    let results_count = await db.async.query(search_tags_sql)


    if (results_count.results[0].count != 1) {
        res.send({
            code: 500,
            msg: "修改标签失败"
        })
    } else {
        let edit_tags_sql = `
            UPDATE 
                tags 
            SET 
                name='${req.body.name}', 
                add_date='${req.body.add_date}', 
                pub_date='${req.body.pub_date}' 
            WHERE id=${parseInt(req.body.id)};
        `

        let { err, results, fileds } = await db.async.query(edit_tags_sql)
        if (err == null) {
            res.send({
                code: 200,
                msg: "修改标签成功",
                rows: results,
            })
        } else {
            res.send({
                code: 500,
                msg: "修改标签失败"
            })
        }
    }

})





module.exports = router