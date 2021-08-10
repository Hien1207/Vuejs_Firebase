import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import firebase from "firebase/app";
import Vuex from 'vuex';
import './assets/css/main.css';
import VueCarousel from 'vue-carousel';
import VueStar from 'vue-star'

Vue.component('VueStar', VueStar)
Vue.use(VueCarousel);

Vue.config.productionTip = false;

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    archives: [
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"1",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Not Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"2",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Not Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"3",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Cli",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"4",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Cli",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"5",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"6",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"7",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"8",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Cli",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"9",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"10",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"11",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Cli",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"12",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Not Vue",
        "author":"Admin",
        "date":"Jul 19"
      },
      {
        "title":"NATALIA’S APARTMENT MAKEOVER",
        "id":"13",
        "subtitle":"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        "banner":"https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        "content":"<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        "category":"Vue",
        "author":"Admin",
        "date":"Jul 19"
      }
    ]
  }
})

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
  store: store,
}).$mount("#app");