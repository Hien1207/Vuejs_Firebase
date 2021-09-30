<template>
  <div class="archive container">
    <category />
    <div class="archive__container">
      <archive-info
        :author="archive.author"
        :date="archive.date"
        :flex="style"
      />
      <el-row class="archive__summary">
        <h1 class="archive__title">
          {{ archive.title }}
        </h1>
        <p class="archive__subtitle">
          {{ archive.subtitle }}
        </p>
        <div class="archive__banner">
          <img :src="archive.coverImg" alt="" />
        </div>
      </el-row>
      <el-row class="archive__content">
        <el-col :span="24">
          <div v-html="archive.content"></div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <share-btn v-bind:category="archive.category" />
      <el-divider></el-divider>
      <archive-stat />
    </div>
  </div>
</template>

<script>
import Category from "../components/common/Category.vue";
import ArchiveStat from "../components/uncommon/ArchiveStat.vue";
import ShareBtn from "../components/uncommon/ShareBtn.vue";
import ArchiveInfo from "../components/uncommon/ArchiveInfo.vue";
import {db }from '../main.js'
export default {
  components: {
    Category,
    ArchiveStat,
    ShareBtn,
    ArchiveInfo,
  },
  data() {
    return {
      archive:{},
      slug: this.$route.params.id,
      style: "display: flex;",
    };
  },
  created() {
            let dbRef = db.collection('blogs').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.archive = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
};
</script>

<style lang="scss" scoped>
.archive {
  &__container {
    padding: 60px;
    border: 1px solid rgba(204, 204, 204, 0.75);
  }
  &__banner {
    img {
      width: 100%;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    font-family: futura-light;
  }
  &__author-name,
  &__write-date {
    font-size: 14px;
    margin: 0;
    padding-left: 10px;
  }
}
</style>
