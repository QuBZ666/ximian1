import Vue from 'vue'
import Vuex from 'vuex'
import mess from '../../src/public/list.json'
import fenlei from '../../src/public/fenlei.json'
Vue.use(Vuex)

// 准备actions对象——响应组件中用户的动作
const actions = {
  jia (context, value) {
    // console.log('actions中的jia被调用了',miniStore,value)
    context.commit('JIA', value)
  }
}
// 准备mutations对象——修改state中的数据
const mutations = {
  Jia (state, value) {
    state.num += value
  },
  Jian (state, value) {
    state.num -= value
  },
  deng (state, val) {
    state.message = val
  },
  mess (state, value) {
    state.shuju = state.mess
  },
  gouwu (state, value) {
    // 购物车打开后运行
    state.gouwuche = state.gou || ''
    state.num = state.gouwuche.length
    // console.log(state.num)
    // console.log(state.gou)
  },
  dele (state, xuan) {
    // 购物车点击删除时运行
    var a = window.confirm('确认要删除吗')
    if (a) {
      var ind = state.gouwuche.findIndex(value => value.id === xuan.id)
      state.gouwuche.splice(ind, 1)
      state.shuzu = state.gouwuche
      state.num = state.gouwuche.length
      // console.log(state.gouwuche)
      // console.log(state.shuzu)
    }
  }
}
// 准备state对象——保存具体的数据
const state = {
  jia: 1,
  shuju: '',
  mess,
  fenlei,
  fenleiID: 0,
  gouwuche: '',
  shuzu: [],
  gou: '',
  num: '',
  // 加入购物车mess or立即购买mess
  buy: []

}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
