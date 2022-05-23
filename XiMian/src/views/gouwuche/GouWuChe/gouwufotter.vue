<template>
  <div class="box">
    <div class="erdi">
      <van-submit-bar :price="123" button-text="提交订单" @submit="onSubmit" class="vansum">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { SubmitBar, Checkbox } from 'vant'
export default {
  name: 'gouwufotter',
  props: ['arr'],
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox

  },
  data () {
    return {
      ar: [123],
      checked: false
    }
  },
  methods: {
    onSubmit () {
      console.log(this.arr)
      // this.$router.push({path: '/src/views/gouwuche/GouWuChe/zhufu.vue'})
    },
    onClickEditAddress () {
      console.log(2)
    }
  }
}
</script>

<style scoped="scoped">
.box {
  width: 100%;
  height: 0.3rem;
  border-bottom: 1px solid red;
  background-color: white;
  position: fixed;
  bottom: 0.5rem;
  font-size: 0.18rem;
}
.box .erdi {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.vansum{
  /* border: 1px solid black; */
  width: 100%;
  position: absolute;
  bottom: 0.01rem;
}
</style>
