<template>
  <el-row class="category container">
    <el-row class="category__container">
      <el-col class="category__wrapper">
        <div
          class="category__item"
          v-bind:class="{ active: active === category }"
          v-for="category in categories"
          :key="category"
          @click="focus(category)"
        >
          {{ category }}
        </div>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      categories: this.$store.state.category,
      active: "All Posts",
    };
  },
  methods: {
    focus(item) {
      this.active = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
    &__wrapper {
        display: flex;
    }
    &__item {
        font-size: 14px;
        font-family: futura-light;
        cursor: pointer;
    }
    &__item:hover {
      opacity: 0.8;
    }
}
.category__container{
    width: 50%;
    margin:0% 23%;
}
.active {
  color: var(--blue-hover);
}
@media (min-width: 768px) {
  .category {
    &__item {
      margin: 40px 40px 40px 0;
    }
}
}

@media (min-width: 992px) {
  
}
</style>
