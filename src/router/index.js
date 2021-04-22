import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store/index.js'
import layout from '../layout/index.vue'
// import { component } from 'vue/types/umd'
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },

  {
    path: '/addshop',
    name: '首页',
    component: () => import('@/views/addshop/addshop.vue')
  },
  {
    path: '/',
    name: '首页',
    component: layout,
    children: [
      {
        path: 'table',
        name: '商品信息列表',
        component: () => import('@/views/product/label.vue'),

      },
      {
        path: 'addclassify',
        name: '添加分类',
        component: () => import('@/views/classify/add_classify.vue')
      },
      {
        path: 'productList',
        name: '商品列表',
        component: () => import('@/views/product/productList.vue')
      },
      {
        path: 'productMessage',
        name: '商品信息',
        component: () => import('@/views/product/components/productMessage.vue')
      },
      {
        path: 'normalItem',
        name: '商品信息',
        component: () => import('@/views/product/components/normalItem.vue')
      },


    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  /* 必须调用 `next` */
  if (store.getters.getUser == '' && to.path == '/') {
    next('/login')
  }
  // if(to.path=='/login'&&store.getters.getUser!==''){
  //   next('/')
  // }
  next();
})
router.afterEach(() => {
  NProgress.done();
});
export default router
