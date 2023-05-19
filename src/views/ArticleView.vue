<template>
  <div>
    <section class="article-section">
      <div class="article-card">
        <v-card class="card-content" elevation="5">
          <h2>News</h2>

          <v-sheet class="sheet">
            <h3>{{ article.headline }}</h3>
            <h5>Date: {{ article.date }}</h5>
          </v-sheet>

          <div class="details">
            <p class="text-h7">
              {{ article.details }}
            </p>
          </div>
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

const article = ref([]);

onMounted(async () => {
  const querySnapshot = doc(db, "articles", props.id);
  const docSnap = await getDoc(querySnapshot);

  if (docSnap.exists()) {
    console.log(docSnap.data());
  } else {
    console.log("no document");
  }

  article.value = docSnap.data();
});
</script>

<style scoped>
.article-section {
  padding-block: 10vh;
  padding-inline: 10vw;
  border: 1px solid red;
}
.article-card {
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
.details {
  font: 400;
  padding: 2rem;
}
</style>
