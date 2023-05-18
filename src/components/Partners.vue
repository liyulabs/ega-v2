<script setup>
import et from "../assets/et.png";
import african from "../assets/africanlogo.jpg";
import randa from "../assets/randalogo.png";
import dummy2 from "../assets/logodummy3.png";
</script>
<template>
  <section class="partners">
    <v-card-title class="card-title">Partners</v-card-title>
    <div class="logos">
      <div>
        <img :src="et" alt="" />
        <h5>Ethiopian Airlines</h5>
      </div>
      <div>
        <img :src="african" alt="" />
        <h5>African Golf confederation</h5>
      </div>
      <div>
        <img :src="randa" alt="" />
        <h5>R and A</h5>
      </div>
      <div>
        <img :src="dummy2" alt="" />
        <h5>Ethiopian Airlines</h5>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 3rem;
  box-shadow: 10px 5px 5px 10px rgb(0 0 0 / 0.2);
}
.logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 20px;
  padding-block: 5vh;
  padding-inline: 10vw;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.logos img {
  width: 100%;
  height: 147px;
  margin-bottom: 20px;
}

.logos h5 {
  font-size: 2vw;
  color: var(--vt-c-text-light-1);
}

@media (max-width: 700px) {
  .logos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .logos {
    grid-template-columns: 1fr;
  }
  .logos h5 {
    font-size: 7vw;
  }
}
</style>
