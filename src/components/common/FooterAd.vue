<template>
  <div class="footer-ad">
      <div class="footer-col-ad" >
          <h4>SUBSCRIBE VIA EMAIL</h4>
          <div class="comp-ad"></div>
          <div class="icon">
             <img style="margin-right:10px" src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp">
              <img style="margin-right:10px" src="https://static.wixstatic.com/media/8f6f59264a094af0b46e9f6c77dff83e.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/8f6f59264a094af0b46e9f6c77dff83e.webp">
              <img style="margin-right:10px" src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp">
             <img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp">
          </div>
      </div>
    <div  class="wi" > 
        <label>Enter your email here *</label>
        <div style="margin-bottom: 10px">
        <input
          v-model="email"
          type="email"
          class="form-control-ad"
          required
        />
      </div>
      <button type="submit" class="subscribe">
        Subscribe now
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style coped>
.footer-ad{
  display: block;
  font-family: "Times New Roman", Times, serif;
  width: 100%;
  height: 250px;
}
.footer-col-ad{
    width: 30%;
    margin: 5% 0% 0% 15%;
}
.comp-ad{
    width: 25px;
    height: 5px;
    background: black;
}
.icon{
    display: flex;
    margin-top: 20px;
}
.wi{
  width: 90%;
  display: block;
  margin: 6.5% 20px 0%;
}
.form-control-ad{
    width: 90%;
    height: 25px;
    border:1px solid black;
}
.subscribe{
    width: 90%;
    height: 30px;
    background: black;
    color: white;
}
.subscribe:hover{
    background: white;
    color: black;
    border:2px solid black;
    cursor: pointer;
}
.logo-icons{
    width: 50%;
    max-width: 190px;
    margin-right: 0;
    margin: 12% 40%;
}
.values{
  margin-left:20%;
}
@media (min-width: 700px) {
  .footer-ad{
    display: flex;
  }
  .footer-col{
    width: 30%;
    margin:8% 20px ;
  }
  .wi{
    width:50%;
  }
  .form-control-ad{
    width: 60%;}
  .subscribe{
    width: 61.3%;}
}

</style>
