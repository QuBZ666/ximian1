<template>
    <div>
     <van-goods-action style="z-index='999'">
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      >

      </van-goods-action-button>
    </van-goods-action>
    </div>
</template>

<script setup>
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from 'vant'

export default {
  name: 'Bottom',
  data () {
    return {
      checked: true,
      value: '123',
      showKeyboard: true
    }
  },
  methods: {
    onClickIcon () {
      Toast('点击图标')
    },
    onClickButton () {
      Toast('点击按钮')
    }
  },
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton

  }
}
</script>

<style >
    .van-goods-action{
      position: fixed;
      bottom: 60px;
    }
</style>
