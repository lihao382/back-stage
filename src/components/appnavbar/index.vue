<template>
  <div class="appav">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      
      <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      
      <el-menu-item index="/member">
        <i class="el-icon-user-solid"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
       <el-menu-item index="/supplier">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-s-goods"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
       <el-menu-item index="/staff">
        <i class="el-icon-user"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
name:"",
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style lang="scss"
 scoped>
/* @import url(); 引入css类 */
.appav{
  width: 240px;
  position: absolute;
  top: 50px;
  left: 0;
  bottom:0;
  background: #545c64;
}
</style>