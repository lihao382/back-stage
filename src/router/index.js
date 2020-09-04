import Vue from "vue";
import VueRouter from "vue-router";
import Homes from "../components/Homes.vue";
import Login from '../views/login/Login.vue'
import Index from '../views/home'
import Member from '../views/member'
import Goods from '../views/goods'
import Staff from '../views/staff'
import Supplier from '../views/supplier'
Vue.use(VueRouter);

const routes = [
 
     {
       path:"/login",
       name:"login",
       component:Login,
       meta:{
         title:"后台系统-登录"
       }

     },
     {
       path:"/",
       component:Homes,
       refirect:"/index",
       meta:{
        title:"后台系统-首页"
      },
      children:[
        {
          path:"/index",
          name:"index",
          component:Index,
          meta:{
            title:"首页"
          }
        },
        {
          path:"/member",
          name:"member",
          component:Member,
          meta:{
            title:"会员管理"
          }
        },
        {
          path:"/goods",
          name:"goods",
          component:Goods,
          meta:{
            title:"供应商管理"
          }
        },
        {
          path:"/staff",
          name:"staff",
          component:Staff,
          meta:{
            title:"商品管理"
          }
        },
        {
          path:"/supplier",
          name:"supplier",
          component:Supplier,
          meta:{
            title:"员工管理"
          }
        },
      ]
     }
];

const router = new VueRouter({
  routes
});

export default router;
