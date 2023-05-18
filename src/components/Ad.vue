<script setup>
import anti from "../assets/Anti_Doping.png";
</script>
<template>
  <section class="banner-card">
    <img :src="anti" class="banner-img" aspect-ratio="16/9" alt="" />
  </section>
</template>

<style scoped>
.banner-card {
  width: 100vw;
  padding-block: 10vh;
  display: flex;
  justify-content: center;
  background-color: #216d1d;
}

.banner-img {
  width: 80vw;
}

@media only screen and (max-width: 500px) {
  .banner-img {
    display: flex;
    justify-content: center;
  }
}
</style>
