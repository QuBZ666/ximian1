<template>
  <div class="fenlei-div">
    <ul class="fenlei2-ul">
      <li v-for="(ar,id) in arr" :key="id">
        <img :src="ar.img" />
        <p>{{ ar.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'fenlei2',
  data () {
    return {
      arr: [
        { img: '../../../../static/yurongfu.png', name: '羽绒服' },
        { img: '../../../../static/baonuanyi.png', name: '保暖衣' },
        { img: '../../../../static/zhenzhishan.png', name: '针织衫' },
        { img: '../../../../static/waitao.png', name: '女式外套' },
        { img: '../../../../static/fangshaiyi.png', name: '防晒衣' },
        { img: '../../../../static/lianyiqun.png', name: '连衣裙' },
        { img: '../../../../static/yurongku.png', name: '羽绒裤' },
        { img: '../../../../static/banshenqun.png', name: '半身裙' },
        { img: '../../../../static/niuzaiku.png', name: '牛仔裤' },
        { img: '../../../../static/xiuxianku.png', name: '休闲裤' },
        { img: '../../../../static/dadiku.png', name: '打底裤' }
      ]
    }
  }
}
</script>

<style scoped="scoped">
.fenlei-div {
  width: 76%;
  height: 80%;
  /*border: 1px solid black;*/
  position: absolute;
  left: 22%;
  top: 0.55rem;
}
.fenlei-div .fenlei2-ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.fenlei2-ul li {
  width: 33%;
  margin: 0.05rem 0;
  font-size: 0.18rem;
}
.fenlei2-ul li img {
  width: 0.45rem;
  height: 0.45rem;
  display: inherit;
  margin: 0 auto;
}
.fenlei2-ul li p {
  text-align: center;
  font-size: 0.13rem;
}
</style>
