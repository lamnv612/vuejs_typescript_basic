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
  {
    ...VIEW_CONFIG.RANDOM_IMG,
    component: () => import("@/views/GenRandomImageScreen.vue"),
  },
  {
    ...VIEW_CONFIG.SHOPPING,
    component: () => import("@/views/ShoppingScreen.vue"),
  },
  {
    ...VIEW_CONFIG.SEND_EMAIL,
    component: () => import("@/views/SendEmailScreen.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
