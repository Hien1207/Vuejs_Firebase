<template>
  <div class="login">
    <p>
      Login:
      <span>
        {{ login }}
      </span>
    </p>
    <button @click="signOut">Log Out</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.login = !!user;
    });
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      login: "",
    };
  },
};
</script>

<style></style>
