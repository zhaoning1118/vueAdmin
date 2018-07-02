<template>
	<div class="home" id="home" ref="oBox">
		<div>
			<top-nav v-on:letwhiteshow="toShowWhite" v-on:letgreenshow='toShowGreen'></top-nav>
		</div>

		<div  id="left" ref="oLeft" >
			<white-leftNav v-show="showWhite"></white-leftNav>
			<green-leftNav v-show="showGreen"></green-leftNav>
		</div>

		<div id="right" ref="oRight">
			<!-- 过渡动画 -->
			<transition name="fade" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutRight">
				<router-view></router-view>
			</transition>
		</div>

		<!-- 拖拽线 -->
		<div id='line' @mousedown="onmousedown" ref="oLine"></div>
		
	</div>
</template>
<style>
	.animated {
	  -webkit-animation-duration: 0.3s;
	  animation-duration: 0.3s;
	  -webkit-animation-fill-mode: both;
	  animation-fill-mode: both;
	}
</style>
<script>
	import topNav from '../components/top_nav.vue';
	import whiteLeftNav from '../components/white_leftNav.vue';
	import greenLeftNav from '../components/green_leftNav.vue';

	export default{
		// 引入子组件
		components: {
		    'top-nav': topNav,
		    'white-leftNav': whiteLeftNav,
		    'green-leftNav':greenLeftNav
		},

		data () {
			return {
				showGreen:false,
				showWhite:true,
				myNid:''
			}
		},

		mounted:function(){
		
		},
		created:function(){ 
			
		},
		
		methods:{
			// 拖拽线
			onmousedown:function(e) {
				var that=this;
				//vue2中获取dom元素需用ref属性注册
				var oBox=that.$refs.oBox,
					oLine=that.$refs.oLine,
					oleft=that.$refs.oLeft,
					oright=that.$refs.oRight;
			 	var disX = (e || event).clientX;
			 	oLine.left = oLine.offsetLeft;

			 	document.onmousemove = function(e) { 
				 	var iT = oLine.left + ((e || event).clientX - disX);
				 	var e=e||window.event,tarnameb=e.target||e.srcElement;
				 	var maxT = oBox.clientWidth - oLine.offsetWidth;
				 	
				 	oLine.style.margin = 0;

				 	iT < 0 && (iT = 0);
				 	iT > maxT && (iT = maxT);

				 	oLine.style.left = oleft.style.width = iT + "px";
				 	oright.style.width = oBox.clientWidth - iT + "px";
			
				 	return false;
			 	}; 

				document.onmouseup = function() {
					document.onmousemove = null;
					document.onmouseup = null; 
					oLine.releaseCapture && oLine.releaseCapture()
				};

				oLine.setCapture && oLine.setCapture();
				return false;
			},
	       
			toShowWhite:function(nid){
				this.myNid=nid;
				this.showGreen=false;
				this.showWhite=true;
			},

			toShowGreen:function(){
				this.showWhite=false;
				this.showGreen=true;
			}
		}
	}
</script>