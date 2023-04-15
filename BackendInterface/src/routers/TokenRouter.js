// Token路由
const express = require("express")
const router = express.Router()
const { verifyToken } = require("../utils/tokenUtils.js")
const CheckoutToken = require("../utils/checkoutTokenUtils.js")
const { db } = require("../db/DBUtils.js")

// 检测用户名, 密码, 返回token---接口
router.post("/token", async (req, res) => {

    let get_user_sql = "select * from user"
    let { err, results, fileds } = await db.async.query(get_user_sql)
    if (err == null) {
        const { username, password } = req.body
        const { token, user } = verifyUsernamePassword(username, password, results)

        if (!token) {
            res.send({
                errCode: 10001,
                msg: "用户名或密码不正确",
                request: `${res.method}${res.path}`
            })
            return
        }
        // res.send(token)
        res.send({
            "data": user,
            "token": token
        })
    } else {
        res.send({
            code: 500,
            msg: "检测用户失败"
        })
    }

})


// 检测token有效性---接口
router.post("/token/verify", async (req, res) => {
    const token = req.body.token
    const isValid = CheckoutToken.CheckToken(token)

    res.send(isValid)
})


// 检测用户名, 密码, 返回toke---函数
function verifyUsernamePassword(username, password, users) {
    const index = users.findIndex(user => {
        return user.username == username && user.password == password
    })
    const user = users[index]

    if (!user) {
        return "用户名或者密码错误"
    }
    const token = verifyToken(user.id, user.status)
    return { token, user }
}



module.exports = router