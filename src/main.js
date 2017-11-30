import Vue from 'vue'
import App from './App.vue'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//使用vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//路由
//1
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//2

import startPage from './components/startPage.vue'
import denglu from './components/dengluzhuce/denglu.vue'
import zhuce from './components/dengluzhuce/zhuce.vue'
import zhaohuimima from './components/wangjimima/zhaohuimima.vue'
import duanxin from './components/wangjimima/duanxin.vue'
import mima from './components/wangjimima/mima.vue'

//3
let vueRouter = new VueRouter({
	routes: [
		{path: '/',redirect: "startPage"},
		{path: '/startPage',component:startPage},
		{path: '/denglu',component:denglu},
		{path: '/zhuce',component:zhuce},
		{path: '/zhaohuimima',component:zhaohuimima},
		{path: '/duanxin',component:duanxin},
		{path: '/mima',component:mima}
	]
})

new Vue({
	el: '#app',
	//4
	router: vueRouter,
	render: h => h(App)
})