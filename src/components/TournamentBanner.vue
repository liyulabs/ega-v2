<template>
  <!-- Carbon -->
  <section class="carbon">
    <div class="content">
      <h2 class="headline">Tournaments</h2>
      <p class="paragraph">
        To uphold and maintain the Rules of Golf and the Rules, Definitions and
        Interpretations of R&A Rules Limited, whose jurisdiction as the Ruling
        Authority in Golf is recognised by the Association.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Carbon */
.carbon {
  width: 100%;
  height: 70vh;
  background: url("https://i.ibb.co/72cgtsz/carbon.jpg") no-repeat center
    center/cover;
  opacity: 0.9;
}

.carbon .content {
  width: 55%;
  padding-inline: 2rem;
  padding-block: 5rem;
}

.headline {
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: none;
}
.paragraph {
  margin-top: 1rem;
  color: white;
  font-weight: 500;
}
.carbon .content h2,
p {
}
@media (max-width: 700px) {
  .carbon .content {
    width: 85%;
  }
}
</style>
