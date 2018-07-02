<template>
	<div class="treeDetail">
		<h3>当前树节点ID为<span>{{treeId}}</span></h3>
	</div>
</template>
<style>
	.treeDetail{padding:20px;}
	.treeDetail h3{margin-top:30px;font-size:20px;font-weight: 400;color:#333;}
	.treeDetail h3 span{color:#f56c6c;font-size:40px;padding:0 10px;}
</style>
<script>
	import Bus from '../bus.js'
	export default{
		data(){
			return {
				treeId:'0'
			}
		},
		created:function(){
			var that=this;
			Bus.$on('changeTree',function(data){
				that.treeId=data;
			});
		}
	}

</script>