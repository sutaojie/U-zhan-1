import './category.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import mixin from 'js/mixin'
import url from 'js/api.js';

new Vue({
    el:'#app',
    data:{
        topLists:null,
        topIndex: 0,
        subData:null,
        rankData:null,
        nn:1234567890.99
        
    },
    created(){
        this.getTopLists()
        this.getSubList(0,0)
    },
    methods:{
        getTopLists(){
            axios.post(url.topList).then(res =>{
                this.topLists = res.data.lists
            }).catch(res =>{

            })
        },
        getSubList(id,index){
            this.topIndex = index
            if(index === 0){
                this.getRank()
            }else{
                axios.post(url.subList, {id}).then(res =>{          
                    this.subData = res.data.data
                })
            }
            
        },
        getRank(){
            axios.post(url.rank).then(res =>{
                this.rankData = res.data.data
            })
        },
        toSearch({id,name}){
            location.href = `search.html?keyword=${name}&id=${id}`
            
        }
    },

    
    
    mixins:[mixin]
})

