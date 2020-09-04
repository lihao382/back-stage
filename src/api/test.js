//引入封装的axios配置文件
import request from '../utils/request'

export default {
  // getbanner(){
  //   return request({url:"/ss.json"})
  // },
  login(user,name){
    return request({
      url:"/user/login",
      method:"post",
      data:{
        username:user,
        userpwd:pass
      }
    })
  },
  getuserinfo(){
    return request({
      url:""
    })
  }
}

// request.get(BASE_URL+"/ss.json").then((res)=>{
//   console.log(res.data)
// })