<template>
  <div class="sidebar">
    <LogoComponent>
      <p class="logo-text">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
    </LogoComponent>

    <nav class="main-navbar">
      <RouterLink to="/" class="nav-link nav-home">
        <HomeIcon class="nav-link-icon" />
        <span class="nav-link-text">Home</span>
      </RouterLink>
      <RouterLink to="/cards" class="nav-link nav-cards">
        <CardIcon class="nav-link-icon" />
        <span class="nav-link-text">Cards</span>
      </RouterLink>
      <RouterLink to="/payments" class="nav-link nav-payments">
        <PaymentIcon class="nav-link-icon" />
        <span class="nav-link-text">Payments</span>
      </RouterLink>
      <RouterLink to="/credits" class="nav-link nav-credits">
        <CreditIcon class="nav-link-icon" />
        <span class="nav-link-text">Credit</span>
      </RouterLink>
      <RouterLink to="/settings" class="nav-link nav-settings">
        <AccountIcon class="nav-link-icon" />
        <span class="nav-link-text">Settings</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import AccountIcon from "@/components/icons/IconAccount.vue";
import HomeIcon from "@/components/icons/IconHome.vue";
import CardIcon from "@/components/icons/IconCard.vue";
import PaymentIcon from "@/components/icons/IconPayment.vue";
import CreditIcon from "@/components/icons/IconCredit.vue";
import LogoComponent from "@/components/LogoComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    AccountIcon,
    HomeIcon,
    CardIcon,
    PaymentIcon,
    CreditIcon,
    LogoComponent,
  },
};
</script>
