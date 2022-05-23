<template>
    <div class="box">
        <ul class="fenlei-div">
            <li v-for="(ar,id) in fenlei[fenleiID]" :key="id">
                <img :src="ar.img" />
                <p>{{ar.name}}</p>
            </li>
            <!-- <li @click="jj">
                123

            </li> -->
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FENLEI',
  data () {
    return {
    //   num: this.arr.one,
      ar: 3,
      length: this.$attrs.getMessage,
      arr: {
        one: [
          { img: '../../../../static/yurongfu.png', name: '羽绒服1' },
          { img: '../../../../static/baonuanyi.png', name: '保暖衣1' }
        ],
        two: [
          { img: '../../../../static/yurongfu.png', name: '羽绒服2' },
          { img: '../../../../static/baonuanyi.png', name: '保暖衣2' }
        ],
        three: [
          { img: '../../../../static/yurongfu.png', name: '羽绒服3' },
          { img: '../../../../static/baonuanyi.png', name: '保暖衣3' }
        ],
        four: [
          { img: '../../../../static/yurongfu.png', name: '羽绒服4' },
          { img: '../../../../static/baonuanyi.png', name: '保暖衣4' }
        ],
        five: [
          { img: '../../../../static/yurongfu.png', name: '羽绒服5' },
          { img: '../../../../static/baonuanyi.png', name: '保暖衣5' }
        ],
        six: [
          { img: '../../../../static/yurongfu.png', name: '羽绒服6' },
          { img: '../../../../static/baonuanyi.png', name: '保暖衣6' }
        ]
      },
      arr2: [1, 2, 3, 4, 5, 6, 4, 5]
    }
  },
  computed: {
    ...mapState(['fenlei', 'fenleiID'])
  },
  methods: {
    jj () {
      // console.log(this.arr)
      console.log(this.$attrs.getMessage)
      // console.log(this.showMsg)
    }
  },
  props: ['showMsg'],
  watch: {
    showMsg: function (val) {
      console.log(val)
      console.log(1)
    }
  },
  created () {
    // var a = 1
    // console.log(this)
    // console.log([...new Set(this.arr2)])
    // console.log(this.$attrs.getMessage)
    // console.log(this.$store.state.fenlei[0])
  }
}
</script>

<style scoped="scoped">
.fenlei-div {
  width: 70%;
  height: 80%;
  position: absolute;
  left: 26%;
  top: 0.55rem;
  display: flex;
  flex-wrap: wrap;
}

.fenlei-div  li{
    width: 0.8rem;
    height: 0.9rem;
    /* border: 1px solid black; */
    font-size: 0.13rem;
}
.fenlei-div  li img{
    width: 80%;
    height: 75%;
    margin: 0 10%;
 }
 .fenlei-div  li p{
     text-align: center;
 }
</style>
