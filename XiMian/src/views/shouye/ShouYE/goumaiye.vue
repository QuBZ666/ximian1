<template>
  <div id="box">
    <div>
      <van-nav-bar
        title="商品"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="swipers">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in imgs" :key="index">
          <img v-lazy="image" @click="asd"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="message">
      <ul>
        <li>￥{{ shuju[0].much }}</li>
        <li>￥{{ shuju[0].many }}</li>
      </ul>
      <ul>
        <li>{{ shuju[0].title }}</li>
      </ul>
      <ul>
        <li>
          <span>快递</span>
          <span>包邮</span>
        </li>
        <li>销量{{ shuju[0].xiaoliang }}件</li>
      </ul>
    </div>
    <div class="option">
      <div>
        <van-cell is-link title="选择 :" @click="show = true" />
        <van-sku
          v-model="show"
          :sku="sku"
          :quota-used="quotaUsed"
          :goods="goods"
          :goods-id="goodsId"
          :quota="quota"
          :initial-sku="initialSku"
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
          @stepper-change="stepperchange"
          @sku-selected="skuselected"
           ref= "getskk"
        />
      </div>
      <div>
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
          />
          <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px;"
          >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
          </van-popup>
      </div>
    </div>
    <!-- <div class="shopmessage"></div> -->
    <div class="fotter">
      <div>
        <van-goods-action >
          <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
          <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
          <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
          <van-goods-action-button
            type="danger"
            text="立即购买"

            @click="show = true"
          >
              立即购买
              <van-sku
                v-model="show"
                :sku="sku"
                :quota-used="quotaUsed"
                :goods="goods"
                :goods-id="goodsId"
                :quota="quota"
              />
          </van-goods-action-button>
        </van-goods-action>
        </div>
    </div>
    <!-- <button @click="asd">123</button> -->
  </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  Lazyload,
  ActionSheet,
  Cell,
  Sku,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  CouponCell,
  CouponList,
  Popup,
  NavBar } from 'vant'

