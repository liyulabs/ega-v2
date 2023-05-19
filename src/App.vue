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

  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
  <Footer />
</template>

<style lang="css">
.slid-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slid-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
