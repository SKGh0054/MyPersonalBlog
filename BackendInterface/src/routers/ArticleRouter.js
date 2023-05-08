// 文章
const express = require("express")
const { db } = require("../db/DBUtils.js")

const router = express.Router()


// 文章按id查询
router.get("/article/:id", async (req, res) => {
    let get_article_sql = `
        SELECT 
            *,
            (
            SELECT 
                JSON_ARRAYAGG(JSON_OBJECT('id', t.id, 'name', t.name, 'add_date', t.add_date, 'pub_date', t.pub_date))
            FROM 
                article_tags at 
                INNER JOIN tags t ON at.tags_id = t.id 
            WHERE 
                at.article_id = a.id
            ) AS tags 
        FROM 
            article a
        WHERE
            a.id = ${req.params.id};
    `
    let { err, results, fileds } = await db.async.query(get_article_sql)
    if (err == null) {
        res.send(results[0])
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})

// 文章search搜索
router.get("/article/", async (req, res) => {
    let get_article_sql = `
        SELECT 
            *,
            (
            SELECT 
                JSON_ARRAYAGG(JSON_OBJECT('id', t.id, 'name', t.name, 'add_date', t.add_date, 'pub_date', t.pub_date))
            FROM 
                article_tags at 
                INNER JOIN tags t ON at.tags_id = t.id 
            WHERE 
                at.article_id = a.id
            ) AS tags 
        FROM 
            article a
        WHERE
            a.title LIKE '%${req.query.search}%' OR
            a.category LIKE '%${req.query.search}%' OR 
            a.author LIKE '%${req.query.search}%' OR
            a.add_date LIKE '%${req.query.search}%' OR
            a.pub_date LIKE '%${req.query.search}%' OR
            a.keywords LIKE '%${req.query.search}%';
    `
    if (req.query.search == "" || req.query.search == undefined) {
        get_article_sql = `
        SELECT 
            *,
            (
            SELECT 
                JSON_ARRAYAGG(JSON_OBJECT('id', t.id, 'name', t.name, 'add_date', t.add_date, 'pub_date', t.pub_date))
            FROM 
                article_tags at 
                INNER JOIN tags t ON at.tags_id = t.id 
            WHERE 
                at.article_id = a.id
            ) AS tags 
        FROM 
            article a;
    `
    }
    let { err, results, fileds } = await db.async.query(get_article_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})




// 文章全部查找 --> 管理员权限
router.get("/getarticle", async (req, res) => {
    let get_article_sql = `
        SELECT * FROM article;
    `
    let { err, results, fileds } = await db.async.query(get_article_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "添加文章成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "查询文章失败"
        })
    }
})

// 文章删除 --> 管理员权限
router.post("/deletearticle", async (req, res) => {
    let delete_article_sql = `
        DELETE FROM article WHERE id = ${req.body.id}
    `
    let { err, results, fileds } = await db.async.query(delete_article_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "删除文章成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "删除文章失败"
        })
    }
})

// 添加文章 --> 管理员权限 -- 旧
// router.post("/addarticle", async (req, res) => {
//     let add_article_sql = `
//         INSERT INTO article (id, category, author, add_date, pub_date, title, keywords, description, content)
//         VALUES (null, '${req.body.category}', '${req.body.author}', '${req.body.add_date}', '${req.body.pub_date}', '${req.body.title}', '${req.body.keywords}', '${req.body.description}', '${req.body.content}');
//     `
//     let { err, results, fileds } = await db.async.query(add_article_sql)
//     if (err == null) {
//         let zizengID = await db.async.query("SELECT MAX(id) FROM article;")
//         res.send({
//             code: 200,
//             msg: "添加文章成功",
//             rows: results,
//             maxID: zizengID.results[0]['MAX(id)']
//         })
//     } else {
//         res.send({
//             code: 500,
//             msg: "添加文章失败"
//         })
//     }
// })

// 添加文章 --> 管理员权限 -- 新
router.post("/addarticle", async (req, res) => {
    const add_article_sql = `
      INSERT INTO article (category, author, add_date, pub_date, title, keywords, description, content)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `
    const values = [
        req.body.category,
        req.body.author,
        req.body.add_date,
        req.body.pub_date,
        req.body.title,
        req.body.keywords,
        req.body.description,
        req.body.content.replace(/'/g, "''"),
    ]
    try {
        const { results } = await db.async.query(add_article_sql, values)
        const zizengID = await db.async.query("SELECT LAST_INSERT_ID() as max_id;")
        res.send({
            code: 200,
            msg: "添加文章成功",
            rows: results,
            maxID: zizengID.results[0]['max_id']
        })
    } catch (error) {
        console.error(error)
        res.send({
            code: 500,
            msg: "添加文章失败"
        })
    }
})

// 修改文章 --> 管理员权限 -- 旧
// router.post("/editarticle", async (req, res) => {
//     let edit_article_sql = `
//             UPDATE 
//                 article 
//             SET 
//                 category='${req.body.category}', 
//                 author='${req.body.author}', 
//                 add_date='${req.body.add_date}', 
//                 pub_date='${req.body.pub_date}', 
//                 title='${req.body.title}', 
//                 keywords='${req.body.keywords}', 
//                 description='${req.body.description}', 
//                 content='${req.body.content}' 
//             WHERE id=${parseInt(req.body.id)};
//         `

//     let { err, results, fileds } = await db.async.query(edit_article_sql)
//     if (err == null) {
//         res.send({
//             code: 200,
//             msg: "修改文章成功",
//             rows: results,
//         })
//     } else {
//         res.send({
//             code: 500,
//             msg: "修改文章失败"
//         })
//     }


// })

// 修改文章 --> 管理员权限 -- 新
router.post("/editarticle", async (req, res) => {
    let edit_article_sql = `
        UPDATE 
            article 
        SET 
            category=?, 
            author=?, 
            add_date=?, 
            pub_date=?, 
            title=?, 
            keywords=?, 
            description=?, 
            content=? 
        WHERE id=?;
    `;

    let values = [
      req.body.category,
      req.body.author, 
      req.body.add_date, 
      req.body.pub_date, 
      req.body.title, 
      req.body.keywords, 
      req.body.description, 
      req.body.content, 
      parseInt(req.body.id)
    ];

    try {
        let { err, results, fileds } = await db.async.query(edit_article_sql, values);
        res.send({
            code: 200,
            msg: "修改文章成功",
            rows: results,
        })
    } catch (error) {
        console.error(error);
        res.send({
            code: 500,
            msg: "修改文章失败"
        })
    }
    
});





module.exports = router