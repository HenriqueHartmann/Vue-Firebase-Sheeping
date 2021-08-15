import Vue from "vue";
import VueRouter from "vue-router";

import Default from "@/layouts/Default.vue";
import Blank from "@/layouts/Blank.vue";
import MainPage from "@/pages/MainPage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

import { auth } from "@/plugins/firebase.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      component: Default,
      children: [
        {
          path: "",
          name: "main",
          component: MainPage,
          meta: { requiresAuth: true },
        },
        {
          path: "profile",
          name: "profile",
          component: ProfilePage,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/",
      component: Blank,
      children: [
        {
          path: "auth",
          name: "auth",
          component: AuthPage,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged((user) => {
    const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
    if (requiresAuth && !user) {
      next("/auth");
    } else {
      next();
    }
  });
});

export default router;
