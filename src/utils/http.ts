import axios from 'axios'

const baseUrl = (window as any).g.BASEURL

let loading = null //定义loading变量

//开始 加载loading
let startLoading=()=>{
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
//结束 取消loading加载
let endLoading=()=>{
  loading.close()
}

//showFullScreenLoading() 与 tryHideFullScreenLoading() 目的是合并同一页面多个请求触发loading

let needLoadingRequestCount = 0 //声明一个变量

let showFullScreenLoading=()=> {
    if (needLoadingRequestCount === 0) { //当等于0时证明第一次请求 这时开启loading
        startLoading()
    }
    needLoadingRequestCount++ //全局变量值++ 
}

let tryHideFullScreenLoading=()=> {
    if (needLoadingRequestCount <= 0) return //小于等于0 证明没有开启loading 此时return
    needLoadingRequestCount-- //正常响应后 全局变量 --
    if (needLoadingRequestCount === 0) {  //等于0 时证明全部加载完毕 此时结束loading 加载
        endLoading()
    }
}


const getRequest = (url: string, params?: object) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/${url}`, { params }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

const postRequest = (url: string, params: object) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/${url}`, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
export {
    getRequest as get, postRequest as post
}