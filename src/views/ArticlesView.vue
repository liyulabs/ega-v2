<template>
  <div>
    <NewsBanner />
    <News />

    <Donate />
  </div>
</template>

<script>
import NewsBanner from "@/components/NewsBanner.vue";
import News from "@/components/News.vue";
import { defineComponent } from "vue";
import Donate from "@/components/Donate.vue";

export default defineComponent({
  name: "Articles",

  components: {
    NewsBanner,
    News,
    Donate,
  },
});
</script>

<style scoped></style>
