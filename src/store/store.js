import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    archives: [
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "1",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Not Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "2",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Not Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "3",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "4",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "5",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "6",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "7",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "8",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "9",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "10",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "11",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "12",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Not Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NATALIA’S APARTMENT MAKEOVER",
        id: "13",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.jpg/v1/fill/w_740,h_493,al_c,q_90/84770f_df0bdbbdd9a94259858e70cbba33897f~mv2_d_3538_2359_s_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
    ],
    category: ["All Posts", "Not Vue", "Cli", "Vue"],
    user: {},
  },
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
});
