<template>
  <el-row class="blogs container">
      <category/>
      <blogs-list/>
  </el-row>
</template>

<script>
import BlogsList from '../components/common/BlogsList.vue'
import Category from '../components/common/Category.vue'

export default {
    components: {
        BlogsList,
        Category
    },
}
</script>

<style lang="scss" scoped>

</style>