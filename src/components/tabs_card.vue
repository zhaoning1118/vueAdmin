<template>
  <div class="tabs_box">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="tab-1" name="first">tab - 1 content</el-tab-pane>
      <el-tab-pane label="tab-2" name="second">tab - 2 content</el-tab-pane>
      <el-tab-pane label="tab-3" name="third">tab - 3 content</el-tab-pane>
      <el-tab-pane label="tab-4" name="fourth">tab - 4 content</el-tab-pane>
    </el-tabs>

    <!-- 关闭弹窗测试 -->
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    
  </div>
</template>
<style>
  .tabs_box{margin:30px;}
  .el-tab-pane{font-size:16px; padding-left:20px;}
</style>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        dialogVisible: false
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>