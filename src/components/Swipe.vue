<template>
    <div class="swiper-container">
    <div class="swiper-wrapper" >
    <div class="swp-page swiper-slide" v-for="list in lists">
    <a class="js-no-follow" :href="list.clickUrl||list">
        <img class="goods-main-photo fadeIn" :src='list.img||list'>
    </a>
    </div>
   
</div>
 <div class="swiper-pagination"></div>    
</div>

</template>

<script>
 import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
    export default {
        props:{
            lists:{
                type:Array,
                required:true
            },
            name:{}
    },
    created(){
        console.log(this.lists);
        
    },
    mounted(){
        new Swiper('.swiper-container', {
            effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      loop:true
        })
    }
    }
</script>

<style>
.goods-main-photo{
    width: 100%;
    height: 100%;
}

</style>
