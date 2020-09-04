import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//import axios from './utils/requset'
//Vue.prototype.$http=axios
//import testapi from '@/api/test'
//Vue.prototype.$http=testapi

router.beforeEach( (to,from,next) => {
  document.title="后台系统"
  if(to.hasOwnProperty("meta")){
    document.title=to.meta.title
  }
  next()
})

console.log(process.env.VUE_APP_BASE_API)
Vue.config.productionTip = false;
// Vue.config.productionTip = process.env.NDDE_ENV=="production";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
