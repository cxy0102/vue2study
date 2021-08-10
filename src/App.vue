<template>

  <div id="app">
    <router-view></router-view>
<!--    <tab-bar>-->
<!--      <tab-bar-item path="/home">-->
<!--        <img slot="item-icon"  src="./assets/img/tabbar/home.svg">-->
<!--        <img slot="item-active"  src="./assets/img/tabbar/home_active.svg">-->
<!--        <div slot="item-text"> 首页</div>-->
<!--      </tab-bar-item>-->
<!--      <tab-bar-item path="/category">-->
<!--        <img slot="item-icon"  src="./assets/img/tabbar/category.svg">-->
<!--        <img slot="item-active"  src="./assets/img/tabbar/category_active.svg">-->
<!--        <div slot="item-text" >分类</div>-->
<!--      </tab-bar-item>-->
<!--      <tab-bar-item path="/cart">-->
<!--        <img slot="item-icon"  src="./assets/img/tabbar/shopcart.svg">-->
<!--        <img slot="item-active"  src="./assets/img/tabbar/shopcart_active.svg">-->
<!--        <div slot="item-text" >购物车</div>-->
<!--      </tab-bar-item>-->
<!--      <tab-bar-item path="/profile">-->
<!--        <img slot="item-icon"  src="./assets/img/tabbar/profile.svg">-->
<!--        <img slot="item-active"  src="./assets/img/tabbar/profile_active.svg">-->
<!--        <div slot="item-text" >我的</div>-->
<!--      </tab-bar-item>-->
<!--    </tab-bar>-->

<!--  </div>-->

<!--    <tab-bar>-->
<!--      <tab-bar-item path="/home" activeColor="red">-->
<!--        <template v-slot:item-icon><img  src="./assets/img/tabbar/home.svg"></template>-->
<!--        <template v-slot:item-active><img  src="./assets/img/tabbar/home_active.svg"></template>-->
<!--        <template v-slot:item-text><div>首页</div></template>-->
<!--      </tab-bar-item>-->
<!--      <tab-bar-item path="/category" activeColor="blue">-->
<!--        <template v-slot:item-icon><img  src="./assets/img/tabbar/category.svg"></template>-->
<!--        <template v-slot:item-active><img  src="./assets/img/tabbar/category_active.svg"></template>-->
<!--        <template v-slot:item-text><div>分类</div></template>-->
<!--      </tab-bar-item>-->
<!--      <tab-bar-item path="/cart" activeColor="green">-->
<!--        <template v-slot:item-icon><img  src="./assets/img/tabbar/shopcart.svg"></template>-->
<!--        <template v-slot:item-active><img  src="./assets/img/tabbar/shopcart_active.svg"></template>-->
<!--        <template v-slot:item-text><div>购物车</div></template>-->
<!--      </tab-bar-item>-->
<!--      <tab-bar-item path="/profile">-->
<!--        <template v-slot:item-icon><img  src="./assets/img/tabbar/profile.svg"></template>-->
<!--        <template v-slot:item-active><img  src="./assets/img/tabbar/profile_active.svg"></template>-->
<!--        <template v-slot:item-text><div>我的</div></template>-->
<!--      </tab-bar-item>-->
<!--    </tab-bar>-->
  <main-tabbar></main-tabbar>
  </div>
</template>

<script>
// import TabBar from "@/components/tabbar/TabBar";
// import TabBarItem from "@/components/tabbar/TabBarItem";
import MainTabbar from "./components/content/mainTabbar/MainTabbar";


export default {
  name: 'app',
  components: {
    //TabBar,TabBarItem
    MainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
