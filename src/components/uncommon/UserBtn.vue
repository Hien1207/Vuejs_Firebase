<template>
  <div class="user-btn">
    <el-dropdown placement="bottom">
      <el-avatar
        class="user-btn__avatar"
        :size="avatarSize"
        :src="userAvatar ? userAvatar : defaultAvatar"
      ></el-avatar>
      <el-dropdown-menu class="user-btn__drop-down__menu" slot="dropdown">
        <el-dropdown-item
          class="user-btn__drop-down__item"
          @click.native="$router.push('/admin/profile')"
          >Profile</el-dropdown-item
        >
        <el-dropdown-item class="user-btn__drop-down__item"
          >Settings</el-dropdown-item
        >
        <el-dropdown-item
          class="user-btn__drop-down__item"
          @click.native="signOut"
          >Sign Out</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      defaultAvatar:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      userAvatar: this.$store.state.user.photoURL,
      avatarSize: "medium",
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("fetchUserData", {});
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-btn {
  &__drop-down {
    &__item {
      text-align: center;
    }
    &__item:hover {
      color: var(--blue-hover);
      background-color: #ffffff;
      text-decoration: underline;
    }
  }
}
</style>
