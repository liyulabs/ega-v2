<template>
  <div>
    <section class="not-found-section">
      <div class="not-found-card">
        <v-card class="card-content">
          <h2>404 Page not Found</h2>

          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo porro
            nostrum quibusdam ut voluptatibus debitis in ipsum deserunt
            adipisci? Dolore numquam velit provident reiciendis, consequuntur
            consequatur sit accusantium suscipit delectus?
          </h4>
        </v-card>
      </div>
    </section>
    <ContactUs />
  </div>
</template>
<script>
import ContactUs from "@/components/ContactUs.vue";

export default {
  name: "AboutView",
  components: {
    ContactUs,
  },
};
</script>
<style scoped>
.not-found-section {
  padding-block: 10vh;
  padding-inline: 10vw;
}

.not-found-card {
  display: flex;
  flex-direction: column;

  padding: 2rem;
  row-gap: 3rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  height: 80vh;
  align-items: center;
}
h3,
h4 {
  color: black;
}
@media only screen and (max-width: 425px) {
  .about-view {
    padding: 1rem;
    margin-top: 4rem;
  }

  .about-card {
    display: flex;
    justify-content: start;
    align-items: start;
  }
  .title {
    font-size: 15px;
    font-weight: bold;
  }

  .top-bar {
    display: none;
  }
}
</style>
