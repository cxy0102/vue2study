<!--
 * @file: Home
 * @Dsc: 描述
 * @Author wjz
 * @Date 2021/8/9 15:17
-->
<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>

</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSwiper from "./childComps/HomeSwiper";

  import {getHomeMultidata} from '@/network/home'

  export default {
  name: "Home",
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar,HomeSwiper
  },created() {
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
      console.log(res);
      console.log(this.recommends);
      console.log(this.banners);
    })
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #f6f6f6;
  }
</style>