import Vue from 'vue'
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠150元',
  reason: '',
  value: 15000,
  name: '优惠券名称',
  startAt: 1639104000,
  endAt: 1694592000,
  valueDesc: '150',
  unitDesc: '元',
  shuju: ''
}
Vue.use(Lazyload)
export default {
  name: 'goumaiye',
  methods: {
    asd () {
      console.log(this.$route.query[0].img)
    },
    onClickLeft () {
      // console.log(this.$router)
      this.$router.push({path: '/'})
    },
    onClickRight () {
      console.log(1)
    },
    onClickIcon () {
      Toast('点击图标')
      console.log(this.$route.query)
      console.log(this.shuju)
    },
    onClickButton () {
      Toast('点击按钮')
    },
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
      // console.log(this.chosenCoupon)
      console.log(index)
      // console.log(this.coupons[0].value)
    },
    onExchange (code) {
      this.coupons.push(coupon)
    },
    // 立即购买
    onBuyClicked (a) {
      // console.log(this.sku.list[0].price / 100)
      // console.log(this.$refs)
      console.log(a)
      var shu = []
      shu.push(this.shuzu)
      console.log(shu)
      // console.log(this.shuzu)
      // var lijigoumai = this.shuzu
      if (this.shuzu === '') {
        console.log(1)
      } else {
        this.$store.state.buy = shu
        // console.log(shu)
        this.$router.push({path: '/src/views/gouwuche/GouWuChe/zhufu.vue'})
      }
    },
    // 加减按钮
    stepperchange (a) {
      // console.log(a)
      this.nums = a
    },
    // 选择商品属性
    skuselected (a) {
      console.log(a)
      // 优惠卷
      var muchs = a.selectedSkuComb.price
      if (this.chosenCoupon === 0) {
        muchs = a.selectedSkuComb.price - this.coupons[0].value
      } else if (this.chosenCoupon === 0) {
        muchs = a.selectesdSkuComb.price
      }
      // 图片
      var imgs = a.skuValue.imgUrl
      var siz = a.skuValue.name
      // 数量
      var nums = this.nums
      var checkeds = this.$route.query[0].checkeds
      var shuzu = {id: a.skuValue.id, much: muchs, img: imgs, sizes: siz, num: nums, tit: this.$route.query[0].title, checkeds: checkeds}
      this.shuzu = shuzu
      // console.log(shuzu)
      // console.log(this.nums)
    },
    // 添加到购物车
    onAddCartClicked () {
      // console.log(this.nums)
      var mess = this.goumessage
      // console.log(mess)
      var index = mess.findIndex(v => v.id === this.shuzu.id)
      if (index === -1) {
        mess.unshift(this.shuzu)
        this.shuzu.num = this.nums
        console.log(this.shuzu)
      } else {
        mess[index].num += this.nums
        console.log(this.nums)
      }
      // 第三步
      // localStorage.setItem('goumessage', JSON.stringify(mess))
      this.$store.state.gou = mess
      // console.log(mess)
      // console.log(this.goumessage)
    }

  },
  created () {
    // 第二步
    var goumessage = JSON.parse(localStorage.getItem('shuzu')) || []
    console.log(goumessage)
    this.goumessage = goumessage
    // console.log(this.goumessage)
    console.log(this.$route.query)
    // 轮播图数量s
    var a = [] || ''
    if (a === '') {
      return
    } else {
      for (var i = 0; i < 3; i++) {
        a.push(this.$route.query[i].img)
      }
    }
    this.imgs = a
    // console.log(this.imgs)s
  },
  destroyed (query) {
    // console.log(query)
    // var mess = this.goumessage
    // localStorage.setItem('goumessage', mess)
    // console.log(mess)
  },
  data () {
    return {
      shuju: this.$route.query,
      imgs: '',
      checked: true,
      value: '123',
      showKeyboard: true,
      shopmess: '',
      goumessage: '',
      shuzhu: '',
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      sumloading: false,
      couponcode: '',
      goodsprice: 499,
      numbers: 1,
      nums: 1,
      totalprice: 0,
      orderdesc: '',
      goodsId: 1,
      quota: 10,
      quotaUsed: 1,
      show: false,
      initialSku: {
        // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
        // 值：skuValueId（规格值 id）
        s1: '1',
        s2: '1',
        // 初始选中数量
        selectedNum: 1,
        // 初始选中的商品属性
        // 键：属性id
        // 值：属性值id列表
        selectedProp: {
          123: [1222]
        }
      },
      skuData: {
        // 商品 id
        goodsId: '946755',
        // 留言信息
        messages: {
          message_0: '12',
          message_1: ''
        },
        // 另一种格式的留言，key 不同
        cartMessages: {
          '留言1': 'xxxx'
        },
        // 选择的商品数量

        // 选择的 sku 组合
        selectedSkuComb: {
          selectedNum: this.numbers,
          id: 2257,
          price: this.$route.query.much,
          s1: '30349',
          s2: '1193',
          s3: '0',
          stock_num: 111,
          properties: [
            {
              k_id: 123,
              k: '加料',
              is_multiple: true,
              v: [
                {
                  id: 1223,
                  name: '椰果',
                  price: 1
                }
              ]
            }
          ],
          property_price: this.$route.query.num
        }
      },

      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [

          {
            k: '尺寸', // skuKeyName：规格类目名称
            k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: this.$route.query[0].id, // skuValueId：规格值 id
                name: 'M', // skuValueName：规格值名称
                imgUrl: this.$route.query[0].img, // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: this.$route.query[0].img// 用于预览显示的规格类目图片
              },
              {
                id: this.$route.query[1].id,
                name: 'L',
                imgUrl: this.$route.query[0].img,
                previewImgUrl: this.$route.query[0].img
              },
              {
                id: this.$route.query[2].id,
                name: 'X',
                imgUrl: this.$route.query[0].img,
                previewImgUrl: this.$route.query[0].img
              }
            ],
            largeImageMode: true //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 0, // skuId
            // s1: '11', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: this.$route.query[0].id, // 规格类目 k_s 为 s2 的对应规格值 id
            price: this.$route.query[0].much * 100 * 0.95, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存

          },
          {
            id: 1, // skuId
            // s1: '11', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: this.$route.query[1].id, // 规格类目 k_s 为 s2 的对应规格值 id
            price: this.$route.query[1].much * 100, // 价格（单位分）
            stock_num: 110
            // 当前 sku 组合对应的库存
          },
          {
            id: 2, // skuId
            // s1: '11', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: this.$route.query[2].id, // 规格类目 k_s 为 s2 的对应规格值 id
            price: this.$route.query[2].much * 100 * 1.05, // 价格（单位分）
            stock_num: 110
            // 当前 sku 组合对应的库存
          }

        ],
        price: this.$route.query[0].much, // 默认价格（单位元）
        stock_num: 228, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品

        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图                                       666
        picture: this.$route.query[0].img
      }

    }
  },

  components: {
    // Bottom,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [ActionSheet.name]: ActionSheet,
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [Sku.name]: Sku,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [NavBar.name]: NavBar
  }

}
</script>

<style scoped="scoped">
#box {
  width: 100%;
  height: 80%;
  /* border: 1px solid black; */
}
.swipers {
  width: 100%;
  height: 3.17rem;
  /* border: 1px solid black; */
}
.swipers img {
  text-align: center;
  width: 3.75rem;
  height: 3.17rem;
}
.message {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.15rem;
}
.message ul {
  width: 100%;
  /* height: 0.25rem; */
  border-bottom: 1px solid #e6e6e6;
  padding: 0.1rem 0;
}
.message ul:last-child {
  display: flex;
  justify-content: space-between;
}
.message ul:first-child {
  display: flex;
}
.message ul:first-child li {
  line-height: 0.26rem;
}
.message ul:first-child li:first-child {
  color: red;
  font-size: 0.18rem;
  font-weight: 600;
}
.message ul:first-child li:last-child {
  text-decoration: line-through;
  color: gray;
  margin: 0 0.15rem;
}
.van-goods-action{
      position: fixed;
      bottom: 0px;
   }
.option{
  width: 100%;
  margin: 0 auto;
}
.option>div{
  display: flex;
  flex-wrap: wrap;
}

</style>
