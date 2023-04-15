import { useErrorStore } from "@/store";
// 向全局错误管理状态添加错误信息
const errorHandler = (err, vm, info) => {
    const url = window.location.href
    const errorStore = useErrorStore()
    console.error("哎呀出错啦", err, vm, info)
    errorStore.addErrorLogs({ url, err, vm, info })
}
export default errorHandler