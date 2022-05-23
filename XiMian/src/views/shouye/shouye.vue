<template>
  <div class="box">
    <div>
      <van-sticky>
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
        />
      </van-sticky>
      <!-- <div>
        <ul v-for="(shu,id) in shuju" :key="id">
          <li>{{shu[0].much}}</li>
        </ul>
      </div> -->
      <van-swipe :autoplay="3000" class="van-sw">
        <van-swipe-item v-for="(item, index) in arr" :key="index" class="van-it">
          <img v-lazy="item.img" class="van-img"/>
        </van-swipe-item>
      </van-swipe>
      <ul class="two-ul">
        <li v-for="(two, id) in arr1" :key="id">
          <img :src="two.img" />
          <p>{{ two.name }}</p>
        </li>
      </ul>
      <ul class="shouye-thr">
        <li class="thr-top">
          <img src="../../../static/shouye-youguui.png" />
        </li>
        <div id="">
          <li class="thr-mid">
            <img src="../../../static/pintuan.png" />
            <p>更多拼团></p>
          </li>
          <li class="shouye-bott">
            <p v-for="(on, id) in arr4" :key="id">
              <img :src="on.img" />
              <span>{{ on.tit }}</span>
            </p>
          </li>
        </div>
      </ul>
      <div class="fotter">
        <p class="p"><img src="../../../static/xianshizhekou.jpg" /></p>
        <ul class="div-ul" v-for="(shang, id) in shuju" :key="id">
          <p><img src="../../../static/dazhe.jpg" /></p>

          <li
            class="ul-li"
            v-for="(shang, id) in shuju"
            @click="tiaozhuan(shang)"
            :key="id"
          >
            <ul>
              <li><img :src="shang[0].img" /></li>
              <li class="ab">{{ shang[0].title }}</li>
              <li class="ab">
                <span>￥{{ shang[0].many }}</span>
                <span>已售{{ shang[0].xiaoliang }}件</span>
              </li>
              <li class="ab">￥{{ shang[0].much }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Swipe, SwipeItem, Lazyload, Search, Sticky } from 'vant'

export default {
  name: 'shouye',
  methods: {
    tiaozhuan (shang) {
      var add = shang
      this.$router.push({path: '/src/views/shouye/ShouYE/goumaiye.vue', query: add})
    }
  },
  computed: {
    ...mapState(['shuju', 'mess'])
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [Search.name]: Search,
    [Sticky.name]: Sticky
  },
  data () {
    return {
      value: '',
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      shuzu: [],
      arr: [
        { img: '../../../static/4564 (1).webp' },
        { img: '../../../static/4564 (2).webp' },
        { img: '../../../static/7987.webp' }
      ],
      arr1: [
        { img: '../../../static/nvsheng.png', name: '女装' },
        { img: '../../../static/nanzhuang.png', name: '男装' },
        { img: '../../../static/xiebaoo.png', name: '鞋包' },
        { img: '../../../static/tongzhuang.png', name: '童装' },
        { img: '../../../static/neiyi.png', name: '内衣' },
        { img: '../../../static/meizhuang.png', name: '彩妆护肤' },
        { img: '../../../static/jiaju.png', name: '家居家电' },
        { img: '../../../static/diannao.png', name: '手机数码' },
        { img: '../../../static/chaoshi.png', name: '生活超市' },
        { img: '../../../static/shoubiao.png', name: '手机配件' }
      ],
      arr4: [
        { img: '../../../static/one-1.jpg', tit: '特价商品' },
        { img: '../../../static/two-2.jpg', tit: '特价商品' },
        { img: '../../../static/the-3.jpg', tit: '特价商品' }
      ]

    }
  },

  created () {
    var shuzus = this.shuzu
    // console.log(shuzus)
    // localStorage.setItem('shuzu', JSON.stringify(shuzus))
    // var jieshou = JSON.parse(localStorage.getItem('goumessage')) || ''
    var jieshou = this.$store.state.gouwuche
    // console.log(jieshou)
    if (jieshou === '') {
      // 第一步
      localStorage.setItem('shuzu', JSON.stringify(shuzus))
      // console.log(shuzus)
    } else {
      shuzus.push.apply(shuzus, jieshou)
      // console.log(shuzus)
      // 第一步
      localStorage.setItem('shuzu', JSON.stringify(shuzus))
      // console.log(shuzus)
    }

    this.$store.commit('mess')
  }
}
</script>

<style scoped="scoped">
.box {
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
}
.van-sw{
  width: 90%;
  margin: 0 auto;
  height: 1.5rem;
}
.van-sw .van-it{
  width: 100%;
  height: 1.5rem;
}
.van-sw .van-it .van-img{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.two-ul {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.two-ul li {
  width: 20%;
  padding: 0.1rem 0;
}
.two-ul li img {
  width: 0.4rem;
  height: 0.35rem;
  margin: 0 auto;
  opacity: 0.8;
  display: inherit;
}
.two-ul li p {
  font-size: 0.13rem;
  text-align: center;
  font-weight: 900;
}
.shouye-thr {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.shouye-thr .thr-top {
  margin: 0 auto;
}
.shouye-thr .thr-top img {
  width: 100%;
  opacity: 1;
}
.shouye-thr li {
  width: 90%;
  display: flex;
  margin: 0 auto;
  font-size: 0.14rem;
  justify-content: space-between;
}
.shouye-thr .thr-mid {
  padding: 0.1rem 0;
}
.shouye-thr .thr-mid img {
  width: 0.8rem;
}
.shouye-thr .shouye-bott p {
  width: 30%;
}
.shouye-thr .shouye-bott p img {
  width: 100%;
}
.shouye-thr .shouye-bott p span {
  width: 100%;
}
.shouye-thr div {
  width: 90%;
  margin: 0 auto;
  background: linear-gradient(pink, white, white, pink);
}
.fotter {
  width: 100%;
}
.fotter .p {
  width: 90%;

  margin: 0 auto;
}
.fotter .p img {
  width: 100%;
}
.fotter .div-ul {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.fotter .div-ul p {
  width: 100%;
}
.fotter .div-ul p img {
  width: 100%;
  /*border: 1px solid black;*/
}

.fotter ul .ul-li {
  width: 50%;
  margin: 0.1rem 0;
  /*font-size: 0.05rem;*/
}
.fotter ul .ul-li ul li {
  width: 90%;

  font-weight: 400;
  margin: 0 auto;
  font-size: 0.12rem;
  /* border: 1px solid black; */
}
.fotter ul .ul-li ul li:first-child {
  width: 90%;
  height: 1.53rem;
  margin: 0 auto;
}
.fotter ul .ul-li ul .ab {
  width: 80%;
}
.fotter ul .ul-li ul li:nth-child(3) {
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 0.1rem;
}
.fotter ul .ul-li ul li:nth-child(3) span:first-child {
  text-decoration: line-through;
}
.fotter ul .ul-li ul li:last-child {
  font-weight: 800;
  color: red;
}
.fotter ul .ul-li ul li img {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
}
</style>
