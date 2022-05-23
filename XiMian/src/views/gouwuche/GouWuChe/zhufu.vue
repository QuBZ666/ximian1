<template>
    <div class="box">
      <div class="fanhui">
        <van-nav-bar
          title="提交订单"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"

        />
      </div>
      <div class="top" @click="jiji">
        <ul>
          <li>
            <span>{{address.name}}</span>
            <span>{{address.tel}}</span>
            </li>
          <li>{{address.address}}</li>
        </ul>
        <ul>
          <li>></li>
        </ul>
      </div>
      <div class="zhong" >
         <div class="for" v-for="(shu,id) in adds" :key="id">
            <ul>
              <li><img :src="shu.img" alt="" @click="jiji"></li>
            </ul>
            <ul>
              <li>{{shu.tit}}</li>
              <li>尺码:{{shu.sizes}}</li>
              <li><span>￥{{shu.much*0.01}}</span><span>x{{shu.num}}</span></li>
            </ul>
         </div>
         <div class="mess">
           <ul>
             <li><span>活动优惠</span><span>满额包邮</span></li>
             <li><van-field
                rows="1"
                autosize
                label="留言"
                type="textarea"
                placeholder="请输入留言"
              /></li>
             <li><span>商品金额</span><span>￥{{much}}</span></li>
           </ul>
         </div>
      </div>
      <div class="bottom">
        <ul>
          <li style="font-style:italic">共{{num}}件</li>
          <li>合计:<span>￥{{much}}</span></li>
          <li @click="tijiao">提交订单</li>
        </ul>
      </div>

    </div>
</template>

<script>
import { Field, NavBar } from 'vant'
export default {
  name: 'zhufu',
  data () {
    return {
      address: '',
      shuju: this.$route.query,
      value: '',
      adds: '',
      much: '',
      num: ''
    }
  },
  components: {
    [Field.name]: Field,
    [NavBar.name]: NavBar
  },
  methods: {
    jiji () {
      console.log(this.shuju)
      this.$router.push({path: '/src/views/wode/WoDe/addres.vue'})
    },
    onClickLeft () {
      this.$router.push({path: '/three'})
    },
    tijiao () {

    }
  },
  created () {
    var add = JSON.parse(localStorage.getItem('add'))

    // var adds = JSON.parse(localStorage.getItem('adds'))
    var adds = this.$store.state.buy
    this.adds = adds
    this.address = add
    // console.log(this.adds)
    console.log(this.$store.state.buy)
    var a = 0
    var b = 0
    for (var i = 0; i < this.adds.length; i++) {
      a += this.adds[i].much * this.adds[i].num
      b += this.adds[i].num
    }
    this.much = a * 0.01
    this.num = b
  }
}
</script>

<style scoped="scoped">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.box{
  width: 100%;
  height: 100%;

}
.fanhui{
  width: 100%;
  /* border: 1px solid black; */
  position: fixed;
  top: 0;
  left: 0;
}
.top{
  width: 100%;
  border-bottom: 3px solid #eee;
  border-top: 3px solid #eee;
  background-color: white;
  position: fixed;
  top: 40px;
  font-size: 0.15rem;
  display: flex;
  justify-content: space-around;
  z-index: 999;
}
.top ul{
  padding: 0.05rem 0;
  color: black;
}
.top ul:first-child{
  width: 70%;
  /* border: 1px solid black; */
  color: black;
}
.top ul:first-child li{
  padding: 0.05rem 0;
}
.top ul:last-child{
  width: 10%;
  text-align: right;
  font-weight: 600;
  /* border: 1px solid black; */
  line-height: 0.55rem;
}
.zhong{
  width: 100%;
  margin-top: 1.25rem;
  /* border: 1PX solid black; */
}
.zhong .for{
  width: 90%;
  margin: 0 auto;
  font-size: 0.16rem;
  /* border: 1px solid black; */
  display: flex;
  border-bottom: 3px solid #e6e6e6;
}

.for ul:first-child{
  width: 30%;
}
.for ul li{
width: 100%;
}
.for ul li img{
  width: 100%;
  height: 100%;
}
.for ul:last-child{
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}
.for ul:last-child li{
  width: 100%;
}
.for ul:last-child li:last-child{
  display: flex;
  justify-content: space-between;

}
.for ul:last-child li:last-child span:first-child{
  color: red;
}
.mess{
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
}
.mess ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.14rem;
}
.mess ul li{
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #f6f6f6;
}
.mess ul li:last-child{
  margin-top: 0.15rem;
}
.mess ul li:last-child span:last-child{
  color: red;
}
.bottom{
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 3px solid #f6f6f6;
}
.bottom ul{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  font-size: 0.15rem;
}
.bottom ul li{
  padding: 0.10rem 0.15rem;
  margin: 0 0 0.05rem 0;
  /* margin-left:0.05rem; */

}
.bottom ul li span{
  color: red;
}
.bottom ul li:last-child{
  /* border: 1px solid black; */
  border-radius: 0.2rem;
  background-color:#EE2C2C;
  color: #f6f6f6;
}
</style>
