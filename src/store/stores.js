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
        title: "PLAYING WITH PATTERNS",
        id: "1",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/e32fd518921d4fc2a430ff518109eccd.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95/e32fd518921d4fc2a430ff518109eccd.webp",
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
        title: "OFF THE WALL DESIGN DECOR",
        id: "3",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84bcc4ac73e5416fb9b9aa9231ccabaf.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/84bcc4ac73e5416fb9b9aa9231ccabaf.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "OPEN HOUSE STAGING",
        id: "4",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "WHEN LESS REALLY IS MORE",
        id: "5",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/73c055da78be48b0ae7587e2cf2908ea.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95/73c055da78be48b0ae7587e2cf2908ea.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "GREEN WINDOWS & GREEN THUMBS",
        id: "6",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/0005bbdb1cc54537b6ea184c3fae9d1f.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/0005bbdb1cc54537b6ea184c3fae9d1f.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "NEUTRAL COLOR PALETTE INSPIRATION ",
        id: "7",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/00947d8cfb644363bc800113627958b9.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95/00947d8cfb644363bc800113627958b9.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "PLAYING WITH PATTERNS",
        id: "1",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/e32fd518921d4fc2a430ff518109eccd.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95/e32fd518921d4fc2a430ff518109eccd.webp",
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
        title: "OFF THE WALL DESIGN DECOR",
        id: "3",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84bcc4ac73e5416fb9b9aa9231ccabaf.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/84bcc4ac73e5416fb9b9aa9231ccabaf.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "OPEN HOUSE STAGING",
        id: "4",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/84770f_4177efdaeb1849cd90e492cfdb8709dc~mv2_d_7360_4912_s_4_2.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Cli",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "WHEN LESS REALLY IS MORE",
        id: "5",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/73c055da78be48b0ae7587e2cf2908ea.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95/73c055da78be48b0ae7587e2cf2908ea.webp",
        content:
          "<h2>Design with Ease</h2><p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.</p>",
        category: "Vue",
        author: "Admin",
        date: "Jul 19",
      },
      {
        title: "GREEN WINDOWS & GREEN THUMBS",
        id: "6",
        subtitle:
          "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        banner:
          "https://static.wixstatic.com/media/0005bbdb1cc54537b6ea184c3fae9d1f.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90/0005bbdb1cc54537b6ea184c3fae9d1f.webp",
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
