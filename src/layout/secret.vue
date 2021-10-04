<template>
  <div class="default">
    <div class="sidebar-container" v-bind:class="{active: showMenu}">
      <Sidebar @toggleMenu="toggleMenu" />
    </div>
    <div class="content-container">
      <Navbars @toggleMenu="toggleMenu" />
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbars from '../components/common/Navbars.vue'
import Sidebar from '../components/common/Sidebar.vue'
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  components: {
     Navbars,
     Sidebar
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
};
</script>

<style lang="scss" scoped>
// Large devices (desktops, 992px and up)
.default {
  overflow: hidden;
}
.content-container {
  z-index: 0;
}
.sidebar-container {
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100%;
  width: 100%;
  transition: .3s ease;
  z-index: 3;
}
.active {
  left: 0;
  transition: .3s ease;
}
@media (min-width: 992px) {
  .default {
    position: relative;
    width: 100%;
  }
  .content-container {
    display: block;
    width: 80%;
    margin-left: 20%;
  }
  .sidebar-container {
    display: block;
    position: fixed;
   background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    width: 20%;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s;
}
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(30px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>