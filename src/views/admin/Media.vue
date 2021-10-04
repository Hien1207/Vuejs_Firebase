<template>
  <div class="media">
      <div style="display:flex">
        <h1>Media Library</h1>
        <div class="addnew">
        <button id="btn-add" @click="create">Add New</button>
      </div>
      </div>
       <div class="choose-media">
         <div>
          <img style="width :10%;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdc8e6h0LzkO3XDIp1Q4f-ltJ4IPJNr7FjSCnxikayoxiTYXHVtVR4Ton1eUC1FQ4Jcg&usqp=CAU">
         </div>
           <button class="upload" @click="click1">Drop image to here upload</button>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
        </div>
       <div style="text-align:center" v-if="imageData!=null">                     
          <img class="preview" height="268" width="356" :src="medi.img1">
       <br>
       </div>   
      <!-- <div >
        <input
        class="border_cap"
        v-model="medi.caption"
        placeholder="Caption goes here">
      </div> -->
      
      <div class="show">
       <div class="media_is" v-for="media in medias" :key="media">
         <div class="image_medi">
            <img class="wid" :src="media.img1" alt="" >
         </div>
           <!-- <div class="text_medi">
               <p>{{media.caption}}</p>
           </div> -->
       </div>
      </div>
  </div>
</template>


<script>
import firebase from 'firebase';
export default {
  data () {
    return {
      medi:{
      img1: '',
      },
      imageData: null,
      medias:[]
    }
  },
  async created(){
    try{const response = await this.$http.get('https://vuejs-firebase-1d336-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
    this.medias = response.data;
    }
    catch(e){
      console.log(e);
    }
 },
  methods: {
    create () {
        this.$http.post('https://vuejs-firebase-1d336-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',this.medi)
        .then((response) => {
      location.reload();
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    },
  click1() {
  this.$refs.input1.click()   
},
    previewImage(event) {
      this.uploadValue=0;
      this.medi.img1=null;
      this.imageData = event.target.files[0];
      this.onUpload()
    },
    onUpload(){
      this.medi.img1=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
      this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.medi.img1 =url;
              console.log(this.medi.img1)
            });
          }      
        );
    },
      }
}
</script>
<style lang="scss" scoped>
.media{
  margin-left:3%;
}
#btn-add{
  width:100px;
  height:30px;
  background: rgb(56, 175, 125);
  border: 1px solid black;
  color:white;
  cursor: pointer; 
}
#btn-add:hover{
  opacity: 0.9;
}
.addnew{
  margin:3% 0% 0% 40%;
}
.choose-media{
  width:98%;
  text-align: center;
  height: 150px;
  border: 1px solid var(--gray-boder);
}
.upload{
  font-size: 16px;
}
.upload:hover{
  color:rgb(11, 116, 158);
}
.border_cap{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 300px;
  height: 30px;
}
.show{
   width: 72vw;
  display: flex;
   flex-wrap: wrap;
   width: 100%;
   justify-content: space-around;
    box-sizing: border-box;
}

.wid{
  width: 105%;
  height: 105%;
}
.image_medi{
  height: 140px;
  width: 140px;
  margin-top: 30px;
}
.text_medi{
  text-align: center;
}
@media (min-width: 700px) {
  .addnew{
  margin:3% 0% 0% 70%;
}
.wid{
  width: 105%;
  height: 105%;
}
.image_medi{
  height: 200px;
  width: 200px;
  margin-top: 40px;
}
}
</style>
