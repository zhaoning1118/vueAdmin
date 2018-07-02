<template>
	<div class="wrap">
		<div class="top">
			<top-nav></top-nav>
		</div>
		<div id="left">
			<green-leftNav v-show="true"></green-leftNav>
		</div>
		
		<div id="right">
			<sel-carousel></sel-carousel>
			<tabs-card></tabs-card>
			<sel-upLoad></sel-upLoad>
		</div>
	</div>
</template>
<style>

</style>
<script>
	import topNav from '../components/top_nav.vue';
	import greenLeftNav from '../components/green_leftNav.vue';
	import sel_carousel from '../components/carousel.vue';
	import sel_upLoad from '../components/up_load.vue';
	import tabs_card from '../components/tabs_card.vue';
	export default{
		components:{
			"sel-carousel":sel_carousel,
			"sel-upLoad":sel_upLoad,
			"top-nav":topNav,
			"green-leftNav":greenLeftNav,
			"tabs-card":tabs_card
		},
		data () {
			return {
				
			}
		},
		methods:{

		}
	};
</script>