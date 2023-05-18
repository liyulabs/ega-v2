<template>
  <!-- Home cards 1 -->
  <section class="articles-section">
    <v-card-title class="card-title">Check Out the latest news</v-card-title>
    <!-- <h3 class="title"></h3> -->
    <div class="home-cards">
      <div v-for="article in articles" :key="article.id">
        <div class="home-card">
          <img :src="putt" aspect-ratio="16/9" alt="" />
          <h3>
            <router-link :to="`/articles/${article.id}`">{{
              article.headline
            }}</router-link>
          </h3>
          <span class="py-2"
            ><v-card-subtitle class="date">
              {{ article.date }}
            </v-card-subtitle></span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.articles-section {
}
/* Home cards */
.home-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-inline: 10vw;
  grid-gap: 20px;
  margin-bottom: 40px;
  border: 0 3px 10px rgb(0 0 0 / 0.2);
}
.home-card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.home-cards img {
  width: 100%;
  height: 147px;
  margin-bottom: 20px;
}
.home-cards h3 {
  padding-inline: 1rem;
}
.home-cards h3 a {
  letter-spacing: -0.0371em;
  line-height: 1.3em;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
}

.home-cards h3 a:hover {
  color: #216d1d;
  background-color: white;
}
.date {
  color: black;
  font-size: 1rem;
  font-weight: bold;
}
@media (max-width: 700px) {
  .home-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .home-cards {
    grid-template-columns: 1fr;
  }
}
</style>
<script setup>
import putt from "../assets/1.jpg";
import { ref, onMounted } from "vue";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { db } from "@/firebase/fb";

// read

const articles = ref([]);

onMounted(async () => {
  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, limit(3));
  const querySnapshot = await getDocs(q);

  let getarticles = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const article = {
      id: doc.id,
      date: doc.data().date,
      headline: doc.data().headline,
      details: doc.data().details.slice(0, 20),
    };

    getarticles.push(article);
  });
  articles.value = getarticles;
});
</script>
