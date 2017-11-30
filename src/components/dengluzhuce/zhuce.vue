<template>
	<div id="app">
		<div class="header">
			<p @click="black()"><img src="../../assets/back.png" class="cdd" /> 返回</p>
			<img src="../../assets/signbg.jpg"  class="csss"/>
		</div>
		<div class="denglu">
			<p><router-link to ='/denglu'>登录</router-link></p>
			<p><router-link to ='/zhuce'>注册</router-link></p>
		</div>
		<div class="hao1">
			<p><img src="../../assets/icon1.jpg"/><input type="number" placeholder="请输入您的手机号" /></p>
			<p><img src="../../assets/icon2.jpg"/><input type="text" placeholder="请输入验证码" /></p>
			<p><img src="../../assets/icon3.jpg"/><input type="password" placeholder="请输入密码" /></p>
			<p><img src="../../assets/icon4.png"/><input type="number" placeholder="邀请码(没有可不填)" /></p>
		</div>
		<p class="btn1" @click="enroll()"><button>注册</button></p>
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
			black() {
				this.$router.push('../startPage')
			}
		},
		created(){
			var url="http://114.55.249.153:8028/"
			this.$http.get(url).then((res)=>{
				console.log()
			})
		}
	}
</script>

<style type="text/css" scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.cdd {
		width: 10px;
	}
	
	.header p {
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
	
	.hao1 p {
		text-align: center;
		position: relative;
	}
	
	.hao1 input {
		width: 75%;
		line-height: 35px;
		margin-top: 20px;
		border: none;
		border-bottom: 1px #bbbbbb solid;
		padding-left: 30px;
	}
	
	.hao1 img{
		position: absolute;
		width: 20px;
		top: 27px;
	}
	
	.btn1 {
		text-align: center;
	}
	
	.btn1 button {
		margin-top: 20px;
		width: 80%;
		line-height: 40px;
		border: none;
		background: #ca3232;
		border-radius: 7px;
		color: white;
	}
</style>