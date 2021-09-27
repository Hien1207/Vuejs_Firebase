<template>
  <!-- Posting Sidebar -->
  <div class="sidebar">
    <!-- Publish -->
    <el-row class="sidebar__item">
      <el-row class="sidebar__item__header">
        <span class="header-text"> Publish </span>
      </el-row>
      <el-row class="sidebar__item__body">
        <el-row type="flex" justify="space-between" align="middle">
          <span @click="savePost" class="btn btn-normal">Save Draft</span>
          <span @click="previewPost" class="btn btn-normal">Preview</span>
        </el-row>
      </el-row>
      <el-row
        type="flex"
        justify="space-between"
        align="middle"
        class="sidebar__item__footer"
      >
        <span @click="deletePost" class="btn btn-delete">Move to Trash</span>
        <span @click="submitPost" class="btn btn-submit">Post</span>
      </el-row>
    </el-row>
    <!-- Category -->
    <el-row class="sidebar__item">
      <el-row class="sidebar__item__header">
        <span class="header-text"> Category </span>
      </el-row>
      <el-row class="sidebar__item__body">
        <div
          v-for="category in categories"
          :key="category.slug"
          class="category__input"
        >
          <input type="checkbox" :value="category.title" name="" id="" />
          <span>
            {{ category.title }}
          </span>
        </div>
      </el-row>
    </el-row>
    <!-- Featured Image -->
    <el-row class="sidebar__item">
      <el-row class="sidebar__item__header">
        <span class="header-text"> Featured Image </span>
      </el-row>
      <el-row class="sidebar__item__body">
        <img v-if="featuredImg" :src="featuredImg" alt="" />
        <!-- Add featured image component -->
        <span class="btn btn-add" v-else>Add a image...</span>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";
export default {
  created() {
    firebase
      .firestore()
      .collection("categories")
      .get()
      .then((categoryList) => {
        categoryList.forEach((item) => {
          // doc.data() is never undefined for query doc snapshots
          this.categories.push(item.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
  data() {
    return {
      categories: [],
    };
  },
  props: ["featuredImg", "submitPost", "deletePost", "savePost", "previewPost"],
  computed: {
    postCategory() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  &__item {
    border: 1px solid #cccccc;
    margin-bottom: 10px;
    &__header {
      border-bottom: 1px solid #cccccc;
      background-color: #fafafa;
    }
    &__footer {
      border-top: 1px solid #cccccc;
      background-color: #fafafa;
    }
    &__header,
    &__body,
    &__footer {
      padding: 10px 20px;
    }
  }
}
.header-text {
  font-weight: 700;
}
.btn {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #c8c8c8;
}
.btn-normal {
  background-color: #f7f7f7;
  box-shadow: 0 0 10px #f0f0f0;
}
.btn-normal:hover {
  background-color: #f0f0f0;
}
.btn-normal:active {
  box-shadow: none;
}
.btn-delete {
  color: #f71010;
  border: none;
  padding: 0;
}
.btn-delete:hover {
  text-decoration: underline;
}
.btn-submit {
  background-color: var(--blue-hover);
  color: #ffffff;
  border: none;
  position: relative;
}
.btn-submit:active {
  background-color: #364d9c;
}
.btn-add {
  text-decoration: underline;
  color: var(--blue-hover);
  padding: 0;
  border: 0;
}
</style>
