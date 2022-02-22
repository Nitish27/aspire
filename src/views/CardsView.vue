<template>
  <div class="cards">
    <div class="card-header">
      <div class="card-balance">
        <p class="card-balance-text">Available balance</p>
        <div class="card-balance-amount">
          <span class="card-currency-tag">$</span>
          <h1>3,000</h1>
        </div>
      </div>
      <div class="card-add">
        <button-component @btnClickHandler="clickAddNewCard">
          <AddIcon class="add-icon" /> New Card
        </button-component>
      </div>
    </div>

    <div class="card-content-container">
      <div class="card-tab-btns">
        <button
          class="card-tab-btn"
          :class="{ active: activeTab === 'my-cards' }"
          @click="tabClick('my-cards')"
        >
          My debit cards
        </button>
        <button
          class="card-tab-btn"
          :class="{ active: activeTab === 'company-cards' }"
          @click="tabClick('company-cards')"
        >
          All company card
        </button>
      </div>
      <div class="my-cards-tab" v-if="activeTab == 'my-cards'">
        <div class="card-tabs-content">
          <div class="flex">
            <div class="card-list">
              <p class="show-card-number">
                <img
                  class="show-card-number-icon"
                  src="@/assets/images/remove_red_eye.svg"
                  alt=""
                />
                Show card number
              </p>
              <div class="card">
                <div class="card-front card-part flex">
                  <img
                    class="card-front-company"
                    src="@/assets/images/aspire-logo-1.svg"
                  />
                  <h2 class="card-front-username">Mark Henry</h2>
                  <p class="card-front-number">
                    <span class="text-security-disc">1234</span>
                    <span class="text-security-disc">4532</span>
                    <span class="text-security-disc">6753</span> 6258
                  </p>
                  <div class="flex">
                    <div class="card-expire flex">
                      <span class="card-expire-label">Thru:</span>
                      <p class="card-expire-date">12/20</p>
                    </div>
                    <div class="card-cvv flex">
                      <span class="card-cvv-label">CVV:</span>
                      <p class="card-cvv-number">***</p>
                    </div>
                  </div>

                  <div class="card-type">
                    <VisaIcon />
                  </div>
                </div>
              </div>

              <div class="card-action">
                <div class="card-action-list">
                  <div class="card-action-list-item">
                    <img
                      src="@/assets/images/freeze-card.svg"
                      alt="freeze card"
                    />
                    <p class="card-action-label">Freeze</p>
                    <p class="card-action-label">Card</p>
                  </div>
                  <div class="card-action-list-item">
                    <img
                      src="@/assets/images/set-spend-limit.svg"
                      alt="freeze card"
                    />
                    <p class="card-action-label">Set spend</p>
                    <p class="card-action-label">limit</p>
                  </div>
                  <div class="card-action-list-item">
                    <img src="@/assets/images/gpay.svg" alt="freeze card" />
                    <p class="card-action-label">Add</p>
                    <p class="card-action-label">Gpay</p>
                  </div>
                  <div class="card-action-list-item">
                    <img
                      src="@/assets/images/replace-card.svg"
                      alt="freeze card"
                    />
                    <p class="card-action-label">Replace</p>
                    <p class="card-action-label">card</p>
                  </div>
                  <div class="card-action-list-item">
                    <img
                      src="@/assets/images/deactivate-card.svg"
                      alt="freeze card"
                    />
                    <p class="card-action-label">Cancel</p>
                    <p class="card-action-label">card</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-detail-transanction">
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
                  <div class="recent-transactions">
                    <div class="recent-transaction-item flex">
                      <div class="recent-transaction-item-icon bg-light-blue">
                        <img
                          src="@/assets/images/file-storage.svg"
                          alt="file-storage"
                        />
                      </div>
                      <div class="recent-transaction-item-content">
                        <div class="flex space-between">
                          <div>
                            <p class="recent-transaction-item-title">Hamleys</p>
                            <p class="recent-transaction-item-date">
                              20 May 2020
                            </p>
                          </div>
                          <div class="recent-transaction-item-amount">
                            <p
                              class="recent-transaction-item-amount-value text-green"
                            >
                              +$ 150
                            </p>
                          </div>
                        </div>
                        <div class="recent-transaction-item-refund">
                          <p class="recent-transaction-item-refund-text">
                            <span class="recent-transaction-item-refund-icon">
                              <img
                                src="@/assets/images/business-and-finance.svg"
                                alt="business-and-finance"
                              />
                            </span>
                            Refund on debit card
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="recent-transaction-item flex">
                      <div class="recent-transaction-item-icon bg-light-green">
                        <img
                          src="@/assets/images/flights.svg"
                          alt="file-storage"
                        />
                      </div>
                      <div class="recent-transaction-item-content">
                        <div class="flex space-between">
                          <div>
                            <p class="recent-transaction-item-title">Hamleys</p>
                            <p class="recent-transaction-item-date">
                              20 May 2020
                            </p>
                          </div>
                          <div class="recent-transaction-item-amount">
                            <p class="recent-transaction-item-amount-value">
                              +$ 150
                            </p>
                          </div>
                        </div>
                        <div class="recent-transaction-item-refund">
                          <p class="recent-transaction-item-refund-text">
                            <span class="recent-transaction-item-refund-icon">
                              <img
                                src="@/assets/images/business-and-finance.svg"
                                alt="business-and-finance"
                              />
                            </span>
                            Refund on debit card
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="recent-transaction-item flex">
                      <div class="recent-transaction-item-icon bg-light-red">
                        <img
                          src="@/assets/images/megaphone.svg"
                          alt="file-storage"
                        />
                      </div>
                      <div class="recent-transaction-item-content">
                        <div class="flex space-between">
                          <div>
                            <p class="recent-transaction-item-title">Hamleys</p>
                            <p class="recent-transaction-item-date">
                              20 May 2020
                            </p>
                          </div>
                          <div class="recent-transaction-item-amount">
                            <p class="recent-transaction-item-amount-value">
                              +$ 150
                            </p>
                          </div>
                        </div>
                        <div class="recent-transaction-item-refund">
                          <p class="recent-transaction-item-refund-text">
                            <span class="recent-transaction-item-refund-icon">
                              <img
                                src="@/assets/images/business-and-finance.svg"
                                alt="business-and-finance"
                              />
                            </span>
                            Refund on debit card
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="recent-transaction-item flex">
                      <div class="recent-transaction-item-icon bg-light-blue">
                        <img
                          src="@/assets/images/file-storage.svg"
                          alt="file-storage"
                        />
                      </div>
                      <div class="recent-transaction-item-content">
                        <div class="flex space-between">
                          <div>
                            <p class="recent-transaction-item-title">Hamleys</p>
                            <p class="recent-transaction-item-date">
                              20 May 2020
                            </p>
                          </div>
                          <div class="recent-transaction-item-amount">
                            <p class="recent-transaction-item-amount-value">
                              +$ 150
                            </p>
                          </div>
                        </div>
                        <div class="recent-transaction-item-refund">
                          <p class="recent-transaction-item-refund-text">
                            <span class="recent-transaction-item-refund-icon">
                              <img
                                src="@/assets/images/business-and-finance.svg"
                                alt="business-and-finance"
                              />
                            </span>
                            Refund on debit card
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="view-all-card-transaction bg-light-green">
                    <button class="view-all-card-transaction-btn text-green">
                      View all card transactions
                    </button>
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
import VisaIcon from "@/components/icons/IconVisa.vue";
import Accordion from "@/components/AccordionComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  data() {
    return {
      activeTab: "my-cards",
    };
  },
  methods: {
    tabClick(val) {
      this.activeTab = val;
    },
    clickAddNewCard() {
      alert("Add New card Clicked");
    },
  },
  components: {
    AddIcon,
    VisaIcon,
    Accordion,
    ButtonComponent,
  },
};
</script>
