<template>
	<div id="app">
		<div class="header">
			<p id="fan" @click="fan()">
				<返回</p>
					<p id="ding">订单确认</p>
					<p id="imm"><img src="../../assets/shopCar/icon1.png" /></p>
		</div>
		<div class="dizhi">
			<div id="tu">
				<img src="../../assets/shopCar/dizhi.png" />
			</div>
			<div id="dizhishoujihao">
				<p>孙加宝 18811744889</p>
				<p>地址:北京市海淀区</p>
			</div>
		</div>
		<img src="../../assets/shopCar/订单确认_06.jpg" id="xian" />
		<div id="top">
			<input type="radio" /><span>洋玩意总店</span>
		</div>
		<div id="bottom">
			<ul>
				<li>
					<p class="img"><img src="../../assets/shopCar/icon2.png" /></p>
					<div>
						<p>卡单价萨芬考虑到记上了看风景</p>
						<p class="red">￥<s class="gray">￥596.00</s></p>
					</div>
				</li>
			</ul>
			<div id="sum">
				<p>小计 ￥438.00</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {

			}
		},
		methods: {
			fan() {
				this.$router.push('/index/shopCar')
			}
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	#xian {
		width: 100%;
		height: 2px;
		float: left;
	}
	
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		height: 50px;
		border-bottom: 1px #ca3232 solid;
	}
	
	#ding {
		text-align: center;
		line-height: 50px;
		font-weight: bold;
		font-size: 16px;
	}
	
	#fan {
		position: fixed;
		line-height: 50px;
		top: 0;
		left: 10px;
		font-size: 15px;
	}
	
	#imm {
		position: fixed;
		right: 10px;
		top: 0;
		line-height: 50px;
	}
	
	#imm img {
		margin-top: 10px;
	}
	
	.dizhi {
		width: 100%;
		height: 60px;
		margin-top: 50px;
		background: #fffdf5;
	}
	
	#tu {
		width: 15%;
		height: 60px;
		float: left;
	}
	
	#tu img {
		width: 20px;
		float: right;
		margin-right: 13px;
		margin-top: 15px;
	}
	
	#dizhishoujihao {
		width: 85%;
		height: 60px;
		float: left;
	}
	
	#dizhishoujihao p {
		margin: 5px 0px 0px 5px;
	}
	
	#top {
		width: 100%;
		height: 50px;
		background: white;
		font-size: 16px;
		line-height: 50px;
		padding-left: 12px;
		border-bottom: 1px solid #DDDDDD;
	}
	
	#bottom ul {
		width: 100%;
	}
	
	#bottom ul li {
		background: white;
		padding: 12px;
		display: flex;
	}
	
	.img {
		border: 1px solid #DDDDDD;
		padding: 4px 15px;
	}
	
	.img img{
		width: 40px;
	}
	
	.red {
		color: #CE3232;
		font-size: 16px;
	}
	
	#sum {
		padding-left: 12px;
		border-top: 1px solid #DDDDDD;
		height: 40px;
		line-height: 40px;
		background: white;
	}
	
	#sum p {
		float: right;
		padding-right: 20px;
		font-size: 16px;
		color: #CE3232;
	}
</style>