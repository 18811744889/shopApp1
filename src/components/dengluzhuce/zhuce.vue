<template>
	<div id="app">
		<div class="header">
			<p @click="black()"><img src="../../assets/back.png" class="cdd" /> 返回</p>
			<img src="../../assets/signbg.jpg" class="csss" />
		</div>
		<div class="denglu">
			<p>
				<router-link to='/denglu'>登录</router-link>
			</p>
			<p>
				<router-link to='/zhuce'>注册</router-link>
			</p>
		</div>
		<div class="hao1">

			<p><img src="../../assets/icon1.jpg" /><input type="text" v-model="phone" @focus="clear('phone')" placeholder="请输入您的手机号" /></p>

			<p><img src="../../assets/icon2.jpg" /><input type="text" v-model="yzm" @focus="clear('yzm')" placeholder="请输入验证码" />
				<button @click="getCode()" class="huoqu" :disabled="!show">
					<span v-show="show">获取验证码</span>
         			<span v-show="!show" class="count">{{count}}s</span>
				</button>
			</p>

			<p><img src="../../assets/icon3.jpg" /><input type="text" v-model="password" @focus="clear('password')" placeholder="请输入密码" /></p>

			<p><img src="../../assets/icon4.png" /><input type="text" v-model="qrpwd" @focus="clear('qrpwd')" placeholder="请确认密码" /></p>
		</div>
		<p class="btn1" @click="register()"><button>注册</button></p>
	</div>
</template>

<script>
	import { sendCode, regWithPhone } from '../../api/login'

	export default {
		name: 'app',
		data() {
			return {
				phone: '',
				yzm: '',
				password: '',
				qrpwd: '',
				phoneRed: false,
				yzmRed: false,
				pwdRed: false,
				qrpwdRed: false,
				show: true,
				count: '',
				timer: null,
			}
		},
		methods: {
			//			返回
			black() {
				this.$router.push('/startPage')
			},
			//			正则判断
			clear(val) {
				switch(val) {
					case 'phone':
						if(this.phoneRed == true) {
							this.phone = '';
							this.phoneRed = false;
						}
						break;
					case 'yzm':
						if(this.yzmRed == true) {
							this.yzm = '';
							this.yzmRed = false;
						}
						break;
					case 'password':
						if(this.pwdRed == true) {
							this.password = '';
							this.pwdRed = false;
						}
						break;
					case 'qrpwd':
						if(this.qrpwdRed == true) {
							this.qrpwd = '';
							this.qrpwdRed = false;
						}
						break;
				}
			},

			//			注册手机号
			register() {

				if(this.phone == '' && this.yzm == '' && this.password == '' && this.qrpwd == '') {
					this.phone = '手机号不能为空'
					this.phoneRed = true
					this.yzm = '验证码不能为空'
					this.yzmRed = true
					this.password = '密码不能为空'
					this.pwdRed = true
					this.qrpwd = '确认密码不能为空'
					this.qrpwdRed = true
				} else {
					let params = {
						phone: this.phone,
						password: this.password
					}
					regWithPhone(params).then((res) => {
						let msg = res.data.error_code
						if(msg == 0) {
							console.log('注册成功')
							this.$router.push('/startPage')
						} else {
							console.log('注册失败')
						}
					})
				}
			},

			//			倒计时功能
			getCode() {

				let params = {
					phone: this.phone
				}
				sendCode(params).then((res) => {
					const TIME_COUNT = 60;
					if(!this.timer) {
						this.count = TIME_COUNT;
						this.show = false;
						this.timer = setInterval(() => {
							if(this.count > 0 && this.count <= TIME_COUNT) {
								this.count--;
							} else {
								this.show = true;
								clearInterval(this.timer);
								this.timer = null;
							}
						}, 1000)
					}
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
		height: 170px;
	}
	
	.csss {
		width: 100%;
		height: 170px;
	}
	
	.denglu {
		width: 100%;
		height: 50px;
		z-index: 2;
	}
	
	.denglu p {
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
		line-height: 50px;
		margin-top: 10px;
		border: none;
		border-bottom: 1px #bbbbbb solid;
		padding-left: 30px;
		outline: none;
	}
	
	.hao1 img {
		position: absolute;
		width: 20px;
		top: 23px;
	}
	
	.huoqu {
		position: absolute;
		width: 90px;
		height: 35px;
		line-height: 27px;
		border: 1px solid #C0C0C0;
		color: #C0C0C0;
		right: 12.5%;
		top: 17px;
		background: white;
		border-radius: 5px;
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