import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'
import Rights from '../components/Power/Rights'
import Roles from '../components/Power/Roles'
import Cate from '../components/goods/Cate'
import Params from '../components/goods/Params'

Vue.use(VueRouter)

// const routes = [

// ]

const router = new VueRouter({
  routes: [
    // 重定向到登录页面
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/home', 
      component: Home, 
      redirect: '/welcome', 
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users},
        { path: '/rights', component: Rights},
        { path: '/roles', component: Roles},
        { path: '/categories', component: Cate},
        { path: '/params', component: Params},
      ] 
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从那个路径跳转而来
  // next 是一个函数，表示放行
  //  next() 放行     next('/login') 强制跳转

  if (to.path === '/login') {
    return next();
  }
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router
