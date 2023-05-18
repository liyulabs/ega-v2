<template>
  <div class="content">
    <!-- <TournamentsBanner /> -->
    <HomeBanner />
    <!-- <ArticleCard /> -->
    <RecentArticles />

    <BannerAd />
    <Youth />
    <Partners />
    <Join />
  </div>
</template>

<script>
import TournamentsBanner from "@/components/TournamentsBanner.vue";
import HomeBanner from "@/components/HomeBanner.vue";
import RecentArticles from "@/components/RecentArticles.vue";
import BannerAd from "@/components/Ad.vue";
import Partners from "@/components/Partners.vue";
import Youth from "../components/Youth.vue";
import { defineComponent } from "vue";
import Join from "../components/Join.vue";
import ArticleCard from "../components/ArticleCard.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    TournamentsBanner,
    HomeBanner,
    RecentArticles,
    BannerAd,
    Partners,
    Youth,
    Join,
    ArticleCard,
  },
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
}
</style>
