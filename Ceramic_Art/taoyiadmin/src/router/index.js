import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/loginadmin'
    },
    {
      path: '/loginadmin',
      component: () => import('@/components/loginadmin')
    },
    {
      path: '/usercontrol',
      component: () => import('@/components/usercontrol')
    },
  ]
})
