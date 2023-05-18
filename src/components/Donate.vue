<template>
  <section class="donate-section">
    <div class="donate-card">
      <v-card class="card-content" variant="outlined">
        <div class="logo">
          <v-img :src="logo" class="logo-img"></v-img>
        </div>
        <div class="right">
          <h2>Donate to EGA</h2>

          <h4>
            The Ethiopian Golf Association's mission is to provide a vision for
            the future of the game by supporting programs and initiatives that
            enhance the golfer experience, drive participation among youth,
            beginners and disabled golfers, endeavor to make the game more
            sustainable, and foster educational and experiential opportunities
            for those who represent the game’s future in Ethiopia.
          </h4>

          <v-card-actions>
            <v-btn variant="flat" color="green" router :to="`/contact`">
              Contact Us
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </div>
  </section>
</template>
<script setup>
import logo from "../assets/logo.jpg";
</script>
<style scoped>
.donate-section {
  padding-block: 10vh;
  padding-inline: 10vw;
}

.donate-card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.card-content {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  padding: 1rem;
  align-items: center;
}
.logo-img {
  width: 150px;
  height: 200px;
}
.right {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

h2,
h4 {
  color: black;
}

@media only screen and (max-width: 425px) {
  .donate-card {
    width: 100%;
    margin: 0;
    padding: 1rem;
    margin-block: 1rem;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: 45rem;
    row-gap: 2rem;
    padding: 1rem;
  }
}
</style>
