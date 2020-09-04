import request from "../utils/request"

export default {
    //登录接口
    login(name,pass){
        return request({
            url : "/list/login",
            method : "post",
            data : {
               name,
               pass
            }
        })
    },
    //获取用户信息接口
    getUserInfo(){
        return request({
            url : "/user/info",
            
        })
    }
}