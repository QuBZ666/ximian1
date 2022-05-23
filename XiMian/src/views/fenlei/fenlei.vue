<template>
  <div id="1">
    <van-sticky>
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
        />
      </van-sticky>
      <el-row class="tac">
        <el-col :span="6">
          <el-menu
          class="el-menu-vertical-demo"
          :router="true"
           default-active="5"
          >
            <el-menu-item index='/123' v-for="(items,id) in fen" :key="id" @click="dianji(id)">
              <span slot="title">{{items.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
      <el-main>
        <router-view class="view" :getMessage="showMsg"></router-view>
      </el-main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Search, Sticky } from 'vant'

export default {
  name: 'fenlei',
  components: {
    [Search.name]: Search,
    [Sticky.name]: Sticky

  },
  data () {
    return {
      value: '',
      active: 0,
      showMsg: 0,
      id: '',
      activeKey: 0,
      fen: [
        { name: '女装', src: '/-1' },
        { name: '男装', src: '/-2' },
        { name: '童装', src: '/-3' },
        { name: '鞋包', src: '/-4' },
        { name: '内衣', src: '/-5' },
        { name: '家电', src: '/-6' },
        { name: '家居厨具', src: '/-7' },
        // { name: '彩妆护肤', src: '/-8' },
        // { name: '手机数码', src: '/-9' },
        // { name: '手表配饰', src: '/-10' },
        { name: '车载用品', src: '/src/views/fenlei/FenLei/FENLEI.vue' },
        { name: '儿童玩具', src: '/-12' },
        { name: '生活超市', src: '/-13' }
      ]
    }
  },
  computed: {
    ...mapState(['fenlei'])
  },
  methods: {
    dianji: function (id) {
      // console.log(id)
      this.showMsg = id
      // console.log(this.$store.state.fenleiID)
      this.id = id
      this.$store.state.fenleiID = id
      // console.log(this.showMsg)
      // console.log(this.$store.state.fenleiID)
    }

  },
  created () {
    // console.log(this.$store.state.fenlei)
  }
}
</script>

<style scoped="scoped">
/* .feilei-ul {
  width: 90%;
  position: fixed;
  left: 5%;
  top: 0;
  margin: 0.1rem auto;
  display: flex;
  justify-content: space-between;
}
.feilei-ul li {
  font-size: 0.23rem;
  opacity: 0.5;
  padding: 0.1rem 0;
  position: absolute;
  top: 0.01rem;
  right: 0.35rem;
}
.feilei-ul input {
  width: 100%;
  height: 0.35rem;
  border: none;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 0.2rem;
  font-size: 0.15rem;
} */
/* .view{
  border: 1px solid black;
} */
</style>
