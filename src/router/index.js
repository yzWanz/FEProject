import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_guangxianpingtai from '../views/lanhu_guangxianpingtai/index.vue'
import lanhu_dingweidaohang_dianjidankuang_2 from '../views/lanhu_dingweidaohang_dianjidankuang_2/index.vue'
import lanhu_kongjianjianmo from '../views/lanhu_kongjianjianmo/index.vue'
import lanhu_kekaotongxin_denglu from '../views/lanhu_kekaotongxin_denglu/index.vue'
import lanhu_dingweidaohang from '../views/lanhu_dingweidaohang/index.vue'
import lanhu_dingweidaohang_dianjidankuang_1 from '../views/lanhu_dingweidaohang_dianjidankuang_1/index.vue'
import lanhu_dingweidaohang_xingdongguiji from '../views/lanhu_dingweidaohang_xingdongguiji/index.vue'
import lanhu_denglu from '../views/lanhu_denglu/index.vue'
import lanhu_wurenchekongzhi from '../views/lanhu_wurenchekongzhi/index.vue'
import lanhu_tancezhishou from '../views/lanhu_tancezhishou/index.vue'
import lanhu_dingweidaohang_luxian from '../views/lanhu_dingweidaohang_luxian/index.vue'
import lanhu_kekaotongxin_peizhijiemian from '../views/lanhu_kekaotongxin_peizhijiemian/index.vue'
import lanhu_tancezhishou_gaojing from '../views/lanhu_tancezhishou_gaojing/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_denglu"
  },
  {
    path: '/lanhu_guangxianpingtai',
    name: 'lanhu_guangxianpingtai',
    component: lanhu_guangxianpingtai
  },
  {
    path: '/lanhu_dingweidaohang_dianjidankuang_2',
    name: 'lanhu_dingweidaohang_dianjidankuang_2',
    component: lanhu_dingweidaohang_dianjidankuang_2
  },
  {
    path: '/lanhu_kongjianjianmo',
    name: 'lanhu_kongjianjianmo',
    component: lanhu_kongjianjianmo
  },
  {
    path: '/lanhu_kekaotongxin_denglu',
    name: 'lanhu_kekaotongxin_denglu',
    component: lanhu_kekaotongxin_denglu
  },
  {
    path: '/lanhu_dingweidaohang',
    name: 'lanhu_dingweidaohang',
    component: lanhu_dingweidaohang
  },
  {
    path: '/lanhu_dingweidaohang_dianjidankuang_1',
    name: 'lanhu_dingweidaohang_dianjidankuang_1',
    component: lanhu_dingweidaohang_dianjidankuang_1
  },
  {
    path: '/lanhu_dingweidaohang_xingdongguiji',
    name: 'lanhu_dingweidaohang_xingdongguiji',
    component: lanhu_dingweidaohang_xingdongguiji
  },
  {
    path: '/lanhu_denglu',
    name: 'lanhu_denglu',
    component: lanhu_denglu
  },
  {
    path: '/lanhu_wurenchekongzhi',
    name: 'lanhu_wurenchekongzhi',
    component: lanhu_wurenchekongzhi
  },
  {
    path: '/lanhu_tancezhishou',
    name: 'lanhu_tancezhishou',
    component: lanhu_tancezhishou
  },
  {
    path: '/lanhu_dingweidaohang_luxian',
    name: 'lanhu_dingweidaohang_luxian',
    component: lanhu_dingweidaohang_luxian
  },
  {
    path: '/lanhu_kekaotongxin_peizhijiemian',
    name: 'lanhu_kekaotongxin_peizhijiemian',
    component: lanhu_kekaotongxin_peizhijiemian
  },
  {
    path: '/lanhu_tancezhishou_gaojing',
    name: 'lanhu_tancezhishou_gaojing',
    component: lanhu_tancezhishou_gaojing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
