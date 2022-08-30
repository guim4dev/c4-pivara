import { createWebHistory, createRouter } from "vue-router";
import ViewAvisos from "@/views/ViewAvisos.vue";

const routes = [
  {
    path: "/avisos",
    name: "Avisos",
    component: ViewAvisos,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
