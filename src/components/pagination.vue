<template>
	<div class="block">
		<!-- 使用vuex传值 -->
		<div class="studyVuex">
			<p>{{msg}}</p>
			<span>{{$store.state.count}}</span>
			<button @click="$store.commit('add')"> add </button>
			<button @click="$store.commit('reduce')"> reduce </button>
		</div>

		<!-- 分页 -->
	    <el-pagination
		    @size-change="handleSizeChange"
		    @current-change="handleCurrentChange"
		    :current-page="currentPage4"
		    :page-sizes="[10, 30, 50, 100]"
		    :page-size="100"
		    layout="total, sizes, prev, pager, next, jumper"
		    :total="100">
		</el-pagination>

	  </div>
</template>

<style>
	.studyVuex{padding:20px;}
	.studyVuex span{display:block;font-size:30px;color:#f56c6c;padding:15px 0;}
	.studyVuex button{outline: none;padding:5px 15px;border:1px solid #ccc;text-align: center;}
	.el-pagination{margin-top:30px;}
</style>

<script type="text/javascript">
	import store from '@/store/store.js'
	export default {
	    methods: {
	      handleSizeChange(val) {
	        console.log('每页'+ val +'条');
	      },
	      handleCurrentChange(val) {
	        console.log('当前页:'+ val);
	      }
	    },
	    data() {
	      return {
	      	msg:'学习使用vuex传值',
	        currentPage1: 5,
	        currentPage2: 5,
	        currentPage3: 5,
	        currentPage4: 4,
	        store
	      };
	    }
	}
</script>