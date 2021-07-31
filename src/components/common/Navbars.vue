<template>
  <div class="secretnav">
    <div class="logo">
      <img src="http://boooya.aqvatarius.com/img/logo.png" @click="$router.push('/')" alt="logo" />
    </div>
    <div class="menu" @click="$emit('toggleMenu')">menu</div>
    <div class="logout" @click="signOut">Log out</div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/")
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.secretnav {
  display: flex;
  justify-content: space-between;
  background-color: #1a3753;
  padding: 10px 25px;
  .logout,
  .menu {
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 15px;
    margin: 15px;
    cursor: pointer;
  }
  .menu {
    color: white;
    border: solid 1px white;
  }
  .menu:hover {
    background-color: white;
    color: #1c1c1c;
    transition: 0.3s ease;
  }
  .logout {
    display: none;
  }
}
@media (min-width: 992px) {
  .secretnav {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.247);
    justify-content: flex-end;
    background-color: white;
    .logout {
      display: block;
      color: #1c1c1c;
      border: solid 1px #1c1c1c;
    }
    .logout:hover {
      background-color: #1c1c1c;
      color: white;
      transition: 0.3s ease;
    }
    .menu,
    .logo {
      display: none;
    }
  }
}
</style>