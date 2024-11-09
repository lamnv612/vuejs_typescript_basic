import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import { VIEW_CONFIG } from "@/constants";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/components/views/HomeScreen.vue"),
    props: true,
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "home",
        component: () => import("@/components/views/HomeScreen.vue"),
        name: "home",
        props: true,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
