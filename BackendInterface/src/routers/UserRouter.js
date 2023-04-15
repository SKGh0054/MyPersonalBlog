//user路由
const express = require("express")
const router = express.Router()
const { db } = require("../db/DBUtils.js")


router.get("/user", async (req, res) => {
    res.send("父级路由")
})

// 注册用户接口
router.post("/useradd", async (req, res) => {
    let search_user_sql = `
        SELECT COUNT(*) as count FROM user WHERE username = '${req.body.username}'
    `
    let results_count = await db.async.query(search_user_sql)
    if (results_count.results[0].count > 0) {
        res.send({
            code: 500,
            msg: "添加用户失败"
        })
    } else {
        let add_user_sql = `
        INSERT INTO user (id, username, password, nickname, status)
        VALUES (null, '${req.body.username}', '${req.body.password}', '${req.body.nickname}', 'consumer');
    `

        let { err, results, fileds } = await db.async.query(add_user_sql)
        if (err == null) {
            res.send({
                code: 200,
                msg: "添加用户成功",
                rows: results,
            })
        } else {
            res.send({
                code: 500,
                msg: "添加用户失败"
            })
        }
    }

})

// 获取所有用户接口 --> 管理员权限
router.get("/userget", async (req, res) => {
    let get_users_sql = "select * from user"
    let { err, results, fileds } = await db.async.query(get_users_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "查询失败"
        })
    }
})

// 按id删除用户接口 --> 管理员权限
router.post("/userdelete", async (req, res) => {
    let delete_users_sql = `DELETE FROM user WHERE id = ${req.body.id}`
    let { err, results, fileds } = await db.async.query(delete_users_sql)
    if (err == null) {
        res.send({
            code: 200,
            msg: "删除用户成功",
            rows: results,
        })
    } else {
        res.send({
            code: 500,
            msg: "删除用户失败"
        })
    }
})

// 模糊查询用户 --> 管理员权限
router.post("/usersearch", async (req, res) => {
    let search_user_sql = `
    SELECT 
        * 
    FROM 
        user
    WHERE 
        username LIKE '%${req.body.keyword}%' 
    OR nickname LIKE '%${req.body.keyword}%'
    OR id LIKE '%${req.body.keyword}%'
    OR status LIKE '%${req.body.keyword}%';
    `
    let { err, results, fileds } = await db.async.query(search_user_sql)
    if (err == null) {
        res.send(results)
    } else {
        res.send({
            code: 500,
            msg: "删除用户失败"
        })
    }
})

// 注册用户接口 --> 管理员权限
router.post("/useraddadmin", async (req, res) => {
    let search_user_sql = `
        SELECT COUNT(*) as count FROM user WHERE username = '${req.body.username}'
    `
    let results_count = await db.async.query(search_user_sql)
    if (results_count.results[0].count > 0) {
        res.send({
            code: 500,
            msg: "添加用户失败"
        })
    } else {
        let add_user_sql = `
        INSERT INTO user (id, username, password, nickname, status)
        VALUES (null, '${req.body.username}', '${req.body.password}', '${req.body.nickname}', '${req.body.status}');
    `

        let { err, results, fileds } = await db.async.query(add_user_sql)
        if (err == null) {
            res.send({
                code: 200,
                msg: "添加用户成功",
                rows: results,
            })
        } else {
            res.send({
                code: 500,
                msg: "添加用户失败"
            })
        }
    }

})

// 修改用户接口 --> 管理员权限
router.post("/usereditadmin", async (req, res) => {
    if (!req.body.id || req.body.id == undefined || req.body.id == null || req.body.id == NaN) {
        res.send({
            code: 500,
            msg: "修改用户失败"
        })
    }
    let search_user_sql = `
        SELECT COUNT(*) as count FROM user WHERE id = ${parseInt(req.body.id)}
    `
    let results_count = await db.async.query(search_user_sql)


    if (results_count.results[0].count != 1) {
        res.send({
            code: 500,
            msg: "修改用户失败"
        })
    } else {
        let edit_user_sql = `
            UPDATE 
                user 
            SET 
                username='${req.body.username}', 
                password='${req.body.password}', 
                nickname='${req.body.nickname}', 
                status='${req.body.status}'
            WHERE id=${parseInt(req.body.id)};
        `

        let { err, results, fileds } = await db.async.query(edit_user_sql)
        if (err == null) {
            res.send({
                code: 200,
                msg: "添加用户成功",
                rows: results,
            })
        } else {
            res.send({
                code: 500,
                msg: "添加用户失败"
            })
        }
    }

})


module.exports = router