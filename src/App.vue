<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </transition>
  </div>
</template>
<script>
import defaultLayout from "./layout/default.vue";
import unauthLayout from "./layout/unauth.vue";
import secretLayout from "./layout/secret.vue";
export default {
  components: {
    defaultLayout,
    unauthLayout,
    secretLayout,
  },
  computed: {
    layout() {
      // if( this.$route.meta.layout === 'unauth') {return 'unauthLayout'}
      //  else return  this.$route.meta.layout === 'secret' ?'secretLayout' :'defaultLayout'
      switch (this.$route.meta.layout) {
        case "unauth":
          return "unauthLayout";
        case "default":
          return "defaultLayout";
        case "secret":
          return "secretLayout";
      }
      return "defaultLayout";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: black;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
