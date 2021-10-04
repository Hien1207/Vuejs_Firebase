<template>
  <el-row class="posting" :gutter="20">
    <el-col :span="18">
      <el-row>
        <el-col>
          <input
            v-model="blog.title"
            class="posting__title"
            type="text"
            placeholder="Edit your title here..."
          />
        </el-col>
        <el-col class="posting__slug">
          <span class="posting__slug__domain">
            {{ domain }}
          </span>
          <input
            v-model="blog.slug"
            type="text"
            class="posting__slug__content"
          />
        </el-col>
        <el-col>
          <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
          ></ckeditor>
        </el-col>
      </el-row>
    </el-col>
    <!-- Posting Sidebar -->
    <el-col :span="6">
      <!-- Publish Box -->
      <posting-sidebar
        :submitPost="submit"
        @categorySetter="setCategory"
        @setImgUrl="setCoverImg"
        :featuredImg="this.blog.coverImg"
      />
    </el-col>
  </el-row>
</template>

<script scoped>
import PostingSidebar from "../../components/uncommon/PostingSidebar.vue";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import firebase from "firebase";
import "firebase/firestore";

export default {
  components: {
    PostingSidebar,
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      blog: {
        title: "",
        slug: "",
        category: "",
        author: this.$store.state.user.email,
        coverImg: "",
      },
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        cloudServices: {
            tokenUrl: 'https://83263.cke-cs.com/token/dev/bb6b4afbecc7128d0733623f58137fdeef7a3abb85d218c44a3917dc3cdc',
            uploadUrl: 'https://83263.cke-cs.com/easyimage/upload/'
        }
      },
    };
  },
  methods: {
    submit() {
       firebase
      .firestore()
      .collection("blogs").doc(this.blog.slug).set({
        title: this.blog.title,
        slug: this.blog.slug,
        category: this.blog.category,
        author: this.blog.author,
        coverImg: this.blog.coverImg,
        content: this.editorData
      }).then(() => {
    location.reload();
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
    },
    setCategory(value) {
      this.blog.category = value
    },
    setCoverImg(url) {
      this.blog.coverImg = url
    }
  },
  computed: {
    domain() {
      return `${window.location.origin}/category/`;
    }
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
