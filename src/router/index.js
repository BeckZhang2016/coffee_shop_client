import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: resolve=>require(['../components/Home.vue'], resolve)},
    {path: '/login', name: 'Login', component: resolve=>require(['../components/Login.vue'], resolve)},
    {path: '/register', name: 'Register', component:  resolve=>require(['../components/register.vue'], resolve)},
  ]
})
