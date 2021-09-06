import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import ElementUI from 'element-ui';
import firebase from "firebase/app";
import './assets/css/main.css';
import VueCarousel from 'vue-carousel';
import VueStar from 'vue-star'

Vue.component('VueStar', VueStar)
Vue.use(VueCarousel);


Vue.config.productionTip = false;


Vue.use(ElementUI);


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwlilc25tJEN9RnQG_RerZfUSQdVC9cR8",
  authDomain: "vuejs-firebase-1d336.firebaseapp.com",
  projectId: "vuejs-firebase-1d336",
  storageBucket: "vuejs-firebase-1d336.appspot.com",
  messagingSenderId: "1049087402909",
  appId: "1:1049087402909:web:b3139815b2b3b7910e4574",
  measurementId: "G-6VL25LDRT4"
};
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: (h) => h(App),
  store,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.$store.dispatch('fetchUserData', user)
        // ...
      } else {
        // User is signed out
        // ...
        // console.log(this.$store.state.user)
      }
    });
  }
}).$mount("#app");