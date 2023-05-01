const express = require("express")
const path = require("path");

const app = express()  // 创建服务器
const port = 7777  // 服务器端口


// 设置跨域
app.use(function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

// 解析json格式数据
app.use(express.json())


// 注册路由
app.use("/api", require("./src/routers/test.js")) // 测试路由

app.use("/api", require("./src/routers/TagsRouter.js"))  // tags路由
app.use("/api", require("./src/routers/ArticleRouter.js"))  // article路由
app.use("/api", require("./src/routers/CategorysRouter.js"))  // category路由
app.use("/api", require("./src/routers/TokenRouter.js"))  // token路由
app.use("/api", require("./src/routers/UserRouter.js"))  // user路由
app.use("/api", require("./src/routers/CategoryArticleMap.js"))  // category_article映射路由
app.use("/api", require("./src/routers/ArticleCommentsRouter.js"))  // articleComments路由


app.get("/api", (req, res) => {

    res.sendFile(path.join(__dirname, "/public/link.html"));

})

app.listen(port, () => {
    console.log(`服务器启动成功: http://localhost:${port}/api`);
})