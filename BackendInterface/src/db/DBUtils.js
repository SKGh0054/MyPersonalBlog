const mysql = require("mysql2")

const db = mysql.createPool({  // 创建链接池
    host: "localhost",
    user: "root",
    password: "123456",
    database: "blog",
    pool: {  // 链接池配置
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

// 封装mysql 返回promise
db.async = {}
db.async.query = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results, fileds) => {
            if (err) {
                console.log("数据库连接失败！")
                reject(err)
            }
            resolve({ results, fileds })
        })
    })
}

module.exports = { db }