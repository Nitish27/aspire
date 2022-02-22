import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/payments",
      name: "Payment",
      component: () => import("../views/PaymentView.vue"),
    },
    {
      path: "/cards",
      name: "cards",
      component: () => import("../views/CardsView.vue"),
    },
    {
      path: "/credits",
      name: "credit",
      component: () => import("../views/CreditView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingView.vue"),
    },
  ],
});

export default router;
