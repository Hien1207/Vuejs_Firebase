<template>
  <el-row class="posting" :gutter="20">
    <el-col :span="18">
      <el-row>
        <el-col>
          <input
            v-model="title"
            class="posting__title"
            type="text"
            placeholder="Edit your title here..."
          />
        </el-col>
        <el-col class="posting__slug">
          <span class="posting__slug__domain">
            {{ domain }}
          </span>
          <input v-model="slug" type="text" class="posting__slug__content" />
        </el-col>
        <el-col>
          <editor />
        </el-col>
      </el-row>
    </el-col>
    <!-- Posting Sidebar -->
    <el-col :span="6">
      <!-- Publish Box -->
      <posting-sidebar
        :submitPost="submit"
        :deletePost="remove"
        :savePost="save"
        :previewPost="preview"
      />
    </el-col>
  </el-row>
</template>

<script>
import Editor from "../../components/common/Editor.vue";
import PostingSidebar from "../../components/uncommon/PostingSidebar.vue";
export default {
  components: {
    Editor,
    PostingSidebar,
  },
  data() {
    return {
      blog: {
        title: "",
        slug: "",
        category: "",
        content: "",
        author: "",
        coverImg: "",
      },
    };
  },
  methods: {
    save() {},
    preview() {},
    submit() {},
    remove() {}
  },
  computed: {
    domain() {
      return `${window.location.origin}/category/`;
    },
  },
};
</script>

<style lang="scss" scoped>
.posting {
  padding: 50px 50px;
  &__title {
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 8px 12px;
    font-family: futura-regular;
    font-size: var(--title-size);
    margin-bottom: 10px;
  }
  &__title:focus {
    border-color: var(--blue-hover);
  }
  &__slug {
    margin-bottom: 10px;
    &__domain {
      color: #757575;
    }
    &__content {
      border: 1px solid #cccccc;
      border-radius: 5px;
      padding: 8px 12px;
      font-family: futura-regular;
    }
  }
}
</style>
