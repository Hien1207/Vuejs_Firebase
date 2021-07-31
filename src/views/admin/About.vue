<template>
<div class="container-a">
    <div class="container-left-a">
      <img src="https://static.wixstatic.com/media/baac51_efeb1e710a90468f9dc4d8ee663cc9dc~mv2_d_5532_3552_s_4_2.jpg/v1/crop/x_1041,y_0,w_3550,h_3552/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01/baac51_efeb1e710a90468f9dc4d8ee663cc9dc~mv2_d_5532_3552_s_4_2.webp" style="width:100%;">
    </div>
   <div class="container-right-a">
     <h4 style="font-weight:1;">HI! I'M CAMERON</h4>
      <p class="font1">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p> 
     
   </div>
</div>
</template>

<script>
export default {
  name: "About",
};
</script>
  
<style lang="scss">
.container-a{
    z-index: 3;
    width: 70%;
    max-width: none;
    display: flex;
    margin:10% 15% 8%;
}
.container-left-a{
  width: 30%;
  height:100px;
}
.container-right-a{
  width: 60%;
  margin-left: 7%;
font-family: "Times New Roman", Times, serif;
}
.font1{
    font-size: 10px;
}
@media (min-width: 700px) {
 .font1{
    font-size: 14px;
}
}
</style>
