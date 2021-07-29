<template>
   <div class="container">
          <div class="layout-box-sizing">
             <h3 class="heading-size">Have an account?</h3>
          </div>
          <form class="layout-box-sizing">
              <div class="form-group" style="margin-bottom:30px">
                   <input placeholder="Enter your email" type="text" class="form-control" required>
              </div>
              <div class="form-group " style="margin-bottom:16px">
                   <input placeholder="Enter your password" type="text" class="form-control" required>
              </div>
              <button  @click="$router.push('/admin/dashboard')" 
              class="signin" >SIGN IN</button>  
              <div class="layout-box" style="margin-bottom:10px; display:flex;"> 
                    <input type="checkbox" name="" class="box" />
                    <h4 style="margin: 3px 0px; font-weight:100; opacity:0.7">Remember me</h4>
                    <h4 style="margin: 3px 0px 3px 70px; font-weight:100; opacity:0.7">Forgot Password?</h4>
              </div>
              <p class="text">— Or Sign In With —</p>
              <div class="in">
                 <a href="#" class="social" style="margin-right:20px">Facebook</a>
                 <a href="#"  class="social"> Twitter</a>
              </div>
          </form>
        </div>
</template>

<script scoped>
export default {
  created() {
    console.log(this.$route);
  }
}
</script>

<style scoped>
.container{
  position: relative;
    height: 300px;
    width: 300px;
    top:40%;
    left: 45%;
    transform: translate(-50%,-50%);
    display: block;
}
.form-control{
  background: transparent;
    border: none;
    width:88%;
    height: 50px;
    color: #fff!important;
    border: 1px solid transparent;
    background: rgba(255,255,255,.08);
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 1rem;
}
.signin{
    height: 50px;
    color: rgb(5, 5, 5)!important;
    border: 1px solid transparent;
    background: rgba(255,255,255,.08);
    border-radius: 40px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 1rem;
    width:100%;
    background: #fbceb5!important;
}
.signin:hover{
  cursor: pointer;
  background: #e9bea6!important;
}
.layout-box-sizing{
  box-sizing: border-box;
  margin-bottom: 40px;
}
.layout-box{
  box-sizing: border-box;
  margin: 40px 0px;
  color: white;
  font-size: 1rem;
}
.text{
  text-align: center;
  color: white;
  margin-top: 20px;
}
.in{
   width:100%;
   display:flex;
}
.social{
    width: 45%;
    text-align: center;
    border-radius: 5px;
    padding: 20px;
    display: block;
    color: #000;
    background: #fff;
    text-decoration: none;
}
.social:hover{
  background: black;
  color: white;
  text-decoration: none;
}
.heading-size{
   margin-top: 0;
    margin-bottom: 0;
    font-family: "Courier New", Courier, monospace;
    font-weight: 300;
    font-size: 30px;
    color: white;
    text-align: center;
    line-height: 1.5;
}
.box{
  width: 18px;
  height: 18px;
  border:2px solid black;
  border-radius: 8px;
  background: white;
  cursor: pointer;
}
h4:hover{
  color:wheat;
}
</style>
