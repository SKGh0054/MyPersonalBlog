// 简单封装axios
import axios from 'axios';

export function request(config) {

    // 创建axios实例
    const instance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_BASEURL, // 接口基本地址
        timeout: 5000, // 请求超时时间
    });

    // 请求拦截器
    instance.interceptors.request.use(
        config => {
            // 在这里可以对请求进行一些操作，比如添加token等
            return config;
        },
        error => {
            // 处理请求发送失败的情况
            return Promise.reject(error);
        }
    );

    // 响应拦截器
    instance.interceptors.response.use(
        response => {
            // 在这里可以对响应进行一些操作，比如解析数据等
            return response;
        },
        error => {
            // 处理响应错误的情况
            return Promise.reject(error);
        }
    );

    return instance(config)
}