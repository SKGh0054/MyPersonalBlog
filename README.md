# 🥳我的个人博客🥳

### 前言
基于Vue 3.2.x + Vite4.x + Pinia + Element-Plus + Vue-router + Axios+ Scss + Express等等开发的个人博客系统，vue3.2的compositionAPI非常的好用就更写原生js一样舒畅。


### 项目功能
###### 前端页面
*  **Vue3.2**开发，单文件组件.vue，setup语法糖的使用。
* 采用**vite**代替vue-cli进行项目开发，速度确实快，但是感觉热跟新不是很顺畅。
* 使用**Pinia**代替Vuex，轻量、简单，真香。
* 前端组件库采用**ant-design-vue**组件库，也尝试了其他的组件库如**bulma**的css样式。
* 自行封装**axios**，调用后端接口

###### 后端接口
* 一开始没有确定接口的需求所以使用**mock.js**模拟生成后端数据进行表格增删改查，利用**axios**请求数据。
* 前端页面完成后确定了所要的接口需求采用**nodejs**库。**express**快速开发api接口。
* **mysql2**库操作数据库且自行封装了一个异步的MySQL操作小工具DButil.js。
* 使用**jsonwebtoken**库做了JWT认证机，是目前最流行的跨域认证解决方案。
* **nodemon**解决后端api的热更新问题。

###### 后台管理系统
* 首页做了俩表，一个用于观察各个分类-文章的数量，另一个因为还没有做线上所以只写了死数据展示文章的每日访问量。
* 首页还做了点小功能及美化。
* 其他页主要做了增删改查的操作，主要是逻辑方面的操作，本来想要用富文本ormarkdown编辑器来做的，没办法时间太紧了先凑合把。
* 封装echarts实现图表，采用到了lodash的debounce自适应防抖，防止请求过于平凡。
* 采用vue-router进行路由跳转。
* 404页面是从codepen拉一个比较有趣的gif动画。
* screenfull插件实现全屏功能。

### 使用
**配置mysql数据库, 及使用blog.sql快速搭建数据库**
***
**打开终端进入后端接口BackendInterface文件夹**
```
cd BackendInterface
```
**下载所有依赖**
```
npm install
```
**运行后端程序**
```
npm run dev
```
***
**打开终端进入后台管理BackStageManagement文件夹**
```
cd BackStageManagement
```
**下载所有依赖**
```
npm install
```
**运行后台管理程序**
```
npm run dev
```
***
**打开终端进入前端页面FrontPage文件夹**
```
cd FrontPage
```
**下载所有依赖**
```
npm install
```
**运行前端程序**
```
npm run dev
```
***
### 在合适的网址下打开网站