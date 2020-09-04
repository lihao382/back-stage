<template>
  <div class="hello">
    <appheader></appheader>
    <appnavbar></appnavbar>
    <appmain></appmain>
  </div>
</template>

<script>
//  import testapi from '@/api/test'
import appheader from './appheader'
import appnavbar from './appnavbar'
import appmain from './appmain'
export default {
  name: "Home",
  props: {
    msg: String
  },
  components:{
    appheader,appnavbar,appmain
  },
  data() {
    return {
      list:[],
    }
  },
  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
