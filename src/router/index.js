import { createWebHistory, createRouter } from "vue-router";
import ViewAvisos from "@/views/ViewAvisos.vue";
import ViewHome from "@/views/ViewHome.vue";

const routes = [
  {
    path: "/avisos",
    name: "Avisos",
    component: ViewAvisos,
  },
  {
    path: "/",
    name: "Home",
    component: ViewHome,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
