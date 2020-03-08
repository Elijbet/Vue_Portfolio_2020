import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/components/Landing.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Portfolio from "@/components/Portfolio/Portfolio.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Landing },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/portfolio", name: "portfolio", component: Portfolio }
];

const router = new VueRouter({
  routes
});

export default router;
