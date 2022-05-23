<template>
    <div class="box">
         <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @click-item='item'
            @select="select"
          />

    </div>
</template>

<script>
import { AddressList, Toast, AddressEdit } from 'vant'

export default {
  name: 'addres',
  components: {
    [AddressList.name]: AddressList,
    [AddressEdit.name]: AddressEdit
  },
  data () {
    return {
      // areaList,
      searchResult: [],
      chosenAddressId: '1',
      list: [],
      add: ''

    }
  },
  methods: {
    onAdd (a) {
      Toast('新增地址')
      console.log(this.list)
      this.$router.push({path: '/src/views/wode/WoDe/addre.vue'})
    },
    select (a) {
      console.log(a)
      // var aa = as
      var add = a
      localStorage.setItem('add', JSON.stringify(add))
      this.$router.push({path: '/src/views/gouwuche/GouWuChe/zhufu.vue'})
    },
    onEdit (item, index) {
      Toast('编辑地址:' + index)
      // localStorage.removeItem('shuju')
      console.log(item)
      var items = item
      this.$router.push({path: '/src/views/wode/WoDe/addre.vue', query: items})
    },
    item () {
      // console.log(1)
    }

  },
  created () {
    var list = this.list
    // console.log(list)
    var jie = JSON.parse(localStorage.getItem('shuju')) || ''
    if (jie === '') {
      console.log(1)
      localStorage.setItem('list', JSON.stringify(list))
    } else {
      // list.push(jie)
      list.push.apply(list, jie)
      console.log(2)
      localStorage.setItem('list', JSON.stringify(list))
    }
    // var jieshou = JSON.parse(localStorage.getItem('shuju'))
    // this.list = jieshou
    console.log(this.list)
  }

}
</script>

<style >

</style>
