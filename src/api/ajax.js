// 引入axios
import axios from 'axios';
// 暴露接口
export default function ajax (url, data={}, type='GET') {
    // 返回promise对象
    return new Promise(function(resolve, reject) {
        // 执行异步ajax请求
        let promise
        // 判断请求类型
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = ''//数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios,post(url, data)
        }
        // 监听回调
        promise.then(function(response) {
            // 成功时执行的方法
            resolve(response.data)
        }).catch(function(error) {
            // 失败时执行的方法
            reject(error)
        })
    })
}