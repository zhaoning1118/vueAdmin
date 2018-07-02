<template>
	<div class="carousel_box">
    <p class='textTip'>轮播图插件</p>
	 	<el-carousel :interval="3000" arrow="hover">
		    <el-carousel-item v-for="item in 4" :key="item">
		      <h3>{{ item }}</h3>
		    </el-carousel-item>
		 </el-carousel>

	</div>
</template>
<style>
  .textTip{font-size:30px;margin:30px;text-align: center;}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
    color:#fff;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
