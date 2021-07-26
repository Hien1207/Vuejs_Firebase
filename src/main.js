import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import firebase from "firebase/app";


Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(firebase);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");