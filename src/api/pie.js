import axios from 'axios'

const instance=axios.create({
    baseURL:'http://rap2.taobao.org:38080/app/mock/262054',
    timeout:6000
})

export function getPieOne(){
    return instance({
        url:'/pie',
        method:'get',
        
    })
}
export function getPieTwo(){
    return instance({
        url:'/pie',
        method:'get'
    })
}