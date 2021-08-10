<template>
  <div class="container">
    <div class="layout-box-sizing">
      <p style="color:white">Bạn chưa có tài khoản?
        <a class="register" style=" text-decoration: underline;" @click="$router.push('/auth/register').catch(()=>{})">Đăng ký</a>
      </p>
      <h3 class="heading-size">Đăng nhập</h3>
    </div>
    <div class="error" v-if="error">
      <p>{{ errorMessage }}</p>
    </div>
    <form @submit.prevent="signIn" class="layout-box-sizing">
      <div class="form-group" style="margin-bottom: 30px">
        <input
          v-model="email"
          placeholder="Email"
          type="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group" style="margin-bottom: 16px">
        <input
          v-model="password"
          placeholder="Mật khẩu"
          type="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="signin">
        Đăng nhập
      </button>
      <div class="layout-box" style="margin-bottom: 10px; display: flex">
        <input type="checkbox" name="" class="box" />
        <h4 style="margin: 3px 0px; font-weight: 100; opacity: 0.7">
          Remember me
        </h4>
        <h4 style="margin: 3px 0px 3px 70px; font-weight: 100; opacity: 0.7">
          Forgot Password?
        </h4>
      </div>
      <p class="text">— Or Sign In With —</p>
      <div class="in">
        <a href="#" class="social" style="margin-right: 20px">Facebook</a>
        <a href="#" class="social"> Twitter</a>
      </div>
    </form>
  </div>
</template>

<script scoped>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  created() {
    const user = firebase.auth().currentUser;
      if (user) this.$router.replace("/admin/home");
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          this.$router.replace("/admin/home");
          this.email = "";
          this.password = "";
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/wrong-password":
              this.errorMessage = "Mật khẩu hoặc email không đúng."
              break;
            case "auth/user-not-found":
              this.errorMessage = "Người dùng không tồn tại."
              break;
            default:
              this.errorMessage = error.code
          }
          this.error = true;
          this.email = "";
          this.password = "";
        });
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMessage: "",
    };
  },
};
</script>

<style scoped>

</style>
