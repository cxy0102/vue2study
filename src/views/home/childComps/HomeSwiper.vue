<!--
 * @file: HomeSwiper
 * @Dsc: 描述
 * @Author wjz
 * @Date 2021/8/11 17:05
-->
<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper,SwiperItem } from '@/components/common/swiper'

export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  },
  components:{
    Swiper,SwiperItem
  }
}
</script>

<style scoped>

</style>
