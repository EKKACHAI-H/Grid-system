import Vue from "vue";
import router from "./router";
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import '../src/assets/css/mainStyle.css'

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
