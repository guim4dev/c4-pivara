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
    path: "/turmas",
    name: "Turmas",
    component: ViewTurmas,
  },
  {
    path: "/",
    name: "Home",
    component: ViewHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
