import axios from 'axios'

const instance=axios.create({
    baseURL:'http://rap2.taobao.org:38080/app/mock/262054/',
    timeout:6000
})

export function getBarOne(){
    return instance({
        url:'/bar2',
        method:'get'
    })
}
export function getBarTwo(){
    return instance({
        url:'/bar2',
        method:'get'
    })
}
export function getBarThree(){
    return instance({
        url:'/bar2',
        method:'get'
    })
}