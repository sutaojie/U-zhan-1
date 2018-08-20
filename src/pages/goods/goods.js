import './goods_common.css'
import './goods_custom.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_theme.css'
import './goods.css'
import './goods_transition.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api'
import mixin from 'js/mixin'
import qs from 'qs'
import Swipe from '../../components/Swipe'

let {id} = qs.parse(location.search.substr(1))
let deatilTab = ['商品详情', '本店成交']
new Vue({
    el:'#app',
    data:{
        id:id,
        details:null,
        deatilTab,
        tabIndex:0,
        isShow:false,
        dealData:null,
        skuType:1,
        skuShow:false,
        showAddMessage:false,
        skuNum: 1,
        isAddCart: false

    },
    created(){
        this.getDetails()
    } ,
    methods:{
        getDetails(){
            axios.post(url.details, {id}).then(res =>{
                this.details = res.data.data
               
                
            })
        },
        changeTab(index){
            if(index === this.tabIndex) return ;
            this.tabIndex = index
            
            this.isShow = !this.isShow
            this.getDeal()
            
        },
        getDeal(){
            axios.post(url.deal, {id}).then(res =>{
                this.dealData = res.data.data
                
                
            })
        },
        chooseSku(type){
            this.skuType = type
            document.documentElement.scrollTop = 0
            this.skuShow = true
        },
        changeSkuNum(num){
            if(this.skuNum <= 1 && num < 0 ) return ;
            this.skuNum += num
        },
        addCart(){
            axios.post(url.addCart,{
                id,
                number:this.skuNum
            }).then(res =>{
               
                
                if(res.data.status === 200){
                    document.documentElement.scrollTop = 0
                    this.skuShow = false
                    this.isAddCart = true
                    this.showAddMessage = true
                    setTimeout(()=>{
                        this.showAddMessage = false
                    }, 1000)
                }
            })
        }
       
    },
    watch:{
        skuShow(val, oldVal){
            document.body.style.overflow = val?'hidden':'auto'
            document.querySelector('html').style.overflow = val?'hidden':'auto'
            document.body.style.height = val?'100%':'auto'
            document.querySelector('html').style.height = val?'100%':'auto'
        }
    },
    components:{
        Swipe
    },
    mixins: mixin
})