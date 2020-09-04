<template>
  <header>
    <div class="logo">
      <img src="http://mengxuegu.com:9999/img/logo.7156be27.png" alt />
      <router-link to="/">积云学生后台管理系统</router-link>
    </div>

    <div class="log">
      <el-dropdown @command="handle">
        <span class="el-dropdown-link">
          {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="el-icon-edit" command="changepass">修改密码</el-dropdown-item>
          <el-dropdown-item class="el-icon-s-fold" command="checkout">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
name:"",
data() {
return {
  name:""
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {
  const info = JSON.parse(localStorage.getItem("User"));
  this.name = info.name !== "undefined" ? info.name : "";
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
  handle(command){
    console.log(command)
    switch (command) {
      case "cheangepass":
        this.changepass();
        break;
      case "checkout":
        this.checkout();
        break;
    }
  },
  cheangepass(){
    console.log("修改密码")
  },
  checkout(){
    localStorage.removeItem("token");
    localStorage.removeItem("User");
    this.$router.push("/login")
  }
},
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
header{
  height: 50px;
  line-height: 50px;
  background: #2d3a4b;
  
  .logo{
    padding-left: 40px;
    img{
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
    a{
      color: white;
      text-decoration: none;
      margin-left: 8px;
    }
  }
  .log{
    position: absolute;
    right: 30px;
    top: 0;
  }
}
.el-dropdown-link{
  color: whitesmoke;
}
</style>