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
      <p class="textab">— Or Sign In With —</p>
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
.container {
  position: relative;
  height: 300px;
  width: 300px;
  top: 30%;
  left: 45%;
  transform: translate(-50%, -50%);
  display: block;
}
.form-control {
  background: transparent;
  border: none;
  width: 88%;
  height: 50px;
  color: #fff !important;
  background: rgba(255, 255, 255, 0.08);
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1rem;
}
.signin {
  height: 50px;
  color: rgb(5, 5, 5) !important;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.08);
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1rem;
  width: 100%;
  background: #fbceb5 !important;
}
.signin:hover {
  cursor: pointer;
  background: #e9bea6 !important;
}
.register:hover{
   color: rgb(211, 188, 145);
   cursor: pointer;
}
.layout-box-sizing {
  box-sizing: border-box;
  margin-bottom: 40px;
  text-align: center;
}
.layout-box {
  box-sizing: border-box;
  margin: 40px 0px;
  color: white;
  font-size: 1rem;
}
.textab {
  text-align: center;
  color: white;
  margin-top: 20px;
}
.in {
  width: 100%;
  display: flex;
}
.social {
  width: 45%;
  text-align: center;
  border-radius: 5px;
  padding: 20px;
  display: block;
  color: #000;
  background: #fff;
  text-decoration: none;
}
.social:hover {
  background: black;
  color: white;
  text-decoration: none;
}
.heading-size {
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  font-size: 30px;
  color: white;
  text-align: center;
  line-height: 1.5;
}
.box {
  width: 18px;
  height: 18px;
  border: 2px solid black;
  border-radius: 40px;
  background: white;
  cursor: pointer;
}
h4:hover {
  color: wheat;
}
</style>
