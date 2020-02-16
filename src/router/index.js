import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Msite from '../page/Msite/Msite.vue'
import Order from '../page/Order/Order.vue'
import Profile from '../page/Profile/Profile.vue'
import Search from '../page/Search/Search.vue'
import Login from '../page/Login/Login.vue'

Vue.use(Router)

export default new Router({
	routes: [
		// 主页面
		{
		  	path: '/msite',
		  	name: 'Msite',
		  	component: Msite,
			// 设置属性，控制路由显隐
			meta: {
				showFooter: true
			}
		},
		// 订单页面
		{
		  	path: '/order',
		  	name: 'Order',
			component: Order,
			// 设置属性，控制路由显隐
			meta: {
				showFooter: true
			}
		},
		// 个人中心页面
		{
		  	path: '/profile',
		  	name: 'Profile',
			component: Profile,
			// 设置属性，控制路由显隐
			meta: {
				showFooter: true
			}  
		},
		// 搜索页面
		{
		  	path: '/search',
		  	name: 'Search',
			component: Search,
			// 设置属性，控制路由显隐
			meta: {
				showFooter: true
			}  
		},
		// 登录页面
		{
		  	path: '/login',
		  	name: 'Login',
		  	component: Login
		},
		// 默认页面
		{
			path: '/',
			redirect: '/msite'
		}
	]
})
