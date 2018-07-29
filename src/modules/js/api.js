let url={
    hotLists:'/index/hotLists'
}
// 开发环境
let host = 'http://rapapi.org/mockjsdata/31797' 
// 真实环境
//let host
for (const key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]         
    }
}

export default url