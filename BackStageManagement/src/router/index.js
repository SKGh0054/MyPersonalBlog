import { createRouter, createWebHistory } from 'vue-router'

import { h, resolveComponent } from "vue";


export const leftroutes = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ "views/Home/Home.vue"),
        meta: {
            icon: 'home',
            title: '系统首页'
        }
    },
    {
        path: '/usertable',
        name: 'usertable',
        component: () => import(/* webpackChunkName: "usertable" */ "views/UserTable/UserTable.vue"),
        meta: {
            icon: 'table',
            title: '用户表格'
        }
    },
    {
        path: '/tagtable',
        name: 'tagtable',
        component: () => import(/* webpackChunkName: "tagtable" */ "views/TagTable/TagTable.vue"),
        meta: {
            icon: 'international',
            title: '文章标签管理'
        }
    },
    {
        path: '/categorytable',
        name: 'categorytable',
        component: () => import(/* webpackChunkName: "categorytable" */ "views/CategoryTable/CategoryTable.vue"),
        meta: {
            icon: 'tools',
            title: '文章分类管理'
        }
    },
    {
        path: '/articletable',
        name: 'articletable',
        component: () => import(/* webpackChunkName: "articletable" */ "views/ArticleTable/ArticleTable.vue"),
        meta: {
            icon: 'message',
            title: '文章管理'
        }
    },
    {
        path: '/element',
        name: 'element',
        component: () => import(/* webpackChunkName: "chart" */ "views/ElementPlus/ElementPlus.vue"),
        meta: {
            icon: 'element',
            title: '组件相关文档'
        }
    },
    {
        path: '/errorHandle',
        name: 'errorHandle',
        component: { render: () => h(resolveComponent("router-view")) },
        meta: {
            icon: 'error',
            title: '错误处理'
        },
        children: [
            {
                path: '404',
                name: '404',
                component: () => import(/* webpackChunkName: "404" */ "views/Error/404.vue"),
                meta: {
                    title: '404页面'
                },
            },
            {
                path: 'errorLog',
                name: 'errorLog',
                component: () => import(/* webpackChunkName: "errorLog" */ "views/Error/errorLog.vue"),
                meta: {
                    title: '错误日志模拟'
                },
            },
        ]
    },
]





export const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import(/* webpackChunkName: "loginView" */ "views/Login/LoginView.vue")
        },
        ...leftroutes,
        {
            path: "/:catchAll(.*)",
            component: () => import(/* webpackChunkName: "errorHandle" */ "views/Error/404.vue")
        }
    ]
})


// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = `${to.meta.title}-my-admin`
    else document.title = "欢迎来到阿杰的后台管理系统";
    const role = localStorage.getItem('blogAdminUser')
    if (!role && to.path !== '/') next('/')
    else next()
});