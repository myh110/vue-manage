import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'
import '@/style/normalize.css'
import '@/style/icon.css';
// import '@/style/base.styl'
// import '@/style/utility.less'

// import './plugins/element.js'

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('ms_username');
  if(!role && to.path !== '/login'){
      next('/login');
  }else if(to.meta.permission){
      // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
      role === 'admin' ? next() : next('/403');
  }else{
      // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
      if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
          Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
              confirmButtonText: '确定'
          });
      }else{
          next();
      }
  }
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
