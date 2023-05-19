<template>
  <div>
    <section class="tournament-section">
      <div class="tournament-card">
        <v-card class="card-content">
          <h2>Tournament-information</h2>

          <v-sheet class="sheet">
            <h3>{{ tournament.title }}</h3>
            <h5>Date: {{ tournament.startdate }} - {{ tournament.enddate }}</h5>
          </v-sheet>

          <p>
            {{ tournament.details }}
          </p>
        </v-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase/fb";
import { collection, doc, getDoc } from "firebase/firestore";

const props = defineProps(["id"]);
console.log(props.id);

const tournament = ref([]);

onMounted(async () => {
  const querySnapshot = doc(db, "tournaments", props.id);
  const docSnap = await getDoc(querySnapshot);

  if (docSnap.exists()) {
    console.log(docSnap.data());
  } else {
    console.log("no document");
  }

  tournament.value = docSnap.data();
});
</script>

<style scoped>
.tournament-section {
  padding-block: 10vh;
  padding-inline: 10vw;
  border: 1px solid red;
}
.tournament-card {
  margin-block: 50px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.card-content {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
}

.sheet {
  background-color: #216d1d;
  color: white;
  border: 1px solid grey;
  padding: 1rem;
}
</style>
