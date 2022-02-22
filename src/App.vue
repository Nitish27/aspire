<template>
  <div class="wrapper">
    <sidebar-view />
    <div class="view-container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import SidebarView from "./views/SidebarView.vue";
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
// import AccountIcon from "@/components/icons/IconAccount.vue";
// import HomeIcon from "@/components/icons/IconHome.vue";
// import CardIcon from "@/components/icons/IconCard.vue";
// import PaymentIcon from "@/components/icons/IconPayment.vue";
// import CreditIcon from "@/components/icons/IconCredit.vue";
export default {
  components: {
    SidebarView,
  },
};
</script>

SidebarView
<style lang="scss">
@import "./assets/scss/app.scss";
</style>
