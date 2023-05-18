<template>
  <section class="banner-section">
    <div class="banner-card">
      <v-card class="card-content">
        <v-img :src="tournament" cover alt="">
          <!-- <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="grey-lighten-4"
                indeterminate
              ></v-progress-circular>
            </div>
          </template> -->
          <div>
            <div class="banner-text">
              <span class="headline">
                Amateurs Slip Past Professionals at MGA/PGA Cup Matches
                <!-- {{ tournament.title }} -->
              </span>

              <v-btn class="banner-btn" color="green" variant="flat" small
                >View</v-btn
              >
            </div>
          </div>
        </v-img>
      </v-card>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import tournament from "../assets/tournament.jpg";
</script>

<style scoped>
.banner-section {
  width: 100%;
  padding-block: 10vh;
  padding-inline: 10vw;
  border: 1px solid red;
}
.banner-card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.banner-text {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 4rem;
  text-shadow: 4px 4px 4px #000000;
}
.headline {
  color: whitesmoke;
  font-size: 2rem;
  font-weight: bold;
  z-index: 3;
}

@media only screen and (max-width: 425px) {
  .banner {
    margin-top: 2rem;
    padding: 2rem;
  }
  .banner-card {
    min-width: 20rem;
    padding: 1rem;
  }

  .banner-text {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 1rem;
  }

  .headline {
    font-size: 1.5rem;
  }

  .banner-btn {
    font-size: 1rem;
  }
}
</style>
