<template>
  <div class="blogs-container">
    <el-row
      class="blog-post"
      v-for="blog in blogs"
      :key="blog.id"
      @click.native="$router.push('/blogs/' + blog.id)"
    >
      <el-col class="blog-post__banner" :span="11">
        <img :src="blog.banner" :alt="blog.title" />
      </el-col>
      <el-col class="blog-post__text" :span="13">
        <archive-info :author="blog.author" :date="blog.date" />
        <el-row>
          <el-col class="blog-post__content" :span="24">
            <h2 class="blog-post__title">
              {{ blog.title }}
            </h2>
            <p class="blog-post__subtitle">
              {{ blog.subtitle }}
            </p>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <archive-stat />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArchiveStat from "../uncommon/ArchiveStat.vue";
import ArchiveInfo from "../uncommon/ArchiveInfo.vue";

export default {
  components: {
    ArchiveStat,
    ArchiveInfo,
  },
  data() {
    return {
      blogs: this.$store.state.archives,
    };
  },
};
</script>

<style lang="scss" scoped>
.blogs-container {
  width: 100%;
}
.blog-post {
  display: flex;
  border: 1px solid rgba(204, 204, 204, 0.75);
  margin: 20px 0;
  &__banner {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__text {
    padding: 24px 36px;
    font-family: futura-light;
  }
  &__content {
    cursor: pointer;
  }
  &__content:hover {
    opacity: 0.7;
    transition: 0.1s ease;
  }
  &__title {
    font-size: var(--title-size);
    margin: 0;
    margin-bottom: 10px;
  }
  &__subtitle {
    padding-bottom: 30px;
  }
  &__date {
    padding-left: 10px;
  }
}
</style>
