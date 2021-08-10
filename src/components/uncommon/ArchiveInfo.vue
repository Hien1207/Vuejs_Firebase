<template>
  <el-row class="archive-info">
    <el-col class="archive-info__container" :span="24">
      <el-avatar
        class="archive-info__wrapper"
        src="https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg"
      ></el-avatar>
      <div class="archive-info__wrapper" :style="flex">
        <p class="archive-info__item">
          {{ author }}
        </p>
        <p class="archive-info__item">
          {{ date }}
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ["author", "date", "flex"],
};
</script>

<style lang="scss" scoped>
.archive-info {
  &__container {
    display: flex;
    padding-bottom: 10px;
    p {
      margin: 0;
    }
  }
  &__wrapper:last-child {
    align-items: center;
  }
  &__item {
    font-size: var(--small-text);
    padding-left: 10px;
  }
}
</style>
