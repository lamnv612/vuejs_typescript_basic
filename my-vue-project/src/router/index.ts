import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import { VIEW_CONFIG } from "@/constants";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/HomeScreen.vue"),
    props: true,
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "home",
        component: () => import("@/views/HomeScreen.vue"),
        name: "home",
        props: true,
      },
    ]
  },
  {
    ...VIEW_CONFIG.TOGGLE_BUTTON,
    component: () => import("@/views/ToggleScreen.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
