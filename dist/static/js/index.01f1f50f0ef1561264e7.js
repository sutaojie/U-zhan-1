webpackJsonp([2],{"035s":function(t,e){},"97Sy":function(t,e){},TFhR:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",rank:"/category/rank",subList:"/category/subList",cart:"/cart/add",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",evaluation:"/goods/evaluation",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrremove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);e.a=n},"U/rD":function(t,e,a){"use strict";var n={filters:{numberFolat:function(t){return parseFloat(t)},numberSplit:function(t){var e=t.toFixed(2);return(e=t.toString().split("."))[0].toString().split("").reverse().map(function(t,e){var a="";return e%3==0&&0!=e&&(t+=","),a+=t}).reverse().join("")+"."+(void 0===e[1]?"00":e[1])}},components:{Foot:a("nq5D").a}};e.a=n},U67u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("97Sy"),s=(a.n(n),a("bCKv")),i=a.n(s),r=a("035s"),o=(a.n(r),a("eChN")),c=(a.n(o),a("7+uW")),d=a("mtWM"),l=a.n(d),u=a("TFhR"),f=a("U/rD"),p=a("nq5D"),h=a("gN+L");c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:3,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists()},mounted:function(){this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,l.a.get(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;t.allLoaded=t.pageSize>a.length,t.lists=t.lists?t.lists.concat(a):a,t.loading=!1,t.pageSize+=1}))},getBanner:function(){var t=this;l.a.get(u.a.banner).then(function(e){t.bannerLists=e.data.lists})}},components:{Foot:p.a,Swipe:h.a},mixins:[f.a]})},eChN:function(t,e){},g1E3:function(t,e){},"gN+L":function(t,e,a){"use strict";var n=a("DNVT"),s=(a("mgS3"),{props:{lists:{type:Array,required:!0},name:{}},created:function(){console.log(this.lists)},mounted:function(){new n.a(".swiper-container",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"},loop:!0})}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl||t}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img||t}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("g1E3")},null,null);e.a=r.exports},hatC:function(t,e){},mgS3:function(t,e){},nq5D:function(t,e,a){"use strict";var n=a("mw3O"),s=a.n(n).a.parse(location.search.substr(1)).index,i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],r={data:function(){return{navConfig:i,curreIndex:parseInt(s)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n===t.curreIndex},on:{click:function(a){t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(t){a("hatC")},null,null);e.a=c.exports}},["U67u"]);
//# sourceMappingURL=index.01f1f50f0ef1561264e7.js.map