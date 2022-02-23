import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/DashboardView.vue";
import CardView from "../views/CardsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Cards View",
      component: CardView,
    },
    {
      path: "/payments",
      name: "Payments",
      component: () => import("../views/PaymentView.vue"),
    },
    {
      path: "/cards",
      name: "Cards View",
      component: () => CardView,
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
