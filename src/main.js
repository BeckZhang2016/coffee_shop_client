// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import {sync} from 'vuex-router-sync'
import axios from 'axios'
import router from './router/index.js'
import store from './store/index.js'
import iView from 'iview'
import 'iView/dist/styles/iview.css'

Vue.use(iView);
sync(store, router);
Vue.config.productionTip = false;

var vm = new Vue({
  router,
  store,
  template: '<App></App>',
  components: {App}
}).$mount('#app');

const server = vm.$store.state.WEB_SERVER.HOST + ":" + vm.$store.state.WEB_SERVER.PORT + vm.$store.state.WEB_SERVER.BASE_PATH;
var request = axios.create({
  baseURL: server
});

Vue.prototype.$http = request;
// vm.$router.push({name: 'Login'});
