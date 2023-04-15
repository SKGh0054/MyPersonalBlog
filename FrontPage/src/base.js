// 将ant-design-vue中无法按需引入的组件挂载到全局
import { message, notification } from 'ant-design-vue';
import "ant-design-vue/es/message/style/css"
import "ant-design-vue/es/notification/style/css"

// 引入封装的组件
import ArticleItem from "./components/ArticleItem.vue"
import AsideBox from "./components/AsideBox.vue"


export default {
    install(app) {
        // 挂载全局对象
        app.config.globalProperties.$message = message;
        app.config.globalProperties.$notification = notification;

        // 挂载全局组件
        app.component("ArticleItem", ArticleItem);
        app.component("AsideBox", AsideBox)
    }
}