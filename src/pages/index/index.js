import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import Foot from 'components/Foot'
import Swipe from 'components/Swipe.vue'
let app = new Vue({
  el:'#app',
  data:{
    lists:null,
    pageNum:1,
    pageSize:3,
    loading:false,
    allLoaded:false,
    bannerLists:null
    
   
    
  },
  created(){
    this.getLists()
    // this.getBanner()
  },
  mounted(){
    this.getBanner()
  },
  methods:{
    getLists(){
      if(this.allLoaded) return
      this.loading = true
      axios.get(url.hotLists,{pageNum:this.pageNum, pageSize:this.pageSize})
      .then((res)=>{
          let curLists = res.data.lists
          // 数据是否加载完毕
          this.allLoaded = this.pageSize > curLists.length ? true: false
          // 获取数据
          this.lists = this.lists ? this.lists.concat(curLists): curLists
          this.loading = false
          this.pageSize += 1
      })
    },
    getBanner(){
      axios.get(url.banner).then((res)=>{
        this.bannerLists =res.data.lists
       
        
      })
    }
  },
  components:{
    Foot,
    Swipe
  },
  mixins:[mixin]
})
