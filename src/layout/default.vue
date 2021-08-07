<template>
  <div class="default__layout">
    <Navbar />
    <Banner />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import Banner from '../components/common/Banner.vue'
import Footer from '../components/common/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
    Banner
  }
}
</script>

<style>

</style>