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

<style>
@import "@/assets/base.css";

.wrapper {
  display: flex;
  min-height: 100%;
}

.sidebar {
  background: #0c365a;
  width: 340px;
  padding: 45px;
  height: 100%;
  position: fixed;
}

.logo-text {
  color: rgb(255 255 255 / 30%);
  font-size: 15px;
}

.main-navbar {
  margin: 80px 0;
}

.nav-link {
  display: block;
  color: #fff;
  background-repeat: no-repeat;
  background-position: left;
  font-size: 16px;
  margin: 40px 0;
  text-decoration: none;
  outline: none;
}

.nav-link-icon {
  vertical-align: middle;
}

.nav-link-text {
  padding-left: 16px;
}

.nav-link:hover,
.nav-link:focus,
.nav-link:active,
.router-link-active {
  color: #01d167;
}

.nav-link:hover .b {
  fill: #01d167;
}

.router-link-active {
  font-weight: 600;
}

/* .nav-home {
  background-image: url("@/assets/images/home.svg");
}

.nav-cards {
  background-image: url("@/assets/images/debit-card/card.svg");
}

.nav-payments {
  background-image: url("@/assets/images/payments.svg");
}

.nav-credits {
  background-image: url("@/assets/images/credit.svg");
}

.nav-settings {
  background-image: url("@/assets/images/account.svg");
} */

.view-container {
  position: relative;
  left: 340px;
  width: calc(100% - 340px);
  padding: 60px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
