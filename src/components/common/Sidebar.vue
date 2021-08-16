<template>
  <div class="navbar">
    <div class="toggle" @click="$emit('toggleMenu')">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="logo">
      <img src="http://boooya.aqvatarius.com/img/logo.png" alt="logo" />
    </div>
    <div class="secret-nav">
      <router-link
        v-for="link in routerLink"
        :key="link.id"
        class="nav-item"
        :class="[router == link.name ? 'active' : '']"
        :to="`${link.goTo}`"
        @click.native="$emit('toggleMenu')"
      >
        {{ link.name }}
      </router-link>
    </div>
    <div class="copyright">
      <p>This is copy right®</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerLink: [
        {
          id: 1,
          name: "Home",
          goTo: "home",
        },
        {
          id: 2,
          name: "Profile",
          goTo: "profile",
        },
        {
          id: 3,
          name: "Write a Post",
          goTo: "posting",
        },
        {
          id: 4,
          name: "All Posts",
          goTo: "archives",
        },
        {
          id: 5,
          name: "About",
          goTo: "about",
        },
        {
          id: 6,
          name: "Contact",
          goTo: "contact",
        },
      ],
    };
  },
  computed: {
    router() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  .toggle {
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 50px;
    top: 20px;
    right: 50px;
  }
  .logo {
    cursor: pointer;
    margin:10% 30% 0px;
    img {
      width: 140%;
    }
  }
  .secret-nav {
    display: flex;
    flex-direction: column;
  }
  .nav-item {
    width: 60%;
    margin-left: 10%;
    margin-top: 5px;
    padding: 15px 20px;
    font-family: "Courier New", Courier, monospace;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
 
  .active {
    border: 2px solid white;
    text-decoration: none;
  }
  .copyright {
    color: white;
    text-align: center;
  }
}
@media (min-width: 992px) {
  .navbar {
    padding: 0;
    .toggle {
      display: none;
    }
    .nav-item {
      text-align: left;
    }
    .logo {
    cursor: pointer;
    margin:10px 30px;
    img {
      width: 150%;
    }
  }
  }
}
</style>