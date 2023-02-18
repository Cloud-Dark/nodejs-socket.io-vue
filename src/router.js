import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tugas",
    name: "tugas",
    component: () => import("./components/TugasList")
  },
  {
    path: "/tugas/:id",
    name: "tutorial-details",
    component: () => import("./components/Tugas")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTugas")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;