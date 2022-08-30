import { createWebHistory, createRouter } from "vue-router";
import ViewAvisos from "@/views/ViewAvisos.vue";
import ViewHome from "@/views/ViewHome.vue";
import ViewTurmas from "@/views/ViewTurmas.vue";

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
  },
  {
    path: "/turmas",
    name: "Turmas",
    component: ViewTurmas,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
