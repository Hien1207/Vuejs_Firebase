<template>
  <div class="nav">
    <div class="navbar-menu">
      <router-link class="view" to="/">Home</router-link>
      <router-link class="view" to="/about">About</router-link>
      <router-link class="view" to="/blogs">Blogs</router-link>
    </div>
    <p v-if="loggedIn" @click="signOut" class="user">
        {{ userinfo }}
      </p>
    <div v-else class="navbar-login">
      <button @click="$router.push('/auth/login')" class="login-1">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/auth/login")
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      loggedIn: "",
    }
  },
  computed: {
    userinfo() {
      const user = firebase.auth().currentUser;
      return user.email;
    }
  }
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  display: flex;
  font-family: Matter, sans-serif;
  border-bottom: 1px solid #eff1f2;
}
.img {
  cursor: pointer;
}
.navbar-menu {
  display: flex;
  width: 40%;
  margin-right: 5%;
}
.view {
  color: black;
  font-family: "Courier New", Courier, monospace;
  text-decoration: none;
  width: 18%;
  margin: 0.7rem 1.7rem;
  text-align: center;
  font-size: 18px;
}
.router-link-active {
  font-weight: 700;
}
.navbar-login {
  width: 20%;
  margin-left: 5%;
}
.login-1 {
  margin: 5px 0px;
  font-size: 22px;
  width: 100px;
  font-weight: 100;
  background: white;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
}
.login-1:hover {
  background: black;
  color: white;
}
@media (min-width: 850px) {
  .navbar-login {
    width: 10%;
    margin-left: 20%;
  }
  .navbar-menu {
    margin-right: 20%;
    margin-left: 4%;
  }
  .img {
    margin-left: 5%;
  }
}
</style>
