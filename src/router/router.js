import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'

// 引入组件
import Home from '../components/home/Home.vue'
import Login from '../components/login/Login.vue'
// 安装一下路由
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

// 导出路由,挂载在vue实例上
export default router
