<template>
  <div>
    <div>
      <nav id="menu" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <span @click="sendTo('main')" class="navbar-brand mb-0 h1" id="brand">
            Sheeping
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <span
                  @click="sendTo('main')"
                  :class="{ active: active('main') }"
                  class="nav-link"
                  >Home</span
                >
              </li>
              <li class="nav-item">
                <span
                  @click="sendTo('profile')"
                  :class="{ active: active('profile') }"
                  class="nav-link"
                  >Profile</span
                >
              </li>
              <li class="nav-item">
                <span @click="signOut" class="nav-link">Sair</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import FButils from "@/mixins/firebaseUtils.js";

export default {
  name: "Default",
  mixins: [FButils],
  methods: {
    sendTo(route) {
      if (this.$route.name != route) {
        this.$router.push({ name: route });
      }
    },
    active(route) {
      if (this.$route.name == route) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
#brand:hover {
  cursor: pointer;
  color: lightslategray;
}

#navbarNav ul li:hover {
  cursor: pointer;
}
</style>
