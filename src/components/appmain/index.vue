<template>
  <div class="appmain">
    <Link_title v-show="$route.path!=='/index'"></Link_title>
    <router-view></router-view>
  </div>
</template>

<script>
import Link_title from './Link_title'
export default {
name:"",
data() {
return {

}
},
components:{
  Link_title
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
.appmain{
  position: absolute;
  top: 50px;
  right: 0;
  bottom:0;
  left: 240px;
  padding: 10px;
}
</style>