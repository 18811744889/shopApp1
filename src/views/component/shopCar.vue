<template>
	<div id="app">
		<div id="header">
			<p>购物车</p>
			<ul>
				<li><button>编辑</button></li>
				<li><img src="../../assets/shopCar/icon1.png" /></li>
			</ul>
		</div>
		<div id="center">
			<div id="top">
				<input type="radio" /><span>洋玩意总店</span>
			</div>
			<div id="bottom">
				<ul>
					<li v-for="(item,$index) in lists">
						<input type="checkbox" class="radio" :value="item.id" v-model="checked" @click="currClick($index,$event)" />
						<p class="img">{{item.productName}}</p>
						<div>
							<p>{{item.name}}</p>
							<p class="red">￥{{item.price}} {{item.sum}} <s class="gray">￥596.00</s></p>
							<div class="add">
								<p v-on:click="reduceNum($index)">-</p>
								<p>{{item.count}}</p>
								<p v-on:click="addNum($index)">+</p>
							</div>
						</div>
					</li>
				</ul>
				<div id="sum">
					<p>小计 ￥</p>
				</div>
			</div>
		</div>
		<div id="empty">
			-------------- 为您推荐 --------------
		</div>
		<div id="footer">
			<ul class="ul1">
				<li style="margin-right: 10%;">
					<p><img src="../../assets/shopCar/icon3.png" style="padding: 12px 16px;" /></p>
					<p>日本CDN 黑玛卡 强肾 滋补 60粒</p>
				</li>
				<li>
					<p><img src="../../assets/shopCar/icon2.png" style="padding: 12px 40px; height: 167px;" /></p>
					<p>日本CDN 黑玛卡 强肾 滋补 60粒</p>
				</li>
			</ul>
			<div class="kong"></div>
			<ul class="ul2">
				<li>
					<div id="flex">
						<div id="left"><input type="checkbox" v-model="checkAll" /><span>全选（{{checkedCount}}）</span></div>
						<div id="right">
							<p class="big">合计：￥{{total}}</p>
							<p>(不包含运费)</p>
						</div>
					</div>
				</li>
				<li>
					<p @click="queren()">去付款</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				checked: [],
				totalPrice: [],
				lists: [{
						count: 1,
						productName: '产品1',
						sum: 200,
						price: 200,
						name: 'Metabolic酵素x酵母精华立 减肥排毒60粒',
						id: 1
					},
					{
						count: 1,
						productName: '产品2',
						price: 200,
						sum: 200,
						name: 'Metabolic酵素x酵母精华立 减肥排毒60粒',
						id: 2
					}
				]
			}
		},
		computed: {
			checkAll: {
				get: function() {
					return this.checkedCount == this.lists.length;
				},
				set: function(value) {
					if(value) {
						this.checked = this.lists.map(function(item) {
							return item.id
						})
					} else {
						this.checked = []
					}
				}
			},
			checkedCount: {
				get: function() {
					return this.checked.length;
				}
			},
			total() {
				let sum = 0;
				for(let i = 0; i < this.totalPrice.length; i++) {
					sum += this.totalPrice[i];
				}
				return sum;
			}
		},
		methods: {
			
			queren(){
				this.$router.push('/dingdanqueren')
			},
			
			currClick(index, event) {
				let total = this.lists[index].price * this.lists[index].count;
				this.totalPrice.push(total);
				console.log(this.totalPrice);
			},

			addNum($index) {
				this.lists[$index].count++;
				this.lists[$index].sum = this.lists[$index].count * this.lists[$index].price;
				this.sum= 0;
				for (var i = 0; i < this.lists.length; i++) {
					this.sum = this.sum + this.lists[i].price
				}
			},

			reduceNum($index) {
				this.lists[$index].count--;
				this.lists[$index].sum = this.lists[$index].count * this.lists[$index].price;
				this.sum= 0;
				for (var i = 0; i < this.lists.length; i++) {
					this.sum = this.sum + this.lists[i].price
				}
			}

		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.kong {
		height: 95px;
	}
	
	#app {
		background: #F1F1F1;
	}
	
	#header {
		width: 100%;
		height: 50px;
		background: white;
		position: fixed;
		top: 0;
		border-bottom: 1px solid #CE3232;
	}
	
	#header p {
		text-align: center;
		line-height: 50px;
		font-size: 22px;
		font-weight: bold;
	}
	
	#header ul {
		top: 0;
		right: 2%;
		margin-top: 13px;
		position: fixed;
	}
	
	#header ul li {
		float: left;
		list-style: none;
		margin-left: 13px;
	}
	
	#header ul li button {
		width: 50px;
		height: 30px;
		background: white;
		border: 1px #DDDDDD solid;
		border-radius: 5px;
	}
	
	#top {
		margin-top: 50px;
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
		margin: 0 12px;
		border: 1px solid #DDDDDD;
		padding: 4px 26px;
	}
	
	.radio {
		width: 26px;
		height: 26px;
		color: white;
		margin-top: 50px;
	}
	
	.red {
		color: #CE3232;
		font-size: 16px;
	}
	
	.gray {
		color: darkgray;
	}
	
	.add {
		margin-top: 18px;
		width: 100%;
		display: flex;
		text-align: center;
		line-height: 32px;
		font-size: 18px;
	}
	
	.add p:nth-child(1) {
		width: 15%;
		height: 32px;
		border-radius: 6px 0 0 6px;
		background: #f7f7f7;
		margin-right: 1%;
	}
	
	.add p:nth-child(2) {
		width: 25%;
		height: 32px;
		background: #E6E6E6;
	}
	
	.add p:nth-child(3) {
		width: 15%;
		height: 32px;
		background: #E6E6E6;
		margin-left: 1%;
		border-radius: 0px 6px 6px 0px;
	}
	
	#sum {
		padding-left: 12px;
		border-top: 1px solid #DDDDDD;
		height: 40px;
		line-height: 40px;
		background: white;
	}
	
	#sum p {
		padding-left: 30px;
		font-size: 16px;
		color: #CE3232;
	}
	
	#empty {
		color: darkgray;
		text-align: center;
		width: 100%;
		line-height: 40px;
		height: 40px;
	}
	
	#footer {
		width: 100%;
		height: 240px;
		background: white;
	}
	
	#footer .ul1 {
		width: 100%;
		display: flex;
		padding: 16px;
	}
	
	#footer .ul1 li {
		list-style: none;
		text-align: center;
		width: 45%;
	}
	
	#footer ul1 li img {
		border: 1px solid #DDDDDD;
	}
	
	.ul2 {
		width: 100%;
		height: 50px;
		line-height: 50px;
		position: fixed;
		bottom: 60px;
		display: flex;
	}
	
	.ul2 li {
		list-style: none;
		color: white;
	}
	
	.ul2 li:nth-child(1) {
		width: 70%;
		background: black;
		opacity: 0.8;
	}
	
	.ul2 li:nth-child(2) {
		width: 30%;
		text-align: center;
		background: #CE3232;
		font-size: 18px;
	}
	
	#flex {
		display: flex;
		width: 100%;
	}
	
	#left {
		width: 30%;
		padding-left: 16px;
	}
	
	#right {
		width: 70%;
		line-height: 22px;
		text-align: right;
		padding: 4px 18px 0 0;
	}
	
	.big {
		font-size: 18px;
	}
</style>