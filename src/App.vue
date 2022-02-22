<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="logo">
        <img alt="aspire logo" src="@/assets/images/aspire-logo.svg" />
        <p class="logo-text">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>

      <nav class="main-navbar">
        <RouterLink to="/" class="nav-link nav-home">
          <HomeIcon class="nav-link-icon" />
          <span class="nav-link-text">Home</span>
        </RouterLink>
        <RouterLink to="/cards" class="nav-link nav-cards">
          <CardIcon class="nav-link-icon" />
          <span class="nav-link-text">Cards</span>
        </RouterLink>
        <RouterLink to="/about" class="nav-link nav-payments">
          <PaymentIcon class="nav-link-icon" />
          <span class="nav-link-text">Payments</span>
        </RouterLink>
        <RouterLink to="/about" class="nav-link nav-credits">
          <CreditIcon class="nav-link-icon" />
          <span class="nav-link-text">Credit</span>
        </RouterLink>
        <RouterLink to="/about" class="nav-link nav-settings">
          <AccountIcon class="nav-link-icon" />
          <span class="nav-link-text">Settings</span>
        </RouterLink>
      </nav>
    </div>
    <div class="view-container">
      <RouterView />
    </div>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
import AccountIcon from "@/components/icons/IconAccount.vue";
import HomeIcon from "@/components/icons/IconHome.vue";
import CardIcon from "@/components/icons/IconCard.vue";
import PaymentIcon from "@/components/icons/IconPayment.vue";
import CreditIcon from "@/components/icons/IconCredit.vue";
export default {
  components: {
    AccountIcon,
    HomeIcon,
    CardIcon,
    PaymentIcon,
    CreditIcon,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>

<style>
@import "@/assets/base.css";
</style>
