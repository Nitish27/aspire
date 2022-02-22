<template>
  <div class="sidebar">
    <LogoComponent>
      <p class="logo-text">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
    </LogoComponent>

    <nav class="main-navbar mt80 mb80">
      <RouterLink to="/" class="nav-link nav-home mt40 mb40">
        <HomeIcon class="nav-link-icon" />
        <span class="nav-link-text pl20">Home</span>
      </RouterLink>
      <RouterLink to="/cards" class="nav-link nav-cards mt40 mb40">
        <CardIcon class="nav-link-icon" />
        <span class="nav-link-text pl20">Cards</span>
      </RouterLink>
      <RouterLink to="/payments" class="nav-link nav-payments mt40 mb40">
        <PaymentIcon class="nav-link-icon" />
        <span class="nav-link-text pl20">Payments</span>
      </RouterLink>
      <RouterLink to="/credits" class="nav-link nav-credits mt40 mb40">
        <CreditIcon class="nav-link-icon" />
        <span class="nav-link-text pl20">Credit</span>
      </RouterLink>
      <RouterLink to="/settings" class="nav-link nav-settings mt40 mb40">
        <AccountIcon class="nav-link-icon" />
        <span class="nav-link-text pl20">Settings</span>
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
