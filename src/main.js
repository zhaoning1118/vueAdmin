// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './store/store' //vuex传值
import 	Mock from './mock/mock'
Mock.init();

import echarts from 'echarts';
import "./style/js/china.js"
import 'element-ui/lib/theme-chalk/index.css'

import './style/animate.css'
import './style/reset.css'
import './style/common.css'


Vue.config.productionTip = false;
Vue.prototype.$echarts=echarts;
Vue.prototype.$http=axios;

Vue.use(ElementUI)
Vue.use(router)
Vue.use(Vuex)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

