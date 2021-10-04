<template>
  <div class="home">
    <div>
      <img
        style="
          width: 100%;
          height: 380px;
          object-fit: cover;
          object-position: 50% 65%;
        "
        src="https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1197,h_500,al_c,q_85,usm_0.66_1.00_0.01/baac51_d623fe1790ed419a89d20aa05f6064b2.webp"
      />
    </div>
    <div class="blog-v">
      <div class="user" v-for="blog in blogs.slice(0, 4)" :key="blog.id">
        <div class="image">
          <img
            @click="gotoUserDetailPage(blog.id)"
            class="imga"
            :src="blog.coverImg"
            alt=""
          />
        </div>
        <div class="text">
          <div class="ava">
            <div style="width: 30px">
              <img
                class="avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIgbiAwf6mBkjE6iVQuxHMAHMXlcYvkshKJ9Tx-bexaRCbpR7WJNs7t_qh3Z4I8qe8HQ&usqp=CAU"
              />
            </div>
            <div class="ad">
              <div class="ad-t">
                {{ blog.author }}
                <img
                  style="width: 30%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEOzIwWhwtvM0UxCHotRC4ZXMipGl4UivJWxGZQrBCuJ972BkzLhe9Mpf0P5iWVEIzbk&usqp=CAU"
                />
              </div>
              <div class="ad-t">
                Jul 19
                <li style="margin: 4px 4px 4px 8px; font-size: 5px"></li>
                1 min
              </div>
            </div>
          </div>
          <div class="name" @click="gotoUserDetailPage(blog.id)">
            <a style="font-size: var(--title-size); margin-bottom: 5px">{{
              blog.title
            }}</a>
            <h5 style="margin: 5px 0px 60px; font-weight: 1">
              {{ blog.subtitle }}
            </h5>
          </div>
          <div class="ad-t" style="margin-top: 10px">
            100 views
            <a
              style="margin: 0px 10px; cursor: pointer"
              @click="gotoUserDetailPage(blog.id)"
              >0 comments</a
            >
            <vue-star animate="animated bounceIn" color="#F05654">
              <i slot="icon" class="fa fa-heart"></i>
            </vue-star>
          </div>
        </div>
      </div>
      <div class="allblog">
        <button class="font-3" id="bt-all" @click="$router.push('/blogs')">
          View All Posts
        </button>
      </div>
    </div>
    <div class="caro">
      <carousel>
        <carousel-slide
          v-for="slide in slides"
          :key="slide"
          class="carousel-slider"
        >
          <img :src="slide" :alt="slide" />
        </carousel-slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide.vue";
import VueStar from "vue-star";
import { db } from "../main.js";
export default {
  data() {
    return {
      blogs: [],
      blog: {
        id: "",
        title: "",
        author: "",
        subtitle: "",
        coverImg: "",
        category: "",
      },
      slides: [
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Style & Design blog/01.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Style & Design blog/02.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Style & Design blog/03.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Style & Design blog/04.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Style & Design blog/05.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Style & Design blog/06.jpg",
      ],
    };
  },
  components: {
    Carousel,
    CarouselSlide,
    VueStar,
  },
  created() {
    db.collection("blogs")
      .get()
      .then((snapshot) => {
        snapshot.docs
          .forEach((doc) => {
            console.log(doc.data());
            this.blogs.push({
              id: doc.id,
              title: doc.data().title,
              author: doc.data().author,
              subtitle: doc.data().subtitle,
              category: doc.data().category,
              coverImg: doc.data().coverImg,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });
  },
  // computed: {
  //     archives() {
  //        return this.$store.state.archives;
  //     }
  //  },
  methods: {
    gotoUserDetailPage(id) {
      this.$router.push(`/blogs/${id}`);
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  display: block;
}
.caro {
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  margin: 50px 0px;
}
.blog-v {
  width: 90%;
  margin: 2% 5% 0%;
}
.user {
  display: block;
  margin-bottom: 20px;
}
.image {
  width: 60%;
  font-family: var(--font-light);
}
.text {
  width: 90%;
  padding: 20px 0px;
  font-family: var(--font-light);
  border: 1px solid var(--gray-boder);
}
.ava {
  display: flex;
  margin-right: auto;
  padding-bottom: 5px;
}
.avatar {
  width: 90%;
  margin: 2px 0px;
  border-radius: 50%;
}
.ad {
  display: block;
}
.ad-t {
  height: 15px;
  font-size: 10px;
  display: flex;
}
.name {
  border-bottom: 1px solid var(--gray-boder);
}
.name:hover {
  color: var(--blue-hover);
  cursor: pointer;
}

.imga {
  width: 150%;
  height: 100%;

  cursor: pointer;
}
.VueStar {
  position: relative;
  cursor: pointer;
}
.VueStar__ground {
  width: 20px;
  height: 15px;
  margin-left: 8rem;
}
.VueStar__decoration {
  top: -40px;
  left: -40px;
}
.allblog {
  margin: 5% 0%;
}
#bt-all {
  background: var(--black-text);
  color: white;
  width: 300px;
  height: 40px;
  border: none;
  transition: all 0.5s ease-in;
}
#bt-all:hover {
  background: var(--gray-boder);
  color: var(--black-text);
  cursor: pointer;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 200px;
  z-index: 10;
}
.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: var(--black-text);
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 50%;
  right: 0;
}
.btn-prev {
  top: 50%;
  left: 0;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
@media (min-width: 500px) {
  .user {
    display: flex;
  }
  .image {
    width: 50%;
  }
  .text {
    width: 50%;
    padding: 20px 40px;
  }
  .imga {
    width: 100%;
    height: 100%;
  }
  .VueStar__ground {
    margin-left: 12.5rem;
  }
  .allblog {
    margin: 5% 30%;
  }
}
@media (min-width: 700px) {
  .blog-v {
    width: 70%;
    margin: 2% 15% 0%;
  }
}
@media (min-width: 1200px) {
  .blog-v {
    width: 50%;
    margin: 2% 25% 0%;
  }
}
</style>
