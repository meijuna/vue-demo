/**
 * 路由器对象模块
 * @authors Your Name (you@example.org)
 * @date    2018-11-05 10:57:37
 * @version $Id$
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)  //声明使用插件

export default new VueRouter({
	//所有路由
	routes:[
		{
			path:'/',
			component: Home,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/home',
			component:Home,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/search',
			component:Search,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/order',
			component: Order,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/profile',
			component:Profile,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/login',
			component:Login
		}
	]
})