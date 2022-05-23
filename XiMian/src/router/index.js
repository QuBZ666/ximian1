import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import shouye from '../views/shouye/shouye.vue'
import fenlei from '../views/fenlei/fenlei.vue'
import gouwuche from '../views/gouwuche/gouwuche.vue'
import wode from '../views/wode/wode.vue'
import fenlei2 from '../views/fenlei/FenLei/fenlei2.vue'
import fenlei3 from '../views/fenlei/FenLei/fenlei3.vue'
import fenlei4 from '../views/fenlei/FenLei/fenlei4.vue'
import fenlei5 from '../views/fenlei/FenLei/fenlei5.vue'
import fenlei6 from '../views/fenlei/FenLei/fenlei6.vue'
import fenlei7 from '../views/fenlei/FenLei/fenlei7.vue'
import fenlei8 from '../views/fenlei/FenLei/fenlei8.vue'
import fenlei9 from '../views/fenlei/FenLei/fenlei9.vue'
import fenlei10 from '../views/fenlei/FenLei/fenlei10.vue'
import goumaiye from '../views/shouye/ShouYE/goumaiye.vue'
import addres from '../views/wode/WoDe/addres.vue'
import zhifu from '../views/gouwuche/GouWuChe/zhufu.vue'
import addre from '../views/wode/WoDe/addre.vue'
import FENLEI from '../views/fenlei/FenLei/FENLEI.vue'
import denglu from '../views/wode/WoDe/denglu.vue'
// import { AddressEdit } from 'vant'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye,
      meta: {
        asd: true
      }

    },

    {
      path: '/two',
      name: 'fenlei',
      component: fenlei,
      meta: {
        asd: true
      },
      children: [
        {
          path: '/-1',
          name: 'fenlei2',
          component: fenlei2,
          meta: {
            asd: true
          }
        },
        {
          path: '/-2',
          name: 'fenlei3',
          component: fenlei3,
          meta: {
            asd: true
          }
        },
        {
          path: '/-3',
          name: 'fenlei4',
          component: fenlei4,
          meta: {
            asd: true
          }
        },
        {
          path: '/-4',
          name: 'fenlei5',
          component: fenlei5,
          meta: {
            asd: true
          }
        },
        {
          path: '/-5',
          name: 'fenlei6',
          component: fenlei6,
          meta: {
            asd: true
          }
        },
        {
          path: '/-6',
          name: 'fenlei7',
          component: fenlei7,
          meta: {
            asd: true
          }
        },
        {
          path: '/-7',
          name: 'fenlei8',
          component: fenlei8,
          meta: {
            asd: true
          }
        },
        {
          path: '/-8',
          name: 'fenlei9',
          component: fenlei9,
          meta: {
            asd: true
          }
        },
        {
          path: '/-9',
          name: 'fenlei10',
          component: fenlei10,
          meta: {
            asd: true
          }
        },
        {
          path: '/123',
          name: 'FENLEI',
          component: FENLEI,
          meta: {
            asd: true
          }
        }
      ]
    },
    {
      path: '/three',
      name: 'gouwuche',
      component: gouwuche,
      meta: {
        asd: true
      }
    },
    {
      path: '/four',
      name: 'wode',
      component: wode,
      meta: {
        asd: true
      }
    },
    // {
    //   path: '/src/components/goumaiye.vue',
    //   name: 'goumaiye',
    //   component: goumaiye
    // }
    {
      path: '/src/views/shouye/ShouYE/goumaiye.vue',
      name: 'goumaiye',
      component: goumaiye,
      meta: {
        asd: false
      }
    },
    {
      path: '/src/views/wode/WoDe/addres.vue',
      name: 'addres',
      component: addres,
      meta: {
        asd: true
      }

    },
    {
      path: '/src/views/gouwuche/GouWuChe/zhufu.vue',
      name: 'zhifu',
      component: zhifu,
      meta: {
        asd: false
      }
    },
    {
      path: '/src/views/wode/WoDe/addre.vue',
      name: 'addre',
      component: addre,
      meta: {
        asd: false
      }

    },
    {
      path: '/src/views/wode/WoDe/denglu.vue',
      name: 'denglu',
      component: denglu,
      meta: {
        asd: true
      }

    }
  ]
})
