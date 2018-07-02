<template>
  <div id="app" style="width:100%;height:auto;border:none;">
    <div class="clear header">
      <!-- logo -->
      <!-- <img class="logo" src="img/logo.png" alt="logo" @click="gotoHome"/> -->
      <span class="logo" @click="gotoHome">VUEADMIN</span>
      <ul class="navList">
        <li v-on:click="changeLeftNav" class="navItem" v-for="(nav,index) in navList" :data-nid='nav.nid'>{{nav.liName}}</li>
      </ul>

      <div class="navRight">
        <div class="message" @click="handleMessage">
          <el-badge :value="100" :max="99">消息
            <div class="messageInfo" v-show="isMessage" @click="toMessagePage">您有100条审批未处理</div>
          </el-badge>
        </div>

        <div class="person" @click="handlePerson">
          <img src="/static/img/headPic.jpg" alt="">
        </div>
        <ul class="personSet" v-show="isPerson">
            <li class="selInfo">个人资料</li>
            <li class="selfSet">系统管理</li>
            <li class="loginOut"><el-button type="danger" @click="loginOutHandle">退出</el-button></li>
          </ul>
      </div>
    </div>
  </div>
</template>
<style>
  .logo{display:block;height:50px;cursor:pointer;line-height:50px;font-size:20px;text-align: center;color:#fff;}
  .el-badge__content{border:none;}
  .message .messageInfo{
    display:block;
    right:-130px;
  }
  .el-badge__content.is-fixed{
    top:14px;
    right:0;
  }
  .el-badge{
    vertical-align: top;
  }
</style>
<script>
    import Bus from '../bus.js'
    export default{
      name:'Header',
      data:function(){
        return {
          isMessage:false,
          isPerson:false,
          navList:[
            {'liName':'导航一','nid':'001'},
            {'liName':'导航二','nid':'002'},
            {'liName':'导航三','nid':'003'},
            {'liName':'导航四','nid':'004'},
            {'liName':'导航五','nid':'005'}
          ]
        }
      },
      methods:{
        changeLeftNav:function(e){

          var el=e.target;
          var nid=el.getAttribute('data-nid');
          console.log(nid);
          this.$emit('letwhiteshow',nid);
          Bus.$emit('tree',nid);

        },
        // 返回首页
        gotoHome:function(){
          this.$router.push('/home');
        },

        //点击消息
        handleMessage:function(){
           this.isPerson=false;
           this.isMessage=!this.isMessage;

           this.$emit('letgreenshow');
           Bus.$emit('demo','message');
        },

        // 点击个人中心
        handlePerson:function(){
           this.isMessage=false;
           this.isPerson=!this.isPerson;
           
           this.$emit('letgreenshow');
           Bus.$emit('demo','personal');
        },

        // 点击未处理的消息跳转
        toMessagePage:function(){
          this.$router.push('/message');
        },

        // 点击退出
        loginOutHandle:function(){
          var that=this;
          that.$confirm('确定要退出吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // 点击确定按钮的操作
            that.$message({
              message: '您已成功退出哦',
              type: 'success'
            });
          }).catch(() => {
            // 点击取消按钮的操作
            that.$message({
              message: '您已取消退出',
              type: 'warning'
            });
          });
        }
      }
    }
</script>
