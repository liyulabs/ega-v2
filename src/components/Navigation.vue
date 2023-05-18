<template>
  <div class="nav">
    <div class="main-nav">
      <div class="nav-links">
        <div class="nav-title">
          <router-link :to="{ path: '/' }"
            >Ethiopian Golf Association</router-link
          >
        </div>
        <v-spacer></v-spacer>
        <div class="links">
          <router-link :to="{ path: '/tournaments' }">Tournaments</router-link>
          <router-link :to="{ path: '/articles' }">Articles</router-link>
          <router-link :to="{ path: '/about' }">About Us</router-link>
          <router-link :to="{ path: '/contact' }">Contact Us</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="nav-menu">
    <!-- Menu container  -->
    <div class="small-bar">
      <div class="logo">
        <v-img src="../assets/logo.jpg" width="100px" height="70px"></v-img>
      </div>
      <v-icon icon="mdi-vuetify" @click="showMenu()" color="white"></v-icon>
      <v-icon icon="fas fa-bars" color="white"></v-icon>
    </div>

    <!-- Hamburger icon with click method -->
    <div
      class="nav-content"
      :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
    >
      <ul class="nav-items">
        <v-list-item>
          <router-link :to="{ path: '/tournaments' }">Tournaments</router-link>
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
.nav-menu {
  display: none;
}
.top-links {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
}
.nav {
  width: 100vw;
  position: fixed;
  z-index: 3;
}

.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-block: 0.8rem;
  padding-inline: 10vw;
  background-color: #216d1d;
}

.nav-links a {
  color: aliceblue;
  font-size: 1rem;
  text-decoration: none;
}

.nav-links a:hover {
  color: #18bed6;
  background-color: #216d1d;
}

.links {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
}

.links a {
  font-weight: 700;
}

@media only screen and (max-width: 425px) {
  .nav {
    width: 100%;
    margin: 0;
  }

  .logo {
    padding: 5px;
  }

  .small-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10rem;
    padding-inline: 1rem;
  }
  .main-nav {
    display: none;
  }
  .nav-content {
    height: 50px;
  }
  .nav-menu {
    display: block;
    position: fixed;
    padding: 0;
    margin: 0;
    z-index: 3;
    width: 100%;

    background-color: #216d1d;
  }
  .open-menu {
    opacity: 1;
    margin: 0;
    height: 200px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    margin-top: -30px;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items a {
    color: white;
    margin: 1rem;
    padding: 2rem;
    text-decoration: none;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>
