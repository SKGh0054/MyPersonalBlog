// 测试路由
const express = require("express")
const router = express.Router()
const { db } = require("../db/DBUtils.js")


router.get("/test", async (req, res) => {
    res.send("aa")
})


module.exports = router