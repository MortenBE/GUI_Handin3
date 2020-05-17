import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//import Jobs from "../views/Jobs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/manager",
    name: "Manager",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Manager.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

