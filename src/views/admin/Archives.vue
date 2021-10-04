<template>
  <section></section>
</template>

<script>
import firebase from 'firebase';
import 'firebase/firestore'
export default {
    created() {
        firebase.firestore().collection("blogs").get().then((blogs)=> {
            if(blogs) console.log(blogs.docs[0].data())
        }).catch((error) => {
            console.log(error)
        })
    }
}
</script>

<style>

</style>