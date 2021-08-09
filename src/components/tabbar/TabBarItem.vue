<!--
 * @file: TabBarItem
 * @Dsc: 描述
 * @Author wjz
 * @Date 2021/8/3 16:21
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-active"></slot>
    <div :class={active:isActive}>
      <slot  name="item-text"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String
  },
  data(){
    return{
      isActive:true
    }
  },methods:{
    itemClick(){
      console.log('itemClick1')
      this.$router.replace(this.path).catch(err=>err)
      console.log('itemClick2')
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: red;
  }
</style>
