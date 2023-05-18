<script>
import HomeBanner from "./components/HomeBanner.vue";
import Navigation from "./components/Navigation.vue";
import RecentArticles from "./components/RecentArticles.vue";
import Ad from "./components/Ad.vue";
import Partners from "./components/Partners.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<template>
  <Navigation />
  <router-view />
  <Footer />
</template>
