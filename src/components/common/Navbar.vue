<template>
  <div class="nav">
    <el-row class="container">
      <el-col :span="24">
        <div class="nav--left">
          <div class="search-box">
            <div class="search-box__icon">
              <i class="el-icon-search"></i>
            </div>
            <div class="search-box__input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
        <div class="nav--right">
          <div class="nav__mobile-menu" @click="toggleMobileMenu">
            <i class="fas fa-bars"></i>
          </div>
          <div class="nav__menu" :class="{ show: showMobileMenu }">
            <div class="nav__mobile-close" @click="toggleMobileMenu">
              <i class="fas fa-times"></i>
            </div>
            <router-link
              v-for="item in navItems"
              :key="item.name"
              class="nav__menu__items"
              :class="[routerPath == item.slug ? 'active' : '']"
              :to="item.slug"
              >{{ item.name }}</router-link
            >
            <user-btn v-if="loggedIn" class="nav__login"/>
            <div v-else class="nav__login" @click="loginToggle()">Login / Sign Up</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <auth @loginToggle="showLogin=!showLogin" v-if="showLogin"/>
  </div>
</template>

<script>
import Auth from '../uncommon/Auth.vue';
import UserBtn from '../uncommon/UserBtn.vue';

export default {
  components: {
    Auth,
    UserBtn
  },
  data() {
    return {
      showMobileMenu: false,
      showLogin: false,
      navItems: [
        {
          name: "Home",
          slug: "/",
          isActive: false,
        },
        {
          name: "About",
          slug: "/about",
          isActive: false,
        },
        {
          name: "Blog",
          slug: "/blogs",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    loginToggle() {
      this.showLogin = !this.showLogin;
    }
  },
    computed: {
    routerPath() {
      return this.$route.path;
    },
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  display: flex;
  justify-content: space-between;
}
.nav--right,
.nav--left,
.search-box {
  display: flex;
}
.search-box {
  align-items: center;
  padding: 10px 0;
  &__icon {
    font-size: 16px;
    color: var(--black-text);
    padding-right: 10px;
  }
  &__input {
    input {
      border: none;
      font-family: futura-regular;
    }
    input::placeholder {
      font-family: futura-regular;
      color: var(--black-text);
      font-size: var(--small-text);
      text-transform: uppercase;
    }
  }
}
.search-box:hover {
  border-bottom: 1px solid #000000;
}
.search-box:focus-within {
  border-bottom: 1px solid #000000;
}
.nav {
  padding: 10px 0;
  color: var(--gray-text);
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -100%;
    width: 100%;
    background-color: #ffffff;
    font-size: 16px;
    transition: 0.3s ease;
    opacity: 0;
    &__items {
      text-transform: uppercase;
      text-decoration: none;
      padding: 10px 0;
      font-size: var(--small-text);;
      order: 1;
    }
    &__items:visited {
      color: var(--gray-text);
    }
    &__items:hover {
      color: var(--yellow-active);
    }
  }
  &__mobile-menu {
    font-size: 16px;
  }
  &__mobile-close {
    position: absolute;
    top: 10px;
    right: 30px;
    font-size: var(--title-size);
  }
  &__login {
    font-size: 14px;
    color: var(--blue-hover);
    border: 1px solid var(--blue-hover);
    margin-bottom: 10px;
    padding: 5px 24px;
    cursor: pointer;
    order: 0;
  }
  &__login:hover {
    text-decoration: underline;
  }
  &--right,
  &--left {
    align-items: center;
  }
}
.show {
  right: 0;
  transition: 0.3s ease;
  opacity: 1;
}
.active {
  color: var(--blue-hover);
}
@media (min-width: 768px) {
  .nav {
    &__mobile-menu,
    &__mobile-close {
      display: none;
    }
    &__menu {
      position: relative;
      flex-direction: row;
      &__items {
        padding: 0 10px;
      }
      opacity: 1;
      right: 0;
    }
    &__login {
      order: 1;
      margin: 0 0 0 50px;
    }
  }
  .active {
    color: var(--yellow-active);
  }
}
@media (min-width: 992px) {
}
</style>
