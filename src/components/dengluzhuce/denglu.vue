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
		<div class="hao">
			<p><img src="../../assets/icon1.jpg" /><input type="text" @focus="clear('phone')" :class="{red:phoneRed}" v-model="phone" placeholder="请输入手机号" /></p>
			<p><img src="../../assets/icon3.jpg" /><input type="password" @focus="clear('pwd')" :class="{red:pwdRed}" v-model="pwd" placeholder="请输入密码" /></p>
		</div>
		<p class="btn" @click="register()"><button>登录</button></p>
		<p class="di" @click="wang()">忘记密码？</p>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				phone: '',
				pwd: '',
				phoneRed: false,
				pwdRed: false
			}
		},
		methods: {
			black() {
				this.$router.push('/startPage')
			},
			wang() {
				this.$router.push('/zhaohuimima')
			},
			clear(val) {
				switch(val) {
					case 'phone':
						if(this.phoneRed == true) {
							this.phone = '';
							this.phoneRed = false;
						}
						break;
					case 'pwd':
						if(this.pwdRed == true) {
							this.pwd = '';
							this.pwdRed = false;
						}
						break;
				}
			},
			register() {
				if(this.phone == '') {
					this.phone = '手机号不能为空'
					this.phoneRed = true
				} else {
					if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))) {
						this.phone = '请填写正确的手机号码'
						this.phoneRed = true
						return;
					} else {
						if(this.pwd == '') {
							this.pwd = '密码不能为空'
							this.pwdRed = true
						} else {
							if(this.qrpwd == this.pwd) {
								var url = 'http://114.55.249.153:8028/login/LoginByPhone';
								var options = {
									phone: this.phone,
									password: this.pwd
								}
								this.$http.post(url, options, {
									emulateJSON: true
								}).then((res) => {
									if(res.data.flag == '1') {
										console.log("登录成功")
										this.$router.push('/startPage');
									}
								})
							} else {
								this.qrpwd = '两次密码不一致'
								this.qrpwdRed = true
							}
						}
					}
				}
			},
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
	
	.hao {
		width: 100%;
		height: 150px;
	}
	
	.hao p {
		text-align: center;
		position: relative;
	}
	
	.hao img {
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