<template>
  <div id="wode">
    <ul class="top" :style="background">
      <li class="top-li">
        <p><img src="../../../static/gou.jpg" /></p>
        <p>
          <span @click="denglu">立即登录</span>
          <span>登录体验更多功能</span>
        </p>
      </li>
      <li class="top-li2">
        <p v-for="(thr,id) in arr" :key="id">
          <span>{{ thr.shuzi }}</span>
          <span>{{ thr.tit }}</span>
        </p>
      </li>
    </ul>
    <ul class="midd">
      <li>
        <p>全部订单</p>
        <p>查看全部订单 ></p>
      </li>
      <li>
        <p v-for="(fi,id) in arr2" :key="id">
          <img :src="fi.img" />
          <span>{{ fi.tit }}</span>
        </p>
      </li>
    </ul>
    <ul class="chang">
      <p>常用工具</p>
      <li v-for="(cha,id) in arr3" :key="id">
        <img :src="cha.img" @click="tiaozhuan" />
        <span>{{ cha.tit }}</span>
      </li>
    </ul>
    <ul class="last">
      <li>隐私政策</li>
      <li>用户协议</li>
      <li>意见反馈</li>
    </ul>
    <ul class="bott">
      <li><img src="../../../static/ximaiwang.png" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wode',
  data () {
    return {
      background: {
        backgroundImage:
          'url(' + require('../../../static/wode-beijing.jpg') + ')',
        width: '100%',
        height: '1.5rem',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      arr: [
        { shuzi: '99999', tit: '余额' },
        { shuzi: '9999', tit: '积分' },
        { shuzi: '999', tit: '优惠劵' }
      ],
      arr2: [
        { img: '../../../static/daishoukuan.png', tit: '待付款' },
        { img: '../../../static/daifahuo.png', tit: '待发货' },
        { img: '../../../static/daishouhuo.png', tit: '待收货' },
        { img: '../../../static/daipiingjia.png', tit: '待评价' },
        { img: '../../../static/tuikuan.png', tit: '退款' }
      ],
      arr3: [
        { img: '../../../static/qiandao.png', tit: '签到' },
        { img: '../../../static/gerenziliao.png', tit: '个人资料' },
        { img: '../../../static/dizhi.png', tit: '收货地址' },
        { img: '../../../static/youhuiquan.png', tit: '优惠券' },
        { img: '../../../static/pindan.png', tit: '我的拼单' },
        { img: '../../../static/gouwu.png', tit: '我的速购' },
        { img: '../../../static/wodeguanzhu.png', tit: '我的关注' },
        { img: '../../../static/wodezuji.png', tit: '我的足迹' },
        { img: '../../../static/jifenduihuandingdan.png', tit: '积分兑换' },
        { img: '../../../static/fenxiaozhongxin.png', tit: '分销中心' },
        { img: '../../../static/wodekanjia.png', tit: '我的砍价' },
        { img: '../../../static/yushou.png', tit: '我的预售' }
      ]
    }
  },
  methods: {
    tiaozhuan (a) {
      console.log(a)
      this.$router.push({path: '/src/views/wode/WoDe/addres.vue'})
    },
    denglu () {
      console.log(1)
      this.$router.push({path: '/src/views/wode/WoDe/denglu.vue'})
    }
  }
}
</script>

<style scoped="scoped">
#wode {
  width: 100%;
  height: 100%;
  font-size: 0.13rem;
  background: #f0f0f0;
}
#wode .top {
  width: 100%;
  height: 25%;
}
.top li {
  width: 85%;
  margin: 0 auto;
  font-size: 0.18rem;
  display: flex;
  color: white;
}
.top .top-li2 p {
  width: 33%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-right: 1px solid white;
  margin: 0.15rem 0;
  font-size: 0.13rem;
}
.top .top-li2 p:last-child {
  border: none;
}
.top .top-li2 p span {
  text-align: center;
}
.top .top-li2 p span {
  width: 100%;
}
.top .top-li p {
  margin: 0.15rem 0;
  font-size: 0.2rem;
}
.top .top-li p:first-child {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  background-color: white;
}
.top .top-li p:last-child {
  width: 40%;
  display: flex;
  flex-wrap: wrap;
}
.top .top-li p span {
  width: 100%;
  margin-left: 0.15rem;
  margin-top: 0.05rem;
}
.top .top-li p img {
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 0.26rem;
  margin: 0.04rem;
}
.top .top-li p span:last-child {
  font-size: 0.13rem;
}
.midd {
  width: 100%;
  background-color: white;
}
.midd li {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.midd li:first-child {
  border-bottom: 1px dashed black;
}
.midd li p {
  display: flex;
  flex-wrap: wrap;
}
.midd li p img {
  width: 0.35rem;
  height: 0.35rem;
  display: inherit;
  margin: 0 auto;
}
.midd li p span {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.chang {
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.1rem;
}
.chang p {
  width: 90%;
  margin: 0 auto;
  padding: 0.1rem 0;
}
.chang li {
  width: 22%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.05rem;
}
.chang li img {
  width: 0.35rem;
  height: 0.35rem;
  display: inherit;
  margin: 0 auto;
}
.chang li span {
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 0.1rem;
  opacity: 0.8;
}
.last {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.1rem 0;
}
.last li {
  width: 20%;
  border-right: 1px solid black;
  text-align: center;
  opacity: 0.9;
}
.last li:last-child {
  border: none;
}
.bott {
  width: 100%;
  height: 0.8rem;
}
.bott li {
  width: 50%;
  margin: 0 auto;
}
.bott li img {
  width: 50%;
  display: inherit;
  margin: 0 auto;
}
</style>
