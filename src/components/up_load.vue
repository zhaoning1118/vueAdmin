

<template>
	<div class="uploadBox">
		<el-upload
		  action="https://jsonplaceholder.typicode.com/posts/"
		  list-type="picture-card"
		  :on-preview="handlePictureCardPreview"
		  :before-upload="beforeAvatarUpload"
		  :on-remove="handleRemove">
		  <i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>
</template>
<style>
	.uploadBox{margin:30px;}
</style>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeAvatarUpload(file) {
      	// 限制上传图片大小
        const isLt2M = file.size / 2048 / 2048 < 4;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
      }
    }
  }
</script>