<template>
<div class="left_nav white" ref="oLeft">
  <span>当前nid为 <i>{{targetNid}}</i></span>
	<div class="parent">
		<el-tree :data='data' :prop="defaultProps" @node-click="handleNodeClick"></el-tree>
	</div>
</div>
</template>
<style>
  .el-tree{background-color:#eef1f6;}
  .el-tree-node:focus>.el-tree-node__content, .el-tree-node__content:hover{background-color:#f8f8f8;}
  .left_nav span i{color:#cc123f;font-style: normal;}
  .el-tree-node__content{height:36px;}
  .el-tree-node__label{font-size:16px;}
  .num{
    font-size:18px;
    margin:20px 0;
  }
  .num span{
    color:#cc123f;
    padding:0 10px;
  }
</style>
<script>

  import Bus from '../bus.js' //兄弟组件之间的传值创建公共的vue实例==bus.js
  export default {
  	name:'white_leftNav',
    data() {
      return {
        targetNid:'001',
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1',
              children:[{
                label:'四级 1-1-1-1',
                children:[
                  {label:'五级 1-1-1-1-1'},
                  {label:'五级 1-1-1-1-2'}
                ]
              }]
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    created:function(){

      var that=this;
      Bus.$on('tree',function(data){
        that.targetNid=data;
      });
    },

    methods: {
      handleNodeClick(data,node) {
        // 判断是否拥有子节点
        if(data.hasOwnProperty('children')){
            console.log('有子节点');
        }else{
          console.log('没有子节点了',data.$treeNodeId);
          
          // 路由跳转
          this.$router.push({path:'/home/treedetail'});
          Bus.$emit('changeTree',data.$treeNodeId);
        }
        
      },
    }
  };
</script>