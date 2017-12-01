<template>
	<div id="app">
		<div class="header">
			<p @click="black()" class="fan"><img src="../../assets/back.png" class="cdd" /> 返回</p>
			<p class="zhao">找回密码</p>
		</div>
		<div class="naa">
			<p style="font-size: 18px;">短信验证码已发送,请输入验证码</p>
			<p><input type="text" placeholder="验证码" class="in" v-model="inPutCode" /></p>
		</div>

		<div class="di">
			<p><button style="background: #ca3232; color: white;" @click="xia()">下一步</button></p>
			<p>28`后重新发送</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				code:'',
				inPutCode:''
			}
		},
		created(){
			if (localStorage.getItem('code')) {
				this.code=localStorage.getItem('code')
			}
		},
		methods: {
			black() {
				this.$router.push('/zhaohuimima')
			},
			xia() {
				
//				判断验证码是否一致
				if (this.inPutCode=== this.code) {
					console.log(this.inPutCode)
					console.log(this.code)
					this.$router.push('/mima')
				}
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.header {
		width: 100%;
		height: 50px;
		background: #ca3232;
	}
	
	.cdd {
		width: 10px;
	}
	
	.fan {
		position: absolute;
		top: 0;
		left: 5%;
		line-height: 50px;
		color: white;
	}
	
	.zhao {
		text-align: center;
		line-height: 50px;
		color: white;
	}
	
	.naa {
		width: 100%;
		height: 150px;
		margin-top: 80px;
	}
	
	.naa p {
		text-align: center;
		margin-top: 20px;
	}
	
	.in {
		width: 80%;
		height: 50px;
		text-align: center;
		border: none;
		color: #bbbbbb;
		border-bottom: 1px #bbbbbb solid;
	}
	
	.di p {
		text-align: center;
		margin-top: 20px;
		color: #ca3232;
	}
	
	.di button {
		width: 80%;
		height: 40px;
		border: none;
		border-radius: 10px;
		border: 1px #ca3232 solid;
		background: none;
		color: #ca3232;
	}
</style>