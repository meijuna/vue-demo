/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-11-05 09:53:30
 * @version $Id$
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' //引入路由器
import store from  './store'

new Vue({
	el:'#app',
	render:h => h(App),
	router, //使用vue-router
	store  //使用vuex 
})