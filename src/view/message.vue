<template>
	<div class="messagePage">
		<div class="top">
			<top-nav></top-nav>
		</div>
		<p v-show="messageList.length<=0">这里是还没有处理的消息哦！</p>
		<ul v-show="messageList.length>0" class="list">
			<li v-for='(message,index) in messageList'>
				<span class="sub">{{index}}</span>
				<span class="name">{{message.name}}</span>在
				<i class="date">{{message.date}}</i>发来1条消息
			</li>
		</ul>
	</div>
</template>
<style>
	.messagePage p{
		text-align: center;
		margin:30px 0;
		font-size:26px;
		color:#808080;
	}
	.messagePage .list{
		margin:20px;
	}
	.messagePage .list li{
		font-size:24px;
		color:#505050;
		line-height:50px;
		border-bottom: 1px solid #e6e6e6;
		letter-spacing: 3px;
	}
	.messagePage .list li span.sub{padding-right:50px;}
	.messagePage .list li span.name{color:#f56c6c;padding:0 20px;}
	.messagePage .list li i.date{color:#409EFF;padding:0 30px;}
</style>
<script>

	import topNav from '../components/top_nav.vue'
	import {requestMessage} from '../api.js'//引入获取messageList的接口

	export default{
		components:{
			"top-nav":topNav
		},
		data(){
			return {
				messageList:[]
			}
		},
		created:function(){
			var that=this;
			// 利用mock.js虚拟数据
			requestMessage().then(function(res){
				that.messageList=res.Message;
			});
		}
	}

</script>