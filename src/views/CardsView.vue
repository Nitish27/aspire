<template>
  <div class="cards">
    <div class="card-header">
      <div class="card-balance">
        <p class="card-balance-text">Available balance</p>
        <div class="card-balance-amount mt5">
          <span class="card-currency-tag mr10">$</span>
          <h1>3,000</h1>
        </div>
      </div>
      <div class="card-add">
        <button-component
          class="card-add-btn"
          @btnClickHandler="clickAddNewCard"
        >
          <AddIcon class="add-icon mr10" /> New Card
        </button-component>
      </div>
    </div>

    <div class="card-content-container mt30">
      <div class="card-tab-btns">
        <button
          class="card-tab-btn mr30 pb5 pl0 pr0"
          :class="{ active: activeTab === 'my-cards' }"
          @click="tabClick('my-cards')"
        >
          My debit cards
        </button>
        <button
          class="card-tab-btn mr30 pb5 pl0 pr0"
          :class="{ active: activeTab === 'company-cards' }"
          @click="tabClick('company-cards')"
        >
          All company card
        </button>
      </div>
      <div class="my-cards-tab" v-if="activeTab == 'my-cards'">
        <div class="card-tabs-content pt25 pb25 pr35 pl35 mt20 mb20">
          <div class="flex">
            <div class="card-list mr30">
              <card-component :card="card" />

              <div class="card-action p25 mt30 mb30">
                <div class="card-action-list">
                  <card-action-component />
                </div>
              </div>
            </div>
            <div class="card-detail-transanction ml20">
              <div class="card-details">
                <Accordion
                  title="Card Details"
                  icon="card-details"
                  isExpand="false"
                >
                  <p>Card Details</p>
                </Accordion>
                <Accordion
                  title="Recent Transactions"
                  icon="recent-transactions"
                  isExpand="true"
                >
                  <recent-transaction-component />
                  <div class="view-all-card-transaction p10 bg-light-green">
                    <button-component
                      class="view-all-card-transaction-btn text-green"
                      @btnClickHandler="clickAllCardTransactions"
                    >
                      View all card transactions
                    </button-component>
                  </div>
                </Accordion>
              </div>
              <div class="card-recent-details"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="company-cards-tab" v-if="activeTab == 'company-cards'">
        <div class="card-tabs-content">
          <p>Company Cards</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddIcon from "@/components/icons/IconAdd.vue";
import Accordion from "@/components/AccordionComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import RecentTransactionComponent from "@/components/RecentTransactionComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import CardActionComponent from "@/components/CardActionComponent.vue";

export default {
  data() {
    return {
      activeTab: "my-cards",
      card: {
        username: "Mark Henry",
        number: "2563 7962 8724 6258",
        cvv: "765",
        validTill: "12/20",
      },
    };
  },
  methods: {
    tabClick(val) {
      this.activeTab = val;
    },
    clickAddNewCard() {
      alert("Add New card Clicked");
    },
    clickAllCardTransactions() {
      alert("Show All Card Transactions");
    },
  },
  components: {
    AddIcon,
    Accordion,
    ButtonComponent,
    RecentTransactionComponent,
    CardComponent,
    CardActionComponent,
  },
};
</script>
