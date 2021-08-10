<!--
 * @file: Home
 * @Dsc: 描述
 * @Author wjz
 * @Date 2021/8/9 15:17
-->
<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <h2>首页</h2>
  </div>

</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: "Home",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #f6f6f6;
  }
</style>
