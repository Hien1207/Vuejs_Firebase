<template>
<div class="container-c">
    <div class="container-left-b">
          <h4>CONTACT ME</h4>
          <div class="comp-b"></div>
          <p>info@mysite.com<p>
          <p>123-456-7890</p>
         
      </div>
   <div class="container-right-b">
     <div style="display:flex">
      <div class="inp">
        <label>First Name *</label>
        <div>
        <input
          v-model="firstname"
          class="form-control-ba"
          required
        />
        </div>
      </div>
       <div class="inp">
        <label>Last Name *</label>
        <div>
        <input
          v-model="lastname"
          class="form-control-ba"
          required
        />
        </div>
      </div>
     </div>
     <div class="inp-w">
        <label>Email *</label>
        <div>
        <input
          v-model="email"
          class="form-control-ba" style="width:90%"
          required
        />
        </div>
      </div>
      <div class="inp-w">
        <label>Message *</label>
        <div>
        <input
          v-model="message"
          class="form-control-b" style="width:90%;height:80px"
          required
        />
        </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
  name: "About",
};
</script>
  
<style lang="scss">
.container-c{
    z-index: 3;
    width: 70%;
    max-width: none;
    display: flex;
    margin:10% 15% 0%;
}
.container-left-b{
  width: 35%;
  height:100px;
  font-family: "Times New Roman", Times, serif;
}
.container-right-b{
  width: 60%;
  margin-left: 13%;
 font-family: "Times New Roman", Times, serif;
}
.comp-ad{
    width: 25px;
    height: 5px;
    background: black;
    margin-left: 10px;
}
.inp{
  display: block;
  width: 50%;
  margin-bottom: 20px;
}
.inp-w{
  display: block;
  width: 93%;
  margin-bottom: 20px;
}
.form-control-ba{
  border: none;
  border-bottom: 2px solid black;
}
textarea:focus, input:focus{
    outline: none;
}
@media (min-width: 700px) {

}
</style>
