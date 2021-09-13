<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth__wrapper">
        <div class="auth__header">
          <h2 class="auth__header__content">Login</h2>
          <p class="auth__header__content">
            New to this site? <span>Sign Up</span>
          </p>
        </div>
        <div class="auth__body">
          <authform
            :methods="signIn"
            v-bind:email.sync="email"
            v-bind:password.sync="password"
          />
          <p>{{ errorMessage }}</p>
          <p>sign out</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authform from "../uncommon/AuthForm.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  created() {
    const user = firebase.auth().currentUser;
      if (user) {this.$router.replace("/blogs"); console.log(user);}
  },
  components: {
    authform,
  },
  data() {
    return {
      show: false,
      errorMessage: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          this.$router.replace("/blogs");
          this.email = "";
          this.password = "";
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/wrong-password":
              this.errorMessage = "Mật khẩu hoặc email không đúng.";
              break;
            case "auth/user-not-found":
              this.errorMessage = "Người dùng không tồn tại.";
              break;
            default:
              this.errorMessage = error.code;
          }
          this.email = "";
          this.password = "";
        });
    },
    signOut() {
      firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log(error)
});
    }
  },
  computed: {
    test() {
      return console.log(firebase.auth().currentUser);
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  z-index: 9;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__header__content {
    text-align: center;
  }
}
</style>
