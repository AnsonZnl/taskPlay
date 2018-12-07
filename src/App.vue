<template>
  <div id="app">
    <van-nav-bar
      title=""
      left-text="PlayTask"
      right-text="成就值 30 "
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- <img src="./assets/logo.png"> -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="records" to="/">任务</van-tabbar-item>
      <van-tabbar-item icon="shop" to="/reward">奖励</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/mine'>我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      active: 0,//当前选中标签
      
    }
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
    },
    onClickRight() {
      // Toast('按钮');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
