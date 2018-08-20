import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import mixin from 'js/mixin'
import url from 'js/api'
import qs from 'qs'
import Velocity from 'velocity-animate'
//第三方库解析 URL
let {keyword, id} = qs.parse(location.search.substr(1))
new Vue({
    el:'#app',
    data:{
       
        searchList: null,
        keyword,
        isShow:false
       
    },
    created(){
        this.getSearchList()
    },
    methods:{
        getSearchList(){
            axios.post(url.searchList, {keyword, id}).then(res=>{
                this.searchList = res.data.lists
                console.log(res);
                
            })
        },
        move(){
         
            // console.log(document.body.scrollTop);
            // console.log(document.documentElement.scrollTop);
            
            
            if(document.documentElement.scrollTop > 100){
                this.isShow =true
            }else{
                this.isShow =false
            }
        },
        toTop(){//第三方库回到顶部
            Velocity(document.documentElement, 'scroll', {duration: 1000}) 
        }
    },
    mixins:[mixin]
    
})