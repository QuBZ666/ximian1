<template>
    <div class="box">
        <div class="div">
            <van-tabs v-model="active" class="vant">
                <van-tab title="登录" class="van-deng">
                    <ul>
                        <li><span>账号:</span><input type="text" v-model="zhanghao" placeholder="不少于10位"></li>
                        <li><span>密码:</span><input type="password" v-model="mima"></li>
                        <li><button @click="denglu(n)">登录{{num}}</button></li>
                    </ul>
                </van-tab>
                <van-tab title="注册" class="van-deng">
                    <ul>
                        <li><span>创建账号:</span><input type="text" v-model="chuangjianZ" placeholder="不少于10位"></li>
                        <li><span>密码:</span><input type="password" v-model="zhuangjianM" placeholder="不少于10位"></li>
                        <li><span>确认密码:</span><input type="password" v-model="querenM"></li>
                        <li><button @click="zhuce(n)">立即注册{{num}}</button></li>
                    </ul>
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<script>
import { Tab, Tabs, Form, Field } from 'vant'
import {mapState} from 'vuex'
// mapMutations
export default {
  name: 'denglu',
  data () {
    return {
      zhanghao: '',
      mima: '',
      chuangjianZ: '',
      zhuangjianM: '',
      querenM: '',
      active: 2,
      username: '',
      password: '',
      n: 2,
      shuju: ''
    }
  },
  computed: {
    ...mapState(['num', 'jia'])
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Form.name]: Form,
    [Field.name]: Field
  },
  methods: {
    denglu (a) {
    //   let me = this
    //   if (!me.zhanghao || !me.mima) {
    //     alert('不能为空')
    //   } else {
    //     this.$store.commit('deng', (this.mima, this.zhanghao))
    //     console.log(this.$store.state.message)
    //   }
    //   var ab = {zhanghao: this.zhanghao, mima: this.mima}
    //   for (var i = 0; i < this.$store.state.message.length; i++) {
      console.log(this.$store.state.message.mima)
      if (this.zhanghao === this.$store.state.message.zhanghao && this.mima === this.$store.state.message.mima) {
        alert('登陆成功')
        this.$router.push({})
        this.$router.push({path: '/four'})
      } else {
        alert('1')
      }
    //   }
    },
    zhuce () {
      if (this.chuangjianZ.length >= 10 && this.zhuangjianM.length >= 10 && this.zhuangjianM === this.querenM) {
        var zhuce = {zhanghao: this.chuangjianZ, mima: this.zhuangjianM}
        var shuju = zhuce
        // shuju.push(zhuce)
        this.shuju = shuju
        // console.log(shuju)
        localStorage.setItem('shuju', JSON.stringify(shuju))
        // console.log(this.chuangjianZ)
        this.$store.state.message = zhuce
        console.log(this.$store.state.message)
      } else {
        alert(123)
      }
    }
    // zhuce () {
    // :"Jia",zhuce:"Jian"   console.log('账号：' + this.chuangjianZ)
    //   console.log('密码：' + this.zhuangjianM)
    //   console.log('确认密码' + this.querenM)
    //   console.log(this.chuangjianZ.length)
    // },

    // ...mapMutations({denglu: 'Jia', zhuce: 'Jian'})
  },
  created () {
    console.log(this.$store.state.message)
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
.div{
    width: 100%;
    font-size: 0.2rem;
}
.vant{
    width: 100%;
    /* border: 1px solid black; */
    font-size: 0.18rem;
    background-color: white;
}
.van-deng{
    width: 90%;
    margin: 0 auto;
    /* border: 1px solid black; */
}
.van-deng ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.van-deng ul li {
    width: 100%;
    padding: 0.15rem 0;
}
.van-deng ul li span{
    width: 0.8rem;
    display: inline-block;
    text-align: right;
}
.van-deng ul li button{
    width: 100%;
    padding: 0.1rem 0;
    border: 1px solid #e6e6e6;
    background-color: white;

}
/* .div>div{
    width: 95%;
    background-color: #e6e6e6;
    margin: 0.1rem auto ;
    display: flex;

    flex-wrap: wrap;
}
.div>div ul{
    width: 100%;
    padding: 0.1rem 0;
    border: 1px solid black;
}
.div>div ul:first-child{
    width: 100%;
    border: 1px solid black;
    justify-content: center;

}
.div>div ul:first-child li{
    margin: 0 0.1rem;
}
.div>div ul:first-child{
    display: flex;
}
.div>div ul:last-child li{
    width: 100%;
    padding: 0.15rem 0;
}
.div>div ul:last-child li span{
    display: inline-block;
    width: 0.70rem;
    border: 1px solid black;
    text-align: right;
}
.div>div ul li button{
    width: 100%;
    background-color: green;
    color: white;
} */
</style>
