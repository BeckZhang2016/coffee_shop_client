import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/login', name: 'Login', component: resolve => require(['../components/Login.vue'], resolve)},
    {path: '/register', name: 'Register', component: resolve => require(['../components/register.vue'], resolve)},
    {path: '/', name: 'Home', component: resolve => require(['../components/Home.vue'], resolve),children: [
      {path: '/', name: 'Test', component: resolve => require(['../components/test.vue'], resolve)}
    ]}

  ]
})
