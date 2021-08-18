<template>
  <el-row class="share-btn">
    <el-col class="share-btn__container" :span="24">
      <div class="share-btn__wrapper">
        <span class="share-btn__item">
          <i class="fab fa-facebook-f"></i>
        </span>
        <span class="share-btn__item">
          <i class="fab fa-twitter"></i>
        </span>
        <span class="share-btn__item">
          <i class="fab fa-linkedin-in"></i>
        </span>
        <span class="share-btn__item">
          <i class="fas fa-link"></i>
        </span>
      </div>
      <p class="share-btn__category">
        {{ category }}
      </p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style lang="scss" scoped>
.share-btn {
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    margin-right: 30px;
  }
  &__category {
    margin: 0;
  }
}
</style>