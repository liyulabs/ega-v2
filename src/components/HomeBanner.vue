<template>
  <section class="hero-section">
    <div>
      <v-window show-arrows="hover">
        <v-window-item>
          <v-card elevation="2" height="100vh">
            <v-img :src="hero" class="hero-img" cover>
              <div class="left-text">
                <div class="banner-text">
                  <span class="headline">
                    Amateurs Slip Past Professionals at MGA/PGA Cup Matches
                    <!-- {{ article.headline }} -->
                  </span>

                  <!-- <span class="details"> -->
                  <!-- details -->
                  <!-- {{ article.details }} -->
                  <!-- </span> -->
                  <v-btn
                    class="banner-btn"
                    size="small"
                    variant="flat"
                    color="green"
                    router
                    >Read more</v-btn
                  >
                </div>
              </div>
            </v-img>
          </v-card>
        </v-window-item>
        <v-window-item>
          <v-card elevation="2" height="100vh">
            <v-img :src="hero" class="hero-img" cover>
              <div class="left-text">
                <div class="banner-text">
                  <span class="headline">
                    Amateurs Slip Past Professionals at MGA/PGA Cup Matches
                    <!-- {{ article.headline }} -->
                  </span>

                  <!-- <span class="details"> -->
                  <!-- details -->
                  <!-- {{ article.details }} -->
                  <!-- </span> -->
                  <v-btn
                    class="banner-btn"
                    size="small"
                    variant="flat"
                    color="green"
                    router
                    >Read more</v-btn
                  >
                </div>
              </div>
            </v-img>
          </v-card>
        </v-window-item>
        <v-window-item>
          <v-card elevation="2" height="100vh">
            <v-img :src="hero" class="hero-img" cover>
              <div class="left-text">
                <div class="banner-text">
                  <span class="headline">
                    Amateurs Slip Past Professionals at MGA/PGA Cup Matches
                    
                  </span>

                  <!-- <span class="details"> -->
                  <!-- details -->
                  <!-- {{ article.details }} -->
                  <!-- </span> -->
                  <v-btn
                    class="banner-btn"
                    size="small"
                    variant="flat"
                    color="green"
                    router
                    >Read more</v-btn
                  >
                </div>
              </div>
            </v-img>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import hero from "../assets/golftournament2.jpg";

const overlay = ref(false);
</script>

<style scoped>
.hero-section {
}

.hero-img {
  opacity: 0.9;
}
.loader {
  display: flex;
  justify-content: center;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 2rem;
  padding-inline: 5rem;
}

.banner-card {
  width: 50rem;
}

.banner-text {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-block: 7rem;
}
.headline {
  color: whitesmoke;
  font-size: 2rem;
  font-weight: bold;
  z-index: 3;
  text-shadow: 2px 2px 2px #7b7a7a;
}

.banner-btn {
  margin: 2rem;
  width: 7rem;
}

@media only screen and (max-width: 425px) {
  .banner {
    width: 100%;
    padding: 1rem;
  }
  .banner-card {
  }

  .banner-text {
    color: whitesmoke;
    display: flex;
    align-content: start;
    justify-content: start;
    flex-direction: column;
    padding: 2rem;
  }

  .headline {
    color: whitesmoke;
    font-size: 1.25rem;
    font-weight: bold;
    z-index: 3;
    text-shadow: 2px 2px 2px #7b7a7a;
  }
}
</style>
