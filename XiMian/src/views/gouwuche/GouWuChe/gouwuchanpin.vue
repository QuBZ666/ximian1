<template>
  <div class="box">
    <div class="erdi">
      <p class="gouxuan"><input type="checkbox" /></p>
      <ul>
        <li><img src="../../../../static/001.jpg" /></li>
        <li class="right">
          <p class="right-top">123</p>
          <div class="right-bo">
            <p class="right-bo-le">￥{{ jiage }}</p>
            <div class="right-bo-ri">
              <button v-on:click="jian">-</button>
              <input type="text" value="0" v-model="con" />
              <button @click="jia">+</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gouwuchanpin',
  data () {
    return {
      con: '0',
      jiage: '1215'
    }
  },
  props: ['jieshou'],
  methods: {
    jia (data) {
      this.con++
      const jiaa = this.jiage * this.con
      this.jieshou(jiaa)
    },
    jian: function (con) {
      if (this.con <= 0) {
        con = 0
      } else {
        this.con--
        let jiann = console.log(this.jiage * this.con - this.con)
        console.log(jiann)
      }
    }
  }
}
</script>

<style scoped="scoped">
.box {
  width: 100%;
  margin-top: 0.6rem;
  font-size: 0.15rem;
}
.box .erdi {
  width: 90%;
  height: 1.1rem;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.box .erdi .gouxuan {
  width: 20%;
  height: 1.1rem;
}
.box .erdi .gouxuan input {
  width: 0.2rem;
  height: 0.2rem;
  margin: 0 auto;
  margin-top: 0.45rem;
  display: inherit;
}
.box .erdi ul {
  width: 80%;
  height: 0.9rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.box .erdi ul li:first-child {
  width: 25%;
  height: 0.9rem;
}
.box .erdi ul li:last-child {
  width: 70%;
  height: 0.9rem;
  /*border: 1px dashed black;*/
}
.box .erdi ul li img {
  width: 100%;
  height: 0.9rem;
}

.box .erdi ul .right .right-bo {
  width: 100%;
  height: 0.2rem;
  margin-top: 0.45rem;

  display: flex;
  justify-content: space-between;
}
.box .erdi ul .right .right-bo .right-bo-le {
  color: red;
}
.box .erdi ul .right .right-bo .right-bo-ri {
  width: 0.7rem;
  height: 0.255rem;
  padding: 0 0.05rem;
}
.box .erdi ul .right .right-bo .right-bo-ri button {
  display: inline-block;
  width: 0.18rem;
  height: 0.2rem;
  position: relative;
  top: 0.04rem;
  text-align: center;
  line-height: 0.15rem;
  font-size: 0.18rem;
}
.box .erdi ul .right .right-bo .right-bo-ri input {
  width: 0.2rem;
  height: 0.18rem;
  /*border: 1px solid black;*/
  text-align: center;
  /*line-height: 0.15rem;*/
}
</style>
