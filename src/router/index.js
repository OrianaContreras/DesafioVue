import Vue from "vue";
import VueRouter from "vue-router";
import DetailsMovies from "../views/DetailsMovies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/detailsmovie",
    name: "DetailsMovies",
    component: DetailsMovies,
  },
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
