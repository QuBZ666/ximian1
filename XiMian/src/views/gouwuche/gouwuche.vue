<template>
  <div class="box">
    <gouwutop :num="num"></gouwutop>
    <!-- <gouwuchanpin :jieshou="jieshou"></gouwuchanpin> -->
    <div class="message">
      <div class="items" v-for="(xuan, id) in gouwuche" :key="id">
        <div class="item">
          <div class="left">
            <input type="checkbox" @click="checkeds(xuan,id)"  v-model="xuan.checkeds"/>
            <img :src="xuan.img" alt="" />
          </div>
          <div class="center">
            <div>
              {{ xuan.tit }}
              {{ xuan.sizes }}
            </div>
            <ul>
              <li style="color: red">￥:{{ xuan.much * 0.01 }}</li>
              <li>数量:{{ xuan.num }}</li>
              <li>总价:￥{{ xuan.much * 0.01 * xuan.num }}</li>
            </ul>
          </div>
          <div class="right">
            <div @click="dele(xuan)" class="butt">删除</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <gouwufotter :arr="arr"> </gouwufotter> -->
    <div class="fotter">
      <div class="erdi">
        <van-submit-bar
          :price="zongjia"
          button-text="提交订单"
          @submit="onSubmit"
          class="vansum"
          :disabled="disableds"
        >
          <van-checkbox v-model="checked" @click="quanxuan">全选</van-checkbox>
          <template #tip>
            <!-- 你的收货地址不支持同城送,
            <span @click="onClickEditAddress">修改地址</span> -->
          </template>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
import gouwutop from './GouWuChe/gouwutop.vue'
import gouwufotter from './GouWuChe/gouwufotter.vue'
import gouwuchanpin from './GouWuChe/gouwuchanpin.vue'
import { SwipeCell, Button, Cell, Card, SubmitBar, Checkbox, Icon } from 'vant'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'gouwuche',
  components: {
    gouwutop,
    gouwufotter,
    gouwuchanpin,
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [Card.name]: Card,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Icon.name]: Icon
  },
  data () {
    return {
      arr: 1,
      checked: false,
      shuju: '',
      zongjia: 0,
      disableds: true,
      button: false,
      adds: '',
      num: this.$store.state.num
    }
  },
  computed: {
    ...mapState(['gouwuche'])
  },
  methods: {
    quanxuan (v) {
      var a = 0
      var b = 0
      if (this.checked) {
        for (var i = 0; i < this.$store.state.gouwuche.length; i++) {
          this.$store.state.gouwuche[i].checkeds = true
          if (this.$store.state.gouwuche[i].checkeds) {
            a += this.$store.state.gouwuche[i].much
            this.zongjia = a
            this.disableds = false
          }
        }
      } else {
        for (var ii = 0; ii < this.$store.state.gouwuche.length; ii++) {
          this.$store.state.gouwuche[ii].checkeds = false
          if (!this.$store.state.gouwuche[ii].checkeds) {
            b += 1
            console.log(b)
            if (b === this.$store.state.gouwuche.length) {
              this.zongjia = 0
              this.disableds = true
            }
          }
        }
      }
    },
    onSubmit (a) {
      var add = []
      for (var i = 0; i < this.$store.state.gouwuche.length; i++) {
        if (this.$store.state.gouwuche[i].checkeds) {
          add.push(this.$store.state.gouwuche[i])
        }
      }
      if (this.zongjia > 0) {
        this.adds = add
        this.$router.push({path: '/src/views/gouwuche/GouWuChe/zhufu.vue'})
        // console.log(add)
        this.$store.state.buy = add
        console.log(add)
        // console.log(this.$store.state.buy)
        // localStorage.setItem('adds', JSON.stringify(add))
      } else {
        // disabled
        // alert('请选择商品后购买')
      }
    },
    onClickEditAddress () {
      console.log(2)
    },
    checkeds (xuan, id) {
      xuan.checkeds = !xuan.checkeds
      var a = 0
      var b = 0
      var c = 0
      for (var i = 0; i < this.$store.state.gouwuche.length; i++) {
        if (this.$store.state.gouwuche[i].checkeds) {
          a += this.$store.state.gouwuche[i].much
          c += 1
          this.zongjia = a
          this.disableds = false
          if (c === this.$store.state.gouwuche.length) {
            this.checked = true
          }
        } else {
          b += 1
          // console.log(b)
          this.checked = false
          if (b === this.$store.state.gouwuche.length) {
            this.zongjia = 0
            this.disableds = true
            // console.log(1)
          }
        }
      }
    },
    jieshou (x) {
      /* return x */
      console.log(x)
      this.arr.unshift(x)
    },
    ...mapMutations({dele: 'dele'})
  },
  created () {
    // var a = localStorage.getItem('goumessage')
    // 第四步
    // console.log(this.$store)
    // if (!localStorage.getItem('goumessage') === []) {
    //   console.log(undefined)
    //   return
    // }

    this.$store.commit('gouwu')
    console.log(this.$store.state.gouwuche)
  },
  destroyed () {
  }
}
</script>

<style scoped="scoped">
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
.message {
  width: 100%;
  margin-top: 0.57rem;
  margin-bottom: 1.35rem;
}
.items {
  width: 90%;
  margin: 0 auto;
}
.item {
  width: 100%;
  margin: 0 auto;

  height: 1rem;
  display: flex;
  justify-content: center;

  margin: 0.1rem 0 0 0;
}
.item .left {
  width: 25%;
  height: 100%;
  display: flex;
  /* border: 1px solid black; */
}
.item .left input {
  width: 30%;
  height: 100%;
  /* border: 1px solid black; */
}
.item .left img {
  width: 70%;
  height: 80%;
  margin: 10% 0 0 0;
  /* border: 1px solid black; */
}
.item .center {
  width: 60%;
  font-size: 0.13rem;

  display: flex;
  flex-wrap: wrap;
  font-style: italic;
  /* border: 1px solid black; */
}
.item .center div {
  width: 80%;
  height: 40%;
  margin: 5% 0 0 0;
}
.item .center ul {
  display: flex;
  height: 20%;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid black; */
}
.item .right {
  width: 15%;
}
.item .right .butt {
  font-size: 0.15rem;
  /* border: 1px solid black; */
  text-align: center;
  line-height: 1rem;
  width: 100%;
  height: 100%;
  border: none;
  color: red;
}
.fotter {
  width: 100%;
  height: 0.3rem;
  border-bottom: 1px solid red;
  background-color: white;
  position: fixed;
  bottom: 0.5rem;
  font-size: 0.18rem;
}
.fotter .erdi {
  width: 90%;
  /* height: 1rem; */
  margin: 0 auto;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
}
.vansum {
  /* border: 1px solid black; */
  width: 100%;
  position: absolute;
  bottom: 0.01rem;
}
/* .van-icon{
  size: ;
} */
</style>
