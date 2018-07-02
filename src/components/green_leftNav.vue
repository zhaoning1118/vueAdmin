<template>
	<div class="green left_nav">
		 <el-menu
		    :default-active="$route.path"
		    class="el-menu-vertical-demo"
		    @open="handleOpen"
		    @close="handleClose"
		    background-color="#eef1f6"
		    text-color="#48576a"
		    active-text-color="#409EFF"
		    router >
		    <template v-for="item in items">
		    	
		    	<!-- 有子菜单 -->
		    	<template v-if="item.subs">
		    		<el-submenu :index="item.index">
		    			<template slot="title"><i :class="item.icon"></i>{{msg}}{{item.title}}</template>
		    			<el-menu-item v-for="(subItem,i) in item.subs" :key='i' :index="subItem.index">{{subItem.title}}</el-menu-item>
		    		</el-submenu>
		    	</template>

		    	<!-- 没有子菜单 -->
		    	<template v-else>
		    		<el-menu-item :index="item.index"><i :class="item.icon"></i>{{msg}}{{item.title}}</el-menu-item>
		    	</template>
		    	
		    </template>
		</el-menu>
	</div>
	
</template>
<style>
	.el-menu{height:100%;border-right:0;}
</style>
<script>
	import Bus from '../bus.js' //兄弟组件之间的传值创建公共的vue实例
	export default{
		data(){
			return{
				msg:'',
				items:[
					{
						title:'导航一',
						icon:'el-icon-location',
						index:'1',
						subs:[
							{
								title:'1-选项一',
								index:'table',
								path:'/home/table'
							}
						]
					},
					{
						title:'导航二',
						icon:'el-icon-document',
						index:'2',
						subs:[
							{
								title:'2-选项一',
								index:'carousel',
								path:'/home/carousel'
							},
							{
								title:'2-选项二',
								index:'up_load',
								path:'/home/up_load'
							}
						]
					},
					{
						title:'导航三',
						icon:'el-icon-menu',
						index:'tabs_card',
						path:'/home/tabs_card'
					},
					{
						title:'导航四',
						icon:'el-icon-setting',
						index:'pagination',
						path:'/home/pagination'
					},
					{
						title:'导航五',
						icon:'el-icon-service',
						index:'form',
						path:'/home/form'
					}
				]
			}
		},
		created:function(){
			var that=this;
			Bus.$on('demo',function(data){
				that.msg=data;
			});
		},
		methods:{
			handleOpen:function(key,keyPath){
			},
			handleClose:function(key,keyPath){
			}
		}
	};
</script>
