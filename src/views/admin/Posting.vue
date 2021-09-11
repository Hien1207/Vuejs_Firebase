<template>
  <div class="container-media">
    <el-row >
      <div class="center">
        <h1>Upload a photo</h1>
      </div>
    </el-row>
    <el-row>
         <div class="center" >
           <button  id="btn" @click="click1" style="border:1px solid black;font-size:18px">Choose photo</button>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
         </div>
 
       <div v-if="imageData!=null" class="ig">                     
          <img class="preview" height="268" width="356" :src="file.img1">
       <br>
       </div>  
    </el-row>
    <el-row>
      <div class="center">
        <input type="text" class="text_" 
        v-model="file.caption" 
        placeholder="Caption goes here"/> 
      </div>
    </el-row>
    <el-row>
     <div class="center" >
        <button id="btn" style="border:1px solid black;font-size:18px"  @click="create">Upload</button>
     </div>
    </el-row>
   <el-row class="all">
     <div class="image_" v-for="img in file" :key="img">
        <div class="image_01">
            <img id="img1" :src="img.img1" alt="" >
         </div>
           <div class="cap">
               <p>{{img.caption}}</p>
           </div>
    </div>
    </el-row>
  </div>
</template>


<script>
import firebase from 'firebase';
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
      methods: {
        create () {
          this.$http.post('https://vuejs-firebase-1d336-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', this.file)
          .then(response=> {
            location.reload();
            console.log(response)
          },error =>{
            console.log(error)
          })
        },
      click1() {
      this.$refs.input1.click()   
    },
    previewImage(event) {
      this.uploadValue=0;
      this.file.img1=null;
      this.imageData = event.target.files[0];
      this.onUpload()
    },
    onUpload(){
      this.file.img1=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
      this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.file.img1 =url;
              console.log(this.file.img1)
            });
          }      
        );
    },
      }
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
.text_{
  border: 1px solid black;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 300px;
  padding: 10px ;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform .2s;
}
.image_:hover{
  transform: scale(0.97);
}
#img1{
  width: 114%;
  height: 100%;
}
.image_01{
  margin: 10px 35px 10px 0px;
  height: 240px;
  width: 240px;
}
.cap{
  text-align: center;
}
</style>

