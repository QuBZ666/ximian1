<template>
    <div>
        <van-nav-bar
          title="添加地址"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        @change-default="defaults"
        />
    </div>
</template>

<script>
import { AddressEdit, Toast, NavBar } from 'vant'
import { areaList } from '@vant/area-data'
export default {
  name: 'addre',
  components: {
    [AddressEdit.name]: AddressEdit,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      shuju: '',
      areaList,
      searchResult: [],
      isDefault: null
    }
  },
  created () {
    var shuju = JSON.parse(localStorage.getItem('list')) || []
    console.log(shuju)
    console.log(this.shuju)
    this.shuju = shuju
    console.log(this.shuju)
    // console.log(this.$route.query)
  },
  methods: {
    defaults (a) {
      console.log(a)
      if (this.shuju === null) {
        console.log(1)
        this.isDefault = true
      } else {
        console.log(this.shuju[0])
        for (var i = 0; i < this.shuju.length; i++) {
          if (this.shuju[i].isDefault === null || this.shuju[i].isDefault === false) {
            this.isDefault = true
            // console.log(this.isDefault)
          } else {
            Toast('已经有默认项了')
            this.isDefault = false
            console.log(this.isDefault)
          }
        }
      }
      // var indexs = a
    },

    onClickLeft () {
      Toast('返回')
      this.$router.push({path: '/src/views/wode/WoDe/addres.vue'})
    },

    onSave (a) {
      Toast('save')
      //   console.log(a)
      var b = {name: a.name, tel: a.tel, address: a.province + a.city + a.county + a.addressDetail, isDefault: this.isDefault, id: this.shuju.length + 1}
      console.log(this.shuju)
      this.shuju.push(b)
      console.log(this.shuju)
      var ab = this.shuju

      this.$router.push({path: '/src/views/wode/WoDe/addres.vue'})
      localStorage.setItem('shuju', JSON.stringify(ab))
    },
    onDelete () {
      Toast('delete')
      localStorage.removeItem('shuju')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style >

</style>
