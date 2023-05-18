<template>
  <section class="table-section">
    <v-card-title class="title">Tournaments Calender</v-card-title>

    <div class="table-card">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tournament in tournaments" :key="tournament">
            <router-link :to="`/tournaments/${tournament.id}`"
              ><td class="name">{{ tournament.title }}</td></router-link
            >
            <td>{{ tournament.startdate }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </section>
</template>
<script setup>
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
.table-section {
  background-color: #216d1d;
  padding-block: 10vh;
  padding-inline: 10vw;
}
.table-card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.name {
  padding-inline: 1rem;
  color: black;
}
</style>
