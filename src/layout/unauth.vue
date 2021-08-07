<template>
  <div class="unauth__layout ">
    <div class="image-log">
      <p class="page"  @click="$router.push('/').catch(()=>{})">Trang chủ</p>
    <slot />
    </div>
  </div>
</template>
<style  scoped>
.unauth__layout {
    width :98.9vw;
    height: 100vh;
    background-image:url("https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp");
    height: 722px;
    background-repeat: no-repeat;
    background-position: center center;
}
.image-log{
    height: 100vh;
    background:rgba(5, 5, 5, 0.55);
    box-sizing: border-box;
}
.page{
  text-align: center;
  color: white;
  text-decoration: underline;
}
.page:hover{
   color: rgb(211, 188, 145);
   cursor: pointer;
}
</style>