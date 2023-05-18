<template>
  <div class="footer">
    <div class="footer-text">
      <div class="about-column">
        <h4 class="logo">Ethiopian Golf Association</h4>
        <v-divider
          class="border-opacity-100"
          vertical
          color="success"
        ></v-divider>
        <p>
          Founded in 1901 with seven golf clubs, the Minnesota Golf
          Association’s membership has grown to 400 courses and nearly 83,000
          individual members throughout the state. Our mission is to uphold and
          promote the game of golf and its values for all golfers in Minnesota.
        </p>
      </div>
      <div class="columns">
        <h5 class="nav-header">All links</h5>
        <v-list class="nav-lists">
          <v-list-item>
            <router-link :to="{ path: '/tournaments' }"
              >Tournaments</router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link :to="{ path: '/articles' }">Articles</router-link>
          </v-list-item>
          <v-list-item>
            <router-link :to="{ path: '/about' }">About Us</router-link>
          </v-list-item>
          <v-list-item>
            <router-link :to="{ path: '/contact' }">Contact Us</router-link>
          </v-list-item>
        </v-list>
      </div>
      <!-- <div class="columns">
        <h5 class="nav-header">Get Involved</h5>
        <v-list class="nav-lists">
          <v-list-item>
            <router-link :to="{ path: '/tournaments' }"
              >Tournaments</router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link :to="{ path: '/articles' }">News</router-link>
          </v-list-item>
        </v-list>
      </div> -->
      <!-- <div class="columns">
          <h5 class="logo"></h5>
          <v-list-item>
            <router-link :to="{ path: '/tournaments' }">Tournaments</router-link>
          </v-list-item>
          <v-list-item>
            <router-link :to="{ path: '/news' }">News</router-link>
          </v-list-item>
        </div> -->
    </div>
  </div>

  <v-footer class="last-footer">
    <div class="bg-green d-flex w-100 align-center pa-4">
      <strong
        >Copyright © {{ new Date().getFullYear() }} The Ethiopian Golf
        Association. All Rights Reserved.</strong
      >

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-white text-center w-100">
      Designed by — <strong>Liyu Tech</strong>
    </div>
  </v-footer>
</template>

<style scoped>
.logo {
  font-size: 20px;
}
.nav-header {
  color: #cccccc;
  font-size: larger;
  font-weight: bold;
}
.nav-lists {
  font-size: large;
  background: none;
}
.nav-lists a {
  text-decoration: none;
  color: #cccccc;
}
.nav-lists a :hover {
  text-decoration: dashed;
}
.footer {
  background-color: #216d1d;
}

.footer-text {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  padding: 2rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
}
.about-column {
  color: #cccccc;
  max-width: 27rem;
}

.last-footer {
  display: flex;
  flex-direction: column;
  padding: 0;
}

@media only screen and (max-width: 425px) {
  .about-column {
    display: none;
  }
  .footer-text {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
}
</style>
