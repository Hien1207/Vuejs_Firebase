<template>
  <div class="container-media">
    <el-row >
      <div class="center">
        <h1>Media library</h1>
      </div>
    </el-row>
   <el-row class="all">
     <div class="image_" v-for="img in file" :key="img">
        <div class="image2">
            <img id="img2" :src="img.img1" alt="" >
         </div>
    </div>
    </el-row>
  </div>
</template>


<script>
import 'firebase/storage';
    export default {
      data () {
        return {
          file:{
            caption : '',
            img1: null,
          },
          imageData: null,
        }
      },
      async created(){
        try{const response = await this.$http.get('https://vuejs-firebase-1d336-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
        this.file = response.data;
        }
      catch(e){
        console.log(e);
      }
 },
}
</script>
  
<style lang="scss">
.center{
  text-align: center;
  margin: 10px;
}
.ig{
  margin: 0px 420px;
}
#text_{
  border: 1px solid black;
  color: black;
  box-shadow: 5px 5px rgba(0,0,0,.15);
  width: 300px;
}
#btn:hover{
  background: black;
  color: white;
  cursor: pointer;
}
.imagecontainer{
  width: 100%;
  height: 600px;
  background: blanchedalmond;
}
.all{
  width: 72vw;
  display: flex;
   flex-wrap: wrap;
   width: 100%;
   justify-content: space-around;
    box-sizing: border-box;
}
.image_ {
  display: block;
  margin-bottom: 20px;
  transition: ease-in-out 0.5s;
  border: 1px solid black;
}
#img2{
  width: 125%;
  height: 100%;
}
.image2{
  margin: 10px 35px 10px 0px;
  height: 140px;
  width: 140px;
}
.cap{
  text-align: center;
}

</style>

