<template>
<div class="about">
  <div class="about-contain">
      <div class="container-left-a">
        <img src="https://static.wixstatic.com/media/baac51_efeb1e710a90468f9dc4d8ee663cc9dc~mv2_d_5532_3552_s_4_2.jpg/v1/crop/x_1041,y_0,w_3550,h_3552/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01/baac51_efeb1e710a90468f9dc4d8ee663cc9dc~mv2_d_5532_3552_s_4_2.webp" style="width:100%;">
      </div>
    <div class="container-right-a">
      <h4 style="font-weight:600;margin-top:5px; ">HI! I'M CAMERON</h4>
        <p class="font-2">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>     
        <h4 class="font-2"><i class="el-icon-circle-plus">LATEST FROM ELLIOT ALDERSON</i></h4>
        <p class="font-2"><i class="el-icon-right"></i>How to Borrow Money Immediately for Startups</p>     
        <p class="font-2"><i class="el-icon-right"></i>6 Productivity Hacks for Success-Hungry Startups</p>     
        <p class="font-2"><i class="el-icon-right"></i>5 Podcast Every Startups Owner Needs to Listen To</p>        
    </div>
  </div>
  <div class="about-contain" style="margin-top:2%">
      <div class="container-left-a">
        <img src="https://static.wixstatic.com/media/baac51_efeb1e710a90468f9dc4d8ee663cc9dc~mv2_d_5532_3552_s_4_2.jpg/v1/crop/x_1041,y_0,w_3550,h_3552/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01/baac51_efeb1e710a90468f9dc4d8ee663cc9dc~mv2_d_5532_3552_s_4_2.webp" style="width:100%;">
      </div>
    <div class="container-right-a">
      <h4 style="font-weight:600;margin-top:5px; ">HI! I'M CAMERON</h4>
        <p class="font-2">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>     
        <h4 class="font-2"><i class="el-icon-circle-plus">LATEST FROM ELLIOT ALDERSON</i></h4>
        <p class="font-2"><i class="el-icon-right"></i>How to Borrow Money Immediately for Startups</p>     
        <p class="font-2"><i class="el-icon-right"></i>6 Productivity Hacks for Success-Hungry Startups</p>     
        <p class="font-2"><i class="el-icon-right"></i>5 Podcast Every Startups Owner Needs to Listen To</p>        
    </div>
  </div>
  <div class="about-contain">
    <div class="container-left-a">
          <h4 style="margin-top:0">CONTACT ME</h4>
          <div class="comp-b"></div>
          <p>info@mysite.com<p>
          <p>123-456-7890</p>
         
      </div>
   <div class="container-right-a">
     <div style="display:flex;width:100%">
      <div class="inp">
        <p class="font-3">First Name *</p>
        <div>
        <input
          v-model="firstname"
          class="form-control-b" style="width:90%"
          required
        >
        </div>
      </div>
       <div class="inp">
        <p class="font-3">Last Name *</p>
        <div>
        <input
          v-model="lastname"
          class="form-control-b" style="width:90%"
          required
        >
        </div>
      </div>
     </div>
     <div class="inp-w">
        <p class="font-3">Email *</p>
        <div>
        <input
          v-model="email"
          type="email"
          class="form-control-b" style="width:100%"
          required
        >
        </div>
      </div>
      <div class="inp-w">
        <p class="font-3">Message *</p>
        <div>
        <input
          v-model="message"
          class="form-control-b" style="width:100%;height:80px"
          required
        >
        </div>
      </div>
      <div class="submit">
         <button class="font-3" id="bt-submit">Submit</button>
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
.about{
  display: block;
}
.about-contain{
    width: 90%;
    display: block;
    margin:5% 5% 0%;
}
.container-left-a{
  width: 40%;
  font-family:var(--font-light);
   margin:5% 35%;
}
.container-right-a{
  width:90%;
  margin-left: 10%;
  font-family:var(--font-light);
}
.font-2{
    font-size: 11px;
    font-family:var(--font-light);
    margin-bottom: 10px;
}
.font-3{
    font-size: 13px;
    font-family:var(--font-light);
    margin-bottom: 10px;
}
.inp{
  display: block;
  margin-bottom: 20px;
  margin-right: 10px;
}
.inp-w{
  display: block;
  width: 93%;
  margin-bottom: 20px;
}
.submit{
  margin: 5% 40% ;
}
#bt-submit{
  background: white;
  width: 100px;
  height: 20px;
  border: none;
  transition:all 0.5s ease-in;
}
#bt-submit:hover{
  background: var(--black-text);
  color: white;
  cursor: pointer;
}
.form-control-b{
  border: none;
  border-bottom: 1px solid var(--black-text);
}
.form-control-b:hover{
   border-bottom: 2px solid var(--black-text);
}
textarea:focus, input:focus{
    outline: none;
}
@media (min-width: 500px) {
  .about-contain{
   display: flex;
  }
  .container-left-a{
    width: 30%;
    margin:10px;
  }
 .container-right-a{
    width:60%;
    margin-left: 7%;
  }
}
@media (min-width: 700px) {
  .about-contain{
    width: 70%;
    margin:5% 15% 0%;
  }
}
@media (min-width: 1000px) {
  .about-contain{
    width: 50%;
    margin:5% 25% 0%;
  }
}

</style>
