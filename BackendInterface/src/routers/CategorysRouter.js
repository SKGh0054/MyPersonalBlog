// 分类
const express = require("express")
const router = express.Router()
const { db } = require("../db/DBUtils.js")

// 分类按id查找
router.get("/category/:id", async (req, res) => {
    let get_category_sql = `
    SELECT 
        *,
        IFNULL((
        SELECT 
            JSON_ARRAYAGG(JSON_OBJECT(
                'id', a.id,
                'category', a.category,
                'author', a.author,
                'add_date', a.add_date,
                'pub_date', a.pub_date,
                'title', a.title,
                'keywords', a.keywords,
                'description', a.description,
                'content', a.content,
                'tags', (
                    SELECT 
                        JSON_ARRAYAGG(JSON_OBJECT('id', t.id, 'name', t.name, 'add_date', t.add_date, 'pub_date', t.pub_date))
                    FROM 
                        article_tags at 
                        INNER JOIN tags t ON at.tags_id = t.id 
                    WHERE 
                        at.article_id = a.id
                )
            ))
        FROM 
            category_article ca 
            INNER JOIN article a ON ca.article_id = a.id 
        WHERE 
            ca.category_id = c.id
        ), JSON_ARRAY()) AS article_set 
    FROM 
        category c
    WHERE
        c.id = ${req.params.id};
    `
    let { err, results, fileds } = await db.async.query(get_category_sql)
    if (err == null) {
        res.send(results[0])  // 取到对象
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})

// 分类全部查找
router.get("/category", async (req, res) => {
    let get_category_sql = `
    SELECT 
        *,
        IFNULL((
            SELECT 
                JSON_ARRAYAGG(JSON_OBJECT(
                    'id', cc.id, 
                    'add_date', cc.add_date,
                    'pub_date', cc.pub_date,
                    'name', cc.name,
                    'keywords', cc.keywords,
                    'description', cc.description,
                    'parent_id', cc.parent_id
        ))
        FROM
            category cc
        WHERE
            cc.parent_id IS NOT NULL AND cc.parent_id = cp.id
    ), JSON_ARRAY()) AS children 
    FROM 
        category cp
    WHERE
        cp.parent_id IS NULL;
    `
    let { err, results, fileds } = await db.async.query(get_category_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})



// 分类全部查找 --> 管理员权限
router.get("/getcategory", async (req, res) => {
    let get_category_sql = `
        SELECT * FROM category;
    `
    let { err, results, fileds } = await db.async.query(get_category_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})

// 分类删除 --> 管理员权限
router.post("/deletecategory", async (req, res) => {
    let delete_category_sql = `
        DELETE FROM category WHERE id = ${req.body.id}
    `
    let { err, results, fileds } = await db.async.query(delete_category_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "删除分类成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "删除分类失败"
        })
    }
})


// 添加category --> 管理员权限
router.post("/addcategory", async (req, res) => {
    if (!parseInt(req.body.parent_id)) {
        req.body.parent_id = null
    } else {
        req.body.parent_id = parseInt(req.body.parent_id)
    }
    let search_category_sql = `
        SELECT COUNT(*) as count FROM category WHERE name = '${req.body.name}'
    `
    let results_count = await db.async.query(search_category_sql)
    if (results_count.results[0].count > 0) {
        res.send({
            code: 500,
            msg: "添加分类失败"
        })
    } else {
        let add_category_sql = `
            INSERT INTO category (id, add_date, pub_date, name, keywords, description, parent_id)
            VALUES (null, '${req.body.add_date}', '${req.body.pub_date}', '${req.body.name}', '${req.body.keywords}', '${req.body.description}', ${req.body.parent_id});
        `

        let { err, results, fileds } = await db.async.query(add_category_sql)
        if (err == null) {
            res.send({
                code: 200,
                msg: "添加分类成功",
                rows: results,
            })
        } else {
            res.send({
                code: 500,
                msg: "添加分类失败"
            })
        }
    }
})

// 修改标签接口 --> 管理员权限
router.post("/editcategory", async (req, res) => {
    if (!req.body.id || req.body.id == undefined || req.body.id == null || req.body.id == NaN) {
        res.send({
            code: 500,
            msg: "修改分类失败"
        })
    }
    let search_category_sql = `
        SELECT COUNT(*) as count FROM category WHERE id = ${parseInt(req.body.id)}
    `
    let results_count = await db.async.query(search_category_sql)


    if (results_count.results[0].count != 1) {
        res.send({
            code: 500,
            msg: "修改分类失败"
        })
    } else {
        let edit_category_sql = `
            UPDATE 
                category 
            SET 
                name='${req.body.name}', 
                add_date='${req.body.add_date}', 
                pub_date='${req.body.pub_date}', 
                keywords='${req.body.keywords}', 
                description='${req.body.description}', 
                parent_id=${req.body.parent_id} 
            WHERE id=${parseInt(req.body.id)};
        `

        let { err, results, fileds } = await db.async.query(edit_category_sql)
        if (err == null) {
            res.send({
                code: 200,
                msg: "修改分类成功",
                rows: results,
            })
        } else {
            res.send({
                code: 500,
                msg: "修改分类失败"
            })
        }
    }

})



module.exports = router