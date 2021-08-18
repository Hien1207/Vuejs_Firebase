<template>
  <el-row class="archive-stat">
    <el-col :span="24" class="archive-stat__container">
      <div class="archive-stat__wrapper">
        <span class="archive-stat__item">155 views</span>
        <span class="archive-stat__item">0 comments</span>
      </div>
      <div class="archive-stat__item">
        4
        <span>
          <i class="el-icon-check"></i>
        </span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.archive-stat {
  &__container {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  &__item:first-child {
    padding-right: 10px;
  }
}
</style>
