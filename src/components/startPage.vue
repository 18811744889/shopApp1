<template>
	<div id="app">
		<img src="../assets/logo.png" class="imgd" />
		<div class="wu">
			<p class="btn1"><button>微信一键登录</button></p>
			<ul>
				<li><button class="de" @click="denglu()">登录</button></li>
				<li><button class="xin" @click="xin()">新用户</button></li>
			</ul>
			<p class="di">Copyright @ 2016 logo.com</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
			denglu() {
				this.$router.push('/denglu')
			},
			xin() {
				this.$router.push('/zhuce')
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		background: url(../assets/启动界面.png) no-repeat;
		background-size: 100% 100vh;
	}
	
	.imgd {
		width: 100%;
		height: 99vh;
	}
	
	.wu {
		width: 100%;
		height: 150px;
		position: fixed;
		bottom: 0;
	}
	
	.btn1 {
		text-align: center;
	}
	
	.btn1 img {
		width: 20px;
		padding-top: 10px;
		margin-right: 2%;
	}
	
	.btn1 button {
		width: 90%;
		line-height: 40px;
		color: white;
		background: #00a80c;
		border: none;
		border-radius: 8px;
	}
	
	ul li {
		margin-top: 20px;
		width: 50%;
		float: left;
		text-align: center;
		list-style: none;
	}
	
	.de {
		border: none;
		border-radius: 8px;
		width: 80%;
		height: 40px;
		color: white;
		background: none;
		border: 1px white solid;
	}
	
	.xin {
		border: none;
		border: 1px white solid;
		border-radius: 8px;
		width: 80%;
		height: 40px;
		background: none;
		color: white;
	}
	
	.de:hover {
		background: white;
		color: red;
	}
	
	.xin:hover {
		background: white;
		color: red;
	}
	
	.di {
		margin-top: 80px;
		color: white;
		font-size: 10px;
		text-align: center;
	}
</style>