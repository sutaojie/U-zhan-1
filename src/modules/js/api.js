let url={
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    rank:'/category/rank',
    subList:'/category/subList',
    cart:'/cart/add',
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    evaluation:'/goods/evaluation',
    addCart: '/cart/add',
    cartLists: '/cart/list',
    cartReduce: '/cart/reduce',
    cartRemove: '/cart/remove',
    cartMrremove: '/cart/mrremove',
    addressLists: '/address/list',
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressUpdate: '/address/update',
    addressSetDefault: '/address/setDefault'
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