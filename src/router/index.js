import Vue from 'vue'
import Router from 'vue-router'

import UserMangage from '../components/content/UserManage.vue'
import Main from '../components/content/Main.vue'
import Application from '../components/content/Application.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {path: '/login', name: 'Login', component: resolve => require(['../components/Login.vue'], resolve)},
    {path: '/register', name: 'Register', component: resolve => require(['../components/register.vue'], resolve)},
    {path: '/', name: 'Home', component: resolve => require(['../components/Home.vue'], resolve),
      children: [
        {path: '/', name: 'Main', component: Main},
        {
          path: '/userManage',
          name: 'userManage',
          component: UserMangage
        },
        {
          path: '/application',
          name: 'application',
          component: Application
        },
      ]
    }

  ]
})
