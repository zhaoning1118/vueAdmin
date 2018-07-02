<template>
	<div class="charts">
		<div id="myChart1" style="width:100%;height:300px;"></div>
		<div id="myChart2" style="width:100%;height:300px;"></div>
		<div id="myChart3" style="width:100%;height:300px;"></div>
		<div id="myChart4" style="width:100%;min-height:500px;"></div>
	</div>
</template>
<style>
	.title{font-size:26px;text-align: center;color:#999;}
</style> 
<script>
	
	export default{
		data (){
			return {
				myChart1:null,
				myChart2:null,
				myChart3:null,
				myChart4:null
			}
		},
		mounted:function(){
			var that=this;
			that.drawLine();
			that.drawPie();
			that.drawArea();
			that.drawMap();
			that.resizeChart();
		},

		methods:{
			resizeChart:function(){
				var that=this;
				window.addEventListener('resize',function(){
					that.myChart1.resize();
					that.myChart2.resize();
					that.myChart3.resize();
					that.myChart4.resize();
				})
			},

			// 柱状图
			drawLine:function(){
				var that=this;
				// 基于准备好的dom，初始化echarts实例
		        that.myChart1 = that.$echarts.init(document.getElementById('myChart1'));

		        // 绘制图表
		        that.myChart1.setOption({
		            title: { text: 'echarts-drawLine' },
		            tooltip: {},
		            color:['#fac'],
		            xAxis: {
		                data: ["小明","小红","小花","小何","小张","小王"]
		            },
		            yAxis: {},

		            series: [{
		                name: '业绩',
		                type: 'bar',
		                data: [150, 20, 90, 56, 18, 200]
		            }]
		        });
			},

			// 饼状图
			drawPie:function(){
				var that=this;
				that.myChart2 = that.$echarts.init(document.getElementById('myChart2'));
				that.myChart2.setOption({
					title : {
				        text: 'this is pie chart',
				        subtext: 'pie',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },

				    legend: {
				        orient : 'vertical',
				        x : '200',
				        data:['百合','玫瑰','满天星','小雏菊','小茉莉']
				    },
				    // toolbox: {//工具栏
				    //     show : true,
				    //     feature : {
				    //         mark : {show: true},
				    //         dataView : {show: true, readOnly: false},
				    //         magicType : {
				    //             show: true, 
				    //             type: ['pie', 'funnel'],
				    //             option: {
				    //                 funnel: {
				    //                     x: '25%',
				    //                     width: '50%',
				    //                     funnelAlign: 'left',
				    //                     max: 1548
				    //                 }
				    //             }
				    //         },
				    //         restore : {show: true},
				    //         saveAsImage : {show: true}
				    //     }
				    // },
				    calculable : true,
				    series : [{
			            name:'春天来啦',
			            type:'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'百合'},
			                {value:310, name:'玫瑰'},
			                {value:234, name:'满天星'},
			                {value:135, name:'小雏菊'},
			                {value:1548, name:'小茉莉'}
			            ]
				    }]
				})
			},

			// 面积图
			drawArea:function(){
				var that=this;
				that.myChart3=that.$echarts.init(document.getElementById('myChart3'));
				that.myChart3.setOption({
					title : {
				        text: 'this is area-echarts',
				        subtext: '标准面积图'
				    },
					color:['#fac','#acf','#cfa'],  //颜色系列
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['数据1','数据2','数据3']
				    },
				    // toolbox: {  //工具栏
				    //     show : true,
				    //     feature : {
				    //         mark : {show: true},
				    //         dataView : {show: true, readOnly: false},
				    //         magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
				    //         restore : {show: true},
				    //         saveAsImage : {show: true}
				    //     }
				    // },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : ['周一','周二','周三','周四','周五','周六','周日']
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'数据1',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[10, 12, 21, 54, 260, 830, 710]
				        },
				        {
				            name:'数据2',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[30, 182, 434, 791, 390, 30, 10]
				        },
				        {
				            name:'数据3',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[1320, 1132, 601, 234, 120, 90, 20]
				        }
				    ]
				});
			},

			// 中国散点图
			drawMap:function(){
				var that=this;
				that.myChart4=that.$echarts.init(document.getElementById('myChart4'));

				// 引入本地china.json的写法
				that.$http.get('http://localhost:9001/static/china.json',{}).then(function(chinaJson){
					that.$echarts.registerMap('china', chinaJson.data); //引入中国地图

					that.myChart4.setOption({

				        tooltip: {
		 					//  show: false //不显示提示标签
		                    formatter: '{b}', //提示标签格式
		                    backgroundColor:"#ff7f50",//提示标签背景颜色
		                    textStyle:{color:"#fff"} //提示标签字体颜色
		                },

		                series: [{
		                    type: 'map',
		                    mapType: 'china',
		                    top:0,
		                    bottom:0,
		                    left:50,
		                    right:50,
		                    label: {
		                        normal: {
		                            show: true,//显示省份标签
		                            textStyle:{color:"#c71585"}//省份标签字体颜色
		                        },    
		                        emphasis: {//对应的鼠标悬浮效果
		                            show: true,
		                            textStyle:{color:"#800080"}
		                        } 
		                    },

		                    itemStyle: {
		                        normal: {
		                            borderWidth: .5,//区域边框宽度
		                            borderColor: '#009fe8',//区域边框颜色
		                            areaColor:"#e9a",//区域颜色
		                        },
		                        emphasis: {
		                            borderWidth: .5,
		                            borderColor: '#4b0082',
		                            areaColor:"#ffdead",
		                        }
		                    },

		                    data:[
		                        {name:'河南', selected:true}//河南为选中状态
		                    ]
		                }],

					})
				});
		
			},
		}
	};
</script>