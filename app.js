const express = require("express")
const app = new express()
const globalConfig = require("./config")
const loader = require("./loader")
// const filterSet = require('./filterLoader')
const cookie = require("cookie-parser")
const bodyParser = require('body-parser')
const multer = require('multer')
//multer用于传输文件，文件可以存磁盘也可以存数据库，推荐存在磁盘上

const uploadSingle = multer({dest: './file/'})

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","http://localhost:8080");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() === 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
    //拦截器
    // for ( let i of filterSet) {
    //     if (!i(req, res)) {
    //         return;
    //     }
    // }
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookie())
app.use(express.static(globalConfig.page_path))

app.get("/api/*", (req, res, next) => {
    console.log("cookies:", req.cookies)
    next()
})


loader.init(app)


app.listen(3000)
