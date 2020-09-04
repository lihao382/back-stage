<template>
  <div class="login">
    <div class="login_k">
      <div class="login_img">
        <img src="../../../public/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg"
             alt="" />
      </div>
      <p class="login_header">欢迎使用后台管理系统</p>
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               class="demo-ruleForm">
        <el-form-item prop="user">
          <el-input type="text"
                    v-model="ruleForm.user"
                    placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password"
                    v-model="ruleForm.pass"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="btn('ruleForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginapi from '../../api/login'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        user:"",
        pass:""
      },
      rules:{
        user:[
           { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ],
        pass:[
           { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () { },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted () { },
  methods: {
    btn(form){
      console.log(form)
      this.$refs[form].validate((valid)=>{
        console.log(valid)
        if(valid){
          loginapi.login(this.ruleForm.user,this.ruleForm.pass).then(res=>{
            console.log(res)
            const code=res.data.data.code;
            //console.log(code)
            if(code==200){
              const token=res.data.data.data.token
              localStorage.setItem("token",JSON.stringify(token))

              loginapi.getUserInfo().then(res=>{
                const rem=res.data.data;
                // console.log(rem) 获取用户信息
                if(rem.code==200){
                  localStorage.setItem("User",JSON.stringify(rem.data))
                  this.$router.push("/")
                }
              })

            }
          });
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
body {
  font-family: "微软雅黑";
  margin: 0px auto;
}
.login {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../../public/login_bg.1de8de0c.png");
  background-size: 100% 100%;
}
.login_k {
  padding: 30px;
  width: 350px;
  // border: 1px solid;
  margin: 160px auto;
  position: absolute;
  left: 50%;
  //  top: 10%;
  transform: translate(-175px);
  background: rgba(255, 255, 255, 0.5);
}
.login_img {
  width: 350px;
  height: 160px;
  // border: 1px solid;
  img {
    width: 220px;
    height: 150px;
    display: block;
    margin: 5px auto;
  }
}
.login_header {
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
  color: rgb(43, 179, 233);
}
.el-input {
  width: 350px;
}
.el-button {
  width: 350px;
}
</style>
