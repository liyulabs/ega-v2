<template>
  <section class="table-section">
    <div class="table-card">
      <v-card class="card-content">
        <h2 title="">Contact Us</h2>

        <h4>
          Have a question about the Ethiopian Golf Association, your EGA
          membership or the contents of this website? Let us help.
        </h4>

        <v-card-actions>
          <v-btn variant="flat" color="green" router :to="`/contact`">
            Contact Us
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
.table-section {
  padding-block: 10vh;
  padding-inline: 10vw;
}
.table-card {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.card-content {
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
}

@media only screen and (max-width: 425px) {
  .card-content {
    min-width: 17rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 1rem;
  }
  .title {
    font-size: 1rem;
    padding: 0.5rem;
    font-weight: bold;
  }
}
</style>
