import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'

// 引入组件
import Home from '../components/home/Home.vue'
import Login from '../components/login/Login.vue'
import Users from '../components/users/Users.vue'
import Rights from '../components/rights/Rights.vue'
import Roles from '../components/roles/Roles.vue'
// 安装一下路由
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      children: [
        {path: '/users', component: Users},
        {path: '/rights', component: Rights},
        {path: '/roles', component: Roles}
      ]
    }
  ]
})
/**
 * 登录拦截如果你没有登录,是不允许访问其他页面的
 * 判断你是否登陆过
 * 现在登录成功后,会返回一个token令牌,保存到本地,
 * 如果判断是否登陆过 就获取本地存储的token 如果有值  就是登陆过
 * 本地没有值 就是没有登录过
 * 如果没有,在访问其他页面
 * 如果访问的登录页  可以访问,  如果是其他页面判断是否登录过
 * 登录过  =>继续访问
 * 没有登录 ==>跳转到登录页`
 */
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  }
})

// 导出路由,挂载在vue实例上
export default router
