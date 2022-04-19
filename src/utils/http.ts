import axios from 'axios'

const baseUrl = (window as any).g.BASEURL

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