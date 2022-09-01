import { createWebHistory, createRouter } from "vue-router";
import ViewAvisos from "@/views/ViewAvisos.vue";
import ViewHome from "@/views/ViewHome.vue";
import ViewTurmas from "@/views/ViewTurmas.vue";
import ViewAlunos from "@/views/ViewAlunos.vue";
import ViewAlunoDetail from "@/views/ViewAlunoDetail.vue";
import ViewTurmaDetail from "@/views/ViewTurmaDetail.vue";

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
    path: "/turmas/:id",
    name: "TurmasDetail",
    component: ViewTurmaDetail,
    meta: {
      hideNavbar: true,
      showGoBackHeader: true,
    }
  },
  {
    path: "/alunos",
    name: "Alunos",
    component: ViewAlunos,
  },
  {
    path: "/alunos/:id",
    name: "AlunosDetail",
    component: ViewAlunoDetail,
    meta: {
      hideNavbar: true,
      showGoBackHeader: true,
    }
  },
  {
    path: "/",
    name: "Home",
    component: ViewHome,
    meta: {
      hideNavbar: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
