import Vue from "vue";
import Router from "vue-router";
import Results from "./views/Results.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/results",
      name: "results",
      component: Results
    }
  ]
});
