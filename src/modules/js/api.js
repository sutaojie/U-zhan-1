let url={
    hotLists:'/index/hotLists'
}
// 开发环境
let host = 'http://rap2api.taobao.org/app/mock/7058' 
// 真实环境
//let host
for (const key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]         
    }
}

export default url