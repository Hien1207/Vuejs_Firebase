<template>
  <div class="footer">
      <div class="comp-imdmckpu">
          <p class="font-4" style="text-align:center;font-size:18px">
            <span style="letter-spacing:0.45em">
              <span class="color_11">
                  <a class="aho" style="font-family:var(--font-regular)">DESIGN <span style="font-family: var(--font-light)">FOR</span> LIFE</a>
              </span>
            </span>
          </p>
      </div>
      <div class="comp-imdmckp">
          <div class="comp-imdmckqb">
            <div class="PE8t5">
             <a href="https://www.facebook.com/wix" style="margin-right:var(--small-text)"><img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"></a>
             <a href="https://www.twitter.com/wix"  style="margin-right:var(--small-text)"><img src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/01ab6619093f45388d66736ec22e5885.webp"></a>
             <a href="https://www.pinterest.com/wixcom/" style="margin-right:var(--small-text)"><img src="https://static.wixstatic.com/media/9c486556465843c5850fabfd68dfae49.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/9c486556465843c5850fabfd68dfae49.webp"></a>
             <a href="https://www.instagram.com/wix"><img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"></a> 
            </div>
          </div>
          <div class="comp-form">
             <form class="form-f">
               <label>Enter your email here *</label>
              <div style="margin: 10px 0px">
              <input
                v-model="email"
                type="email"
                class="form-control"
                required
              />
            </div>
              <button type="submit" class="form-control-bt" >
                Subscribe now
              </button>
             </form>
          </div>
           <div class="comp-imdmckq6">
             <div style="margin:20px 30px">
              <span class="color_11">
                 © 2023 by Design for Life.<br>Proudly created with Wix.com 
              </span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  position: static;
    display: grid;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 100%;
  background:var(--black-text);
  font-family:var(--font-light);
}
.comp-imdmckpu{
  width: 70%;
  margin: 43px 0px 10px calc((100% - 70%) * 0.5);
}
.comp-imdmckp{
  display: block;
  margin:1% 0% 4%;
}
.font_4 {
    font: var(--font_4);
    color: rgb(var(--color_15));
}
.color_11 {
    color: rgb(var(--color_11));
}
.comp-imdmckqb {
  width: 200px;
  margin-left: 25%; 
}
.comp-imdmckq6 {
    width: 250px;
    font-size: var(--small-text);
    margin-left:20%;
}
.comp-form{
  width: 300px;
  margin-left: 10%;
}
.form-f{
  margin:0px 38px;
  color:white ;
  font-size: var(--small-text);
}
.form-control{
  width: 223px;
  background: var(--black-text);
  color:var(--color_15) ;
  border: 1px solid white;
  height: 20px;
} 
.form-control:hover{
  border: 1px solid var(--yellow-active);
}
.form-control-bt{
  width: 228px;
  height: 25px;
  background: var(--black-text);
  color:var(--color_15) ;
  border: 1px solid white;
  transition:all 0.5s ease-in-out ;
}
.form-control-bt:hover{
  background: var(--gray-boder);
  cursor: pointer;
}
.PE8t5 {
    width: 100%;
    display: flex;
    cursor: pointer;
    margin: 20px;
  }
  .aho:hover{
    color: rgb(247, 244, 244);
  }
@media (min-width: 500px) {
  .comp-imdmckp{
  display: flex;
  margin:1% 0% 4%;
  }  
  .comp-imdmckqb {
  width: 200px;    
  border-right: 2px solid white;
  margin-left: 0px;
  }
  .comp-form{
  width: 300px;
  border-right: 2px solid white;
  margin-left: 0px;
  }
  .comp-imdmckq6 {
    margin-left: 0%;
}
}
@media (min-width: 700px) {
  .comp-imdmckp{
  margin:1% 0% 4% 15%;
}
}
@media (min-width: 1000px) {
   .comp-imdmckp{
    margin:1% 22% 4%;
 }
}
@media (min-width: 1300px) {
   .comp-imdmckp{
    margin:1% 28% 4%;
}
}
</style>
