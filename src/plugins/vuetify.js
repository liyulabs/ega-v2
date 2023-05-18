import "@fortawesome/fontawesome-free/css/all.css";
// Vuetify
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { createVuetify } from "vuetify";

import { aliases, fa } from "vuetify/iconsets/fa";

export default createVuetify({
  components,
  directives,

  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
