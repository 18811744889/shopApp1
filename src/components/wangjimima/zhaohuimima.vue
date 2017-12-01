<template>
	<div id="app">
		<div class="header">
			<p @click="black()" class="fan"><img src="../../assets/back.png" class="cdd" /> 返回</p>
			<p class="zhao">找回密码</p>
		</div>
		<div class="naa">
			<p style="font-size: 18px;">请输入您的手机号码</p>
			<p><input type="text" placeholder="手机号" class="in" v-model="phone"/></p>
		</div>
		
		<div class="di">
			<p><button style="background: #ca3232; color: white;" @click="xia()">下一步</button></p>
			<p><button>联系客服</button></p>
		</div>
	</div>
</template>

<script>
	
	import { findPasswordByPhone } from '../../api/login'
	
	export default {
		name: 'app',
		data() {
			return {
				phone:''
			}
		},
		methods: {
			black() {
				this.$router.push('/denglu')
			},
			xia() {
				findPasswordByPhone({ phone: this.phone })
				.then((result)=>{
					if (!result.error_code) {
						console.log(result.data.code)
						localStorage.setItem('code',result.data.code)
						this.$router.push('/duanxin')
					}
					
				},(err)=>{
					console.log(err)
				})
				
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