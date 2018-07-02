<template>
  <div class="right-table">
    <!-- 搜索添加 -->
    <el-form class="searchForm" v-model="filters">
      <el-input class="search" placeholder="输入搜索名称" v-model="filters.name"></el-input>
      <el-button
            size="mini"
            type="primary"
            @click="handleSearch">查询
      </el-button>
      <el-button
            size="mini"
            type="success"
            @click="handleAdd">添加
      </el-button>
    </el-form>

    <!-- table表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
       @selection-change="handleSelectionChange"
      >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        class="col_date"
        prop="date"
        sortable
        label="日期" 
        min-width="15%"
        >
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        sortable
        label="姓名"
        min-width="15%"
        >
       
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="sex"
        sortable
        label="性别"
        min-width="10%">
       
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      
      <el-table-column
        prop="PID"
        sortable
        label="身份ID"
        min-width="25%">
        <template slot-scope="scope">
          <span >{{ scope.row.PID }}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="address"
        label="住址"
        min-width="40%"
        >
        <template slot-scope="scope">
          <span >{{ scope.row.address }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" class="cal_handle" min-width="30%">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  
    <!-- addform弹窗 -->
    <el-dialog title="收货地址" :visible="addFormVisible" @close="closeHandle">
      <el-form :model="addForm" ref="addform">

        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker  v-model="addForm.date" type="date" placeholder="请选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="姓名" :label-width="formLabelWidth" >
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>

        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio v-model="addForm.sex" label="男">男</el-radio>
          <el-radio v-model="addForm.sex" label="女">女</el-radio>
        </el-form-item>

        <el-form-item label="身份证号码" :label-width="formLabelWidth">
          <el-input v-model="addForm.PID"></el-input>
        </el-form-item>

        <el-form-item label="住址" :label-width="formLabelWidth">
          <el-select v-model="addForm.address" placeholder="请选择地址">
            <el-option label="上海" value="上海"></el-option>
            <el-option label="郑州" value="郑州"></el-option>
            <el-option label="深圳" value="深圳"></el-option>
            <el-option label="北京" value="北京"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="toCancel">取 消</el-button>
        <el-button type="primary" @click="toSubmit">保 存</el-button>
      </div>

    </el-dialog>
    
     <!-- editform弹窗 -->
    <el-dialog title="收货地址" :visible="editFormVisible" @close="closeHandle">
      <el-form :model="editForm" ref="editForm">

        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker  v-model="editForm.date" type="date" placeholder="请选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>

        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio v-model="editForm.sex" label="男">男</el-radio>
          <el-radio v-model="editForm.sex" label="女">女</el-radio>
        </el-form-item>

        <el-form-item label="身份证号码" :label-width="formLabelWidth">
          <el-input v-model="editForm.PID"></el-input>
        </el-form-item>

        <el-form-item label="住址" :label-width="formLabelWidth">
          <el-select v-model="editForm.address" placeholder="请选择地址">
            <el-option label="上海" value="上海"></el-option>
            <el-option label="郑州" value="郑州"></el-option>
            <el-option label="深圳" value="深圳"></el-option>
            <el-option label="北京" value="北京"></el-option>
          </el-select>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="toCancel">取 消</el-button>
        <el-button type="primary" @click="toEdit">保 存</el-button>
      </div>
    </el-dialog>
    
   <div>
      <!-- 批量删除 -->
      <el-button :type="btnType" size="medium" style="margin-top:30px;" @click="batchRemove"> 批量删除 </el-button>
      <!-- 分页 -->
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-size="20"
        layout="total,  prev, pager, next"
        :total="100">
      </el-pagination>
   </div>

  </div>
</template>

<style>
  .searchForm{margin:20px 0;}
  .searchForm .el-button{height:35px;width:80px;margin-left:20px;font-size:16px;}
  .el-dialog{ width:35%;}
  .el-date-editor.el-input{ width:100%;}
  .el-select{ display: block; }
  .el-form-item__content{ margin-right:35px;}
  .el-input.search{width:400px;}
  .el-table thead th{background-color:#e6e6e6;}
  .el-table{border-left:1px solid #ebeef5;border-right:1px solid #ebeef5;}
  .el-pagination{float:right;margin-top:30px;margin-right:80px;}
</style>

<script>
  import util from '../style/js/util'
  import {requestUser,delUser,addUser,editUser,getPageList,batchRemoveUser} from '../api.js';
  export default {
    data() {
      return {
        filters:{
          name:''
        },
        multipleTable:[],
        btnType:"",
        total: 0,
        page:1,
        tableData: [ ],
        addFormVisible:false,
        editFormVisible:false,
        formLabelWidth: '90px',

        addForm: {
          name: '',
          address: '',
          date: '',
          PID:'',
          sex:'男'
        },
        
        editForm: {
          id:0,
          name: '',
          address: '',
          date: '',
          PID:'',
          sex:'男'
        }
      }
    },
    created:function(){
      // 获取mock.js的虚拟数据
      var that=this;
      that.handleGetUser();
    },

    methods: {
      // 获取分页
      handleCurrentChange(val) {
        var that=this;
        that.page=val;
        that.handleGetUser();
      },

      // 获取数据列表
      handleGetUser(){
        var that=this;
        let para = {
          page: that.page,
          name: that.filters.name
        };
        getPageList(para).then(function(res){
          that.total = res.total;
          that.tableData=res.User; 
        });
      },

      // 查询
      handleSearch(){
        this.handleGetUser();
      },
      
      // 点击添加按钮
      handleAdd(){
        this.addFormVisible=true;
      },

      // 点击保存添加一条数据
      toSubmit(){
        this.$refs.addform.validate((valid) => {
          if (valid) {
            // Object.assign是es6中新特性‘浅拷贝’
            let para = Object.assign({}, this.addForm);
            // 格式化日期格式
            para.date = (!para.date || para.date == '') ? '' : util.formatDate.format(new Date(para.date), 'yyyy-MM-dd');

            addUser(para).then((res) => {
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['addform'].resetFields();
                this.addFormVisible = false;
                this.handleGetUser();
            });
          } 
        });
      },

      // 点击取消
      toCancel() {
        this.addFormVisible = false;
        this.editFormVisible = false;
      },

      // 点击编辑按钮
      handleEdit(index, row) {
        this.editFormVisible=true;
        // 现有的值回显到弹层
        this.editForm = Object.assign({}, row);
      },

      // 点击保存编辑某条数据
      toEdit(){
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            let para = Object.assign({}, this.editForm);
              para.date = (!para.date || para.date == '') ? '' : util.formatDate.format(new Date(para.date), 'yyyy-MM-dd');

              editUser(para).then((res) => {
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.editFormVisible = false;
                this.handleGetUser();
              });
          }
        });
      },

      // 点击删除按钮
      handleDelete(index, row) {
        var that=this;
        that.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let para = { id: row.id };
          delUser(para).then(function(res){
            that.$message({
              type: 'success',
              message: '删除成功!'
            });
            that.handleGetUser();

          });
          
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },

      // 关闭form弹层
      closeHandle(){
        var that=this;
        that.editFormVisible=false;
        that.addFormVisible=false;
      },

      // 获取批量选项
      handleSelectionChange(val){
        //获取选项
         this.multipleSelection = val;
        // 根据选项判断按钮的颜色
         if(this.multipleSelection.length>0){
          this.btnType="danger";
         }else{
          this.btnType="";
         }
      },

      //批量删除
      batchRemove: function () {
        var ids = this.multipleSelection.map(item => item.id).toString();
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          let para = { ids: ids };
          batchRemoveUser(para).then((res) => {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.handleGetUser();
          });
        })
      }

    }
  }
</script>