// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由
import router from './router/router.js'
import './assets/commont/commont.css'

// 引入element 插件
import ElementUI from 'element-ui'
// 引入这个组件对应的插件
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// 安装 ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
