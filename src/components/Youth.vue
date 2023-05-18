<template>
  <section class="youth-section">
    <div class="youth-card">
      <v-card class="card-content">
        <div class="card-img">
          <v-img :src="youth"></v-img>
        </div>

        <div class="card-text">
          <h3 class="title">Youth Program</h3>
          <p class="card-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            quis eum id sapiente ab perspiciatis molestiae eos cupiditate aut
            iure
            <v-spacer class="py-3"></v-spacer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            quis earum ab illo rerum porro sunt magni provident. Porro quaerat
            vitae exercitationem
          </p>
          <v-spacer class="py-3"></v-spacer>
          <v-card-actions>
            <v-btn color="white" variant="tonal">Register</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </div>
  </section>
</template>
<script setup>
import youth from "../assets/1.jpg";
</script>
<style scoped>
.youth-section {
  padding-inline: 5vw;
}
.youth-card {
}
.card-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  padding: 2rem;
}
.card-img {
  display: flex;
}
.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  color: white;
}
.card-text {
  margin-top: 1rem;
  padding: 2rem;
  background-color: #216d1d;
  font-weight: 100;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-paragraph {
  padding-top: 1rem;
  color: white;
}
</style>
