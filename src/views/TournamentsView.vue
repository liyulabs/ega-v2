<template>
  <TournamentBanner />
  <!-- <TournamentsBanner /> -->
  <Tournaments />
  <tournamentTable />
  <FAQ />
  <ContactUs />
</template>

<script>
import TournamentsBanner from "../components/TournamentsBanner.vue";
import Tournaments from "@/components/Tournaments.vue";
import TournamentBanner from "@/components/TournamentBanner.vue";
import TournamentTable from "../components/TournamentsTable.vue";
import ContactUs from "@/components/ContactUs.vue";
import { defineComponent } from "vue";
import FAQ from "@/components/FAQ.vue";

export default defineComponent({
  name: "TournamentsView",

  components: {
    TournamentBanner,
    TournamentsBanner,
    Tournaments,
    TournamentTable,
    ContactUs,
    FAQ,
  },
});
</script>

<style scoped></style>
