<template>
  <div class="media">
      <div >
        <h1>Media Library</h1>
      </div>
       <div>
           <button id="btn" @click="click1">Choose photo</button>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
        </div>
       <div  v-if="imageData!=null">                     
          <img class="preview" height="268" width="356" :src="medi.img1">
       <br>
       </div>   
      <div >
        <input
        class="border_cap"
        v-model="medi.caption"
        placeholder="Caption goes here">
      </div>
      <div>
        <button id="btn" @click="create">Upload</button>
      </div>
      <div class="show">
       <div class="media_is" v-for="media in medias" :key="media">
         <div class="image_medi">
            <img class="wid" :src="media.img1" alt="" >
         </div>
           <div class="text_medi">
               <p>{{media.caption}}</p>
           </div>
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
      caption : '',
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
  text-align: center;
}
#btn{
  background: white;
  border: 1px solid black;
  cursor: pointer;
  margin: 10px 0px;
}
#btn:hover{
  background: black;
  color: white;
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
.media_is{
  display: block;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.wid{
  width: 90%;
  height: 90%;
}
.image_medi{
  margin: 5px ;
  height: 240px;
  width: 240px;
}
.text_medi{
  text-align: center;
}
</style>
