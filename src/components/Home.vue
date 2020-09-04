<template>
  <div class="hello">
    <!-- <el-button type="warning">警告按钮</el-button>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item.name}}
      </li>
    </ul> -->
    <p>首页</p>
    <p v-for="(item,index) in user" :key="index">{{item.name}}</p>
  </div>
</template>

<script>
 import testapi from '@/api/test'
export default {
  name: "Home",
  props: {
    msg: String
  },
  data() {
    return {
      list:[],
      user:localStorage.getItem("User")
    }
  },
  created() {
    testapi.getbanner().then(res=>{
      this.list=res.data
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
