import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api'
import Velocity from 'velocity-animate'
import Cart from 'js/cartService.js'
import { Array } from 'core-js';
new Vue({
    el:'#app',
    data:{
        lists:null,
        total:0,
        editingShop:null,
        editingShopIndex:-1,
        removePopup:false,
        removeData:null
    },
    computed:{
        allSelected:{
            get(){
                if(this.lists && this.lists.length){
                    return this.lists.every(shop=>shop.selected)
                }
                return false
            },
            set(newVal){
                this.lists.forEach(shop=>{
                    shop.selected = newVal
                    shop.goodsList.forEach(good=>{
                        good.selected = newVal
                    })
                })
            }
        },
        allRemoveSelected:{
            get(){
                if(this.editingShop){
                    return this.editingShop.removeChecked
                }
                return false
            },
            set(newVal){
                if(this.editingShop){
                    this.editingShop.removeChecked = newVal
                    this.editingShop.goodsList.forEach(good =>{
                        good.removeChecked = newVal
                    })
                }
            }
        },
        selectLists(){
            if(this.lists&&this.lists.length){
                let arr =[]
                let total = 0
                this.lists.forEach(shop=>{
                    shop.goodsList.forEach(good=>{
                        if(good.selected){
                            arr.push(good)
                            total += good.price*good.number 
                        }
                    })
                })
                this.total = total
                return arr
            }
            return []
        },
        removeLists(){
            if(this.editingShop){
                let arr =[]
                this.editingShop.goodsList.forEach(good=>{
                    if(good.removeChecked){
                        arr.push(good)
                    }
                })
                return arr
            }
            return []
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            axios.post(url.cartLists).then(res=>{
                let shop = res.data.cartList
                console.log(shop);
                
                shop.forEach((list)=>{
                    list.selected = true,
                    list.removeChecked = false
                    list.editing = false
                    list.editingMsg = '编辑'
                    list.goodsList.forEach(good =>{
                        good.selected = true
                        good.removeChecked = false
                    })
                    
                })
                this.lists = shop
            })
        },
        getCheck(shop,goods){
            let attr = this.editingShop ? 'removeChecked' : 'selected'
            goods[attr] = !goods[attr]
            shop[attr] = shop.goodsList.every(good => { return good[attr]})
        },
        selectShop(shop){
            let attr = this.editingShop ? 'removeChecked' : 'selected'
            shop[attr] = !shop[attr]
            shop.goodsList.forEach(good=>{good[attr] = shop[attr]})
        },
        selectAll(){
            let attr = this.editingShop ? 'allRemoveSelected' : 'selected'
            this[attr]= !this[attr]
        },
        edit(shop, shopIndex){
            shop.editing = !shop.editing
            shop.editingMsg = shop.editing ? '完成' : '编辑'
            this.lists.forEach((item, i)=>{
                if(shopIndex !== i){
                    item.editing = false
                    
                    item.editingMsg = shop.editing ? '' : '编辑'
                  
                }
            }),
            this.editingShop = shop.editing?shop:null
            this.editingShopIndex = shop.editing ? shopIndex : -1
        },
        reduce(good){
            if(good.number === 1) return
            // axios.post(url.cartReduce, {
            //     id: good.id,
            //     number:1
            // }).then(res=>{
            //     good.number -=1
            // })

            Cart.reduce(good.id).then(res=>{
                good.number -=1
            })
        },
        add(good){
            // axios.post(url.addCart, {
            //     id: good.id,
            //     number:1
            // }).then(res=>{
            //     good.number +=1
            // })

            Cart.add(good.id).then(res=>{
                good.number +=1
            })
        },
        remove(shop,shopIndex,good,goodIndex){
            this.removePopup = true
            this.removeData = {shop,shopIndex,good,goodIndex}
        },
        removeConfirm(){
            let {shop,shopIndex,good,goodIndex} = this.removeData
            axios.post(url.cartRemove,{
                id:good.id
            }).then(res=>{
                shop.goodsList.splice(goodIndex,1)
                if(!shop.goodsList.length){
                    this.lists.splice(shopIndex,1)
                    this.removeShop()
                }
                this.removePopup = false
            })
        },
        removeShop(){
            this.eidtingShop = null
            this.editingShopIndex = -1
            this.lists.forEach(shop=>{
                shop.editing = false
                shop.editingMsg = '编辑'
            })
        },
        start(e,item){
            item.startX = e.changedTouches[0].clientX
        },
        end(e, shopIndex,item,goodsIndex){
            let endX = e.changedTouches[0].clientX
            let left = '0'
            if(item.startX - endX >20){
                left = `-60px`
            }
            if( endX - item.startX > 20){
                left = `0px`
            }
            Velocity(this.$refs[`goods-${shopIndex}-${goodsIndex}`],{left})
        }
    }
})
