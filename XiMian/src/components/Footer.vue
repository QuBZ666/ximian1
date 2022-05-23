<template>
    <div id="box">
        <ul class="ul">
        <van-tabbar v-model="active" >
          <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
          <van-tabbar-item icon="search" to="/two">分类</van-tabbar-item>
          <van-tabbar-item icon="friends-o" to="/three">购物车</van-tabbar-item>
          <van-tabbar-item icon="setting-o" to="/four">我的</van-tabbar-item>
        </van-tabbar>
        </ul>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Footer',
  data () {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }

}
</script>

<style  scoped="scoped">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#box .ul {
  width: 100%;
  display: flex;
  border: 1px solid black;
  justify-content: space-around;
  background-color: white;
  position: fixed;
  bottom: 0;
  padding: 0.1rem 0;
}
#box .ul .van-tabbar {
  /* font-size: 0.2rem; */
  text-align: center;
}
/* #box .ul li a {
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
}
#box .ul li a i {
  text-align: center;
} */
</style>
