<template>
  <section class="table-section">
    <v-card class="table-card" elevation="5">
      <v-card-title class="title"> Upcoming Tournaments </v-card-title>
      <v-row class="cards ma-3">
        <!-- tournaments cards and link -->

        <div v-for="tournament in tournaments" :key="tournament" elevation="5">
          <v-card class="t-card" variant="flat" elevation="7">
            <div class="card-contents">
              <div class="card-img">
                <v-img :src="dummy"></v-img>
              </div>
              <div class="right">
                <v-card-item>
                  <div class="card-date">{{ tournament.startdate }}</div>
                  <router-link :to="`/tournaments/${tournament.id}`">
                    <div class="card-title">
                      {{ tournament.title }}
                    </div></router-link
                  >
                </v-card-item>
              </div>
            </div>
          </v-card>
        </div>

        <!-- <v-card>
        <div class="card-contents">
          <v-avatar
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Date</div>
              <div class="text-h6 mb-1">Headline</div>
              <div class="text-caption">
                Greyhound divisely hello coldly fonwderfully
              </div>
            </div>
          </v-card-item>
        </div>
      </v-card> -->
      </v-row>
    </v-card>

    <!-- sorting features -->
    <!-- <div>
      <v-text-field
        class="search-input"
        v-model="searchedTournament"
        label="Search"
      >
      </v-text-field>
    </div> -->
  </section>
</template>

<script setup>
import dummy from "../assets/logo.jpg";
import { ref, onMounted } from "vue";
import { db } from "@/firebase/fb";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

//read
const tournaments = ref([]);
let searchedTournament = ref("");

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "tournaments"));
  let gettournaments = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const tournament = {
      id: doc.id,
      startdate: doc.data().startdate,
      enddate: doc.data().enddate,
      title: doc.data().title,
      details: doc.data().details.slice(0, 10),
    };

    gettournaments.push(tournament);
  });

  tournaments.value = gettournaments;
});

// function filteredTournaments() {
//   return gettournaments.filter((tournament) =>
//     tournament.title
//       .toLowerCase()
//       .includes(searchedTournament.value.toLowerCase())
//   );
// }
</script>

<style scoped>
.search-input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  /* background: white url("assets/search-icon.svg") no-repeat 15px center; */
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.table-section {
  padding-block: 10vh;
  padding-inline: 10vw;
}
.table-card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.cards {
  display: flex;
  width: 70vw;
  flex-direction: column;
  padding-block: 1rem;
  row-gap: 4rem;
}

.t-card {
  width: 70vw;
  height: 30vh;
}
.title {
  font-size: 1.5rem;
  padding-block: 2rem;
}
.card-contents {
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
}

.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 1rem;
  padding: 1rem;
  width: 7rem;
}

.card-date {
  display: flex;
  justify-content: start;
  align-content: start;
  font-size: smaller;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bolder;
  width: 20rem;
}

@media only screen and (max-width: 425px) {
  .tournaments-section {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .tournaments-card {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 15rem;
    padding: 0;
    margin: 0;
  }
  .cards {
    width: 12rem;
  }

  .title {
    font-size: 1rem;
    padding: 0.5rem;
    font-weight: bold;
  }
  .card-contents {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .card-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 1rem;
    padding: 1rem;
    width: 7rem;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bolder;
    width: 12rem;
  }
}
</style>
