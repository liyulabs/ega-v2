<template>
  <div class="banner">
    <v-window v-model="window" show-arrows="hover">
      <v-window-item v-for="tournament in tournaments" :key="tournament.id">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="banner-card" height="400px" v-bind="props">
            <v-img
              :src="tournament1"
              :aspect-ratio="16 / 9"
              class="banner-img"
              cover
            >
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular
                    color="green-lighten-4"
                    indeterminate
                  ></v-progress-circular>
                </div>
              </template>
            </v-img>
            <div class="left-text">
              <v-overlay
                :model-value="isHovering"
                contained
                scrim="#036358"
                class="align-center justify-start"
              >
                <div class="banner-text">
                  <span class="headline">
                    <!-- Amateurs Slip Past Professionals at MGA/PGA Cup Matches -->
                    {{ tournament.title }}
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
                    :to="`/tournaments/${tournament.id}`"
                    >Read more</v-btn
                  >
                </div>
              </v-overlay>
            </div>
          </v-card>
        </v-hover>
      </v-window-item>
    </v-window>
  </div>
</template>
<script setup>
import tournament1 from "../assets/tournament.jpg";

import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";

import { ref, onMounted } from "vue";

import { db } from "@/firebase/fb";

const length = ref(3);
const window = ref(0);
const overlay = ref(false);
let loading = ref(true);

//reads
const tournaments = ref([]);

onMounted(async () => {
  const tournamentsRef = collection(db, "tournaments");
  const q = query(tournamentsRef, limit(3));
  const querySnapshot = await getDocs(q);

  let gettournaments = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const tournament = {
      id: doc.id,
      title: doc.data().title,
    };

    gettournaments.push(tournament);
  });
  tournaments.value = gettournaments;
});
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 4rem;
  padding-inline: 10vw;
}

.banner-card {
  width: 50rem;
}
.banner-text {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 4rem;
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
    justify-content: center;
    flex-direction: column;
    width: 50%;
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
