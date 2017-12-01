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
			<p><img src="../../assets/icon1.jpg" /><input type="text" @focus="clear('phone')" :class="{red:phoneRed}" v-model="phone" placeholder="请输入您的手机号" /></p>
			<p><img src="../../assets/icon2.jpg" /><input type="text" @focus="clear('yzm')" :class="{red:yzmRed}" v-model="yzm" placeholder="请输入验证码" />
				<button @click="getCode()" class="huoqu" :disabled="!show">
					<span v-show="show">获取验证码</span>
         			<span v-show="!show" class="count">{{count}}s</span>
				</button>
			</p>
			<p><img src="../../assets/icon3.jpg" /><input type="text" @focus="clear('pwd')" :class="{red:pwdRed}" v-model="pwd" placeholder="请输入密码" /></p>
			<p><img src="../../assets/icon4.png" /><input type="text" @focus="clear('qrpwd')" :class="{red:qrpwdRed}" v-model="qrpwd" placeholder="请确认密码" /></p>
		</div>
		<p class="btn1" @click="register()"><button>注册</button></p>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				phone: '',
				yzm: '',
				pwd: '',
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

			black() {
				this.$router.push('/startPage')
			},

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
					case 'pwd':
						if(this.pwdRed == true) {
							this.pwd = '';
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

			register() {
				if(this.phone == '') {
					this.phone = '手机号不能为空'
					this.phoneRed = true
				} else {
					if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))) {
						this.phone = '请填写正确的手机号码'
						this.phoneRed = true
						return;
					}
					if(this.yzm == '') {
						this.yzm = '验证码不能为空'
						this.yzmRed = true
					} else {
						if(this.pwd == '') {
							this.pwd = '密码不能为空'
							this.pwdRed = true
						} else {
							if(this.qrpwd == this.pwd) {
								var url = 'http://114.55.249.153:8028/login/regWithPhone';
								var options = {
									phone: this.phone,
									password: this.pwd
								}
								this.$http.post(url, options, {
									emulateJSON: true
								}).then((res) => {
									if(res.data.flag == '1') {
										console.log("注册成功")
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

			getCode() {
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