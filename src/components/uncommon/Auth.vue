<template>
  <div class="auth">
    <div class="close-btn" @click="$emit('loginToggle')">
      <i class="fas fa-times"></i>
    </div>
    <div class="auth__container">
      <div class="auth__wrapper">
        <div class="auth__header">
          <div v-if="methods" class="auth__header__wrapper">
            <h2 class="auth__header__content">Login</h2>
            <p class="auth__header__content">
              New to this site?
              <span class="methods-btn" @click="changeMethods">Sign Up</span>
            </p>
          </div>
          <div v-else class="auth__header__wrapper">
            <h2 class="auth__header__content">Register</h2>
            <p class="auth__header__content">
              Already a member?
              <span class="methods-btn" @click="changeMethods">Sign In</span>
            </p>
          </div>
        </div>
        <div class="auth__body">
          <authform
            :methods="methods ? signIn : signUp"
            v-bind:email.sync="email"
            v-bind:password.sync="password"
          />
          <p>{{ errorMessage }}</p>
          <button @click="signOut">SignOut</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authform from "./AuthForm.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: {
    authform,
  },
  data() {
    return {
      errorMessage: "",
      email: "",
      password: "",
      // True = Sign In | False = Sign Up
      methods: true,
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
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
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.$store.dispatch('fetchUserData', userCredential);
          console.log(userCredential);
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
    changeMethods() {
      this.methods = !this.methods;
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('fetchUserData', {});
        })
        .catch(() => {
          // An error happened.
        });
    },
  },
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
  &__container {
    max-width: 300px;
    width: 100%;
  }
  &__header__content {
    text-align: center;
  }
}
.close-btn {
  position: absolute;
  right: 5%;
  top: 10%;
  font-size: 40px;
  cursor: pointer;
}
.close-btn:hover {
  color: #000000;
}
.methods-btn {
  color: var(--blue-hover);
  cursor: pointer;
}
.methods-btn:hover {
  text-decoration: underline;
}
</style>
