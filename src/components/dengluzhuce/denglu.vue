<template>
	<div id="app">
		<div class="header">
			<p @click="black()"><img src="../../assets/back.png" class="cdd"/> 返回</p>
			<img src="../../assets/signbg.jpg"  class="csss"/>
		</div>
		<div class="denglu">
			<p><router-link to ='/denglu'>登录</router-link></p>
			<p><router-link to ='/zhuce'>注册</router-link></p>
		</div>
		<div class="hao">
			<p><img src="../../assets/icon1.jpg"/><input type="text" placeholder="请输入手机号" /></p>
			<p><img src="../../assets/icon3.jpg"/><input type="password" placeholder="请输入密码" /></p>
		</div>
		<p class="btn"><button>登录</button></p>
		<p class="di" @click="wang()">忘记密码？</p>
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
		methods:{
			black(){
				this.$router.push('/startPage')
			},
			wang(){
				this.$router.push('/zhaohuimima')
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	
	.cdd{
		width: 10px;
	}
	
	.header p{
		position: absolute;
		top: 0;
		left: 5%;
		line-height: 50px;
		color: white;
	}
	
	.header {
		width: 100%;
		height: 220px;
	}
	
	.csss {
		width: 100%;
		height:220px;
	}
	
	.denglu {
		width: 100%;
		height: 50px;
		z-index: 2;
	}
	
	.denglu p{
		width: 50%;
		float: left;
		line-height: 50px;
		text-align: center;
		background: #f3f3f3;
		z-index: 100;
	}
	
	.hao {
		width: 100%;
		height: 150px;
	}
	
	.hao p {
		text-align: center;
		position: relative;
	}
	
	.hao img{
		position: absolute;
		width: 20px;
		top: 30px;
	}
	
	.hao input {
		width: 85%;
		line-height: 40px;
		margin-top: 20px;
		border: none;
		border-bottom: 1px #bbbbbb solid;
		text-align: center;
	}
	
	.btn {
		text-align: center;
	}
	
	.btn button {
		width: 80%;
		line-height: 40px;
		border: none;
		background: #ca3232;
		border-radius: 7px;
		color: white;
	}
	
	.di {
		text-align: center;
		line-height: 80px;
		color: #666666;
	}
</style>