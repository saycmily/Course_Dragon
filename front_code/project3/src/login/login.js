import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '../router'
import store from '../store'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
