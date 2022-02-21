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
        <button class="card-add-btn">
          <AddIcon class="add-icon" />New Card
        </button>
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
import Accordion from "@/components/TheAccordion.vue";

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
  },
  components: {
    AddIcon,
    VisaIcon,
    Accordion,
  },
};
</script>

<style scoped>
.card-list {
  margin-right: 30px;
  width: 50%;
}

.card-detail-transanction {
  margin-left: 20px;
  width: 50%;
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.card-balance-text {
  font-size: 14px;
}

.card-currency-tag {
  align-self: center;
  background: #01d167;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  padding: 4px 13px;
  margin-right: 10px;
}

.card-balance-amount {
  display: flex;
  margin-top: 5px;
}

.card-add {
  align-self: center;
}

.card-add-btn {
  background: #325baf;
  color: #fff;
  padding: 8px 12px;
  border: 0;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}

.add-icon {
  vertical-align: bottom;
  margin-right: 8px;
}

.card-balance-amount h1 {
  font-size: 26px;
}

.card-content-container {
  margin-top: 30px;
}

.card-tab-btn {
  background: transparent;
  border: 0;
  color: rgb(34 34 34 / 30%);
  cursor: pointer;
  font-size: 14px;
  margin-right: 30px;
  padding: 0 0 5px 0;
}

.card-tab-btn.active {
  border-bottom: 2px solid #23cefd;
  color: #222222;
}

.card-tabs-content {
  padding: 25px 35px;
  box-shadow: 0px 2px 12px 0px #00000014;
  border: 1px solid #fcfcfc;
  margin: 20px 0;
}

.flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.card {
  background: #01d167;
  border-radius: 8px;
  width: 100%;
  padding: 25px;
  margin: 10px 0;
}

.card-front {
  flex-direction: column;
}

.card-front-company {
  width: 83px;
  align-self: flex-end;
}

.card-front-username {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.58px;
  margin: 12px 0;
}

.card-front-number {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 5px;
}

.text-security-disc {
  -webkit-text-security: disc;
  -moz-text-security: disc;
  font-size: 24px;
  margin-right: 10px;
}

.card-expire {
  margin: 10px 15px 10px 0;
}

.card-cvv {
  margin: 10px 0;
}

.card-cvv-label,
.card-expire-label {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  margin-right: 5px;
  letter-spacing: 0.3px;
}

.card-expire-date {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.card-cvv-number {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: initial;
}

.card-type {
  align-self: flex-end;
}

.show-card-number {
  font-size: 12px;
  color: #01d167;
  text-align: right;
  margin: 10px 0;
}

.card-action {
  background: #edf3ff;
  border-radius: 8px;
  padding: 25px;
  margin: 50px 0;
}

.card-action-list {
  display: flex;
  justify-content: space-between;
}

.card-action-list-item {
  text-align: center;
}

.card-action-label {
  font-size: 13px;
  color: #0c365a;
}

.bg-light-blue {
  background: #009dff1a;
}

.bg-light-green {
  background: #00d6b51a;
}

.bg-light-red {
  background: #f251951a;
}

.recent-transactions {
  padding: 20px;
}

.recent-transaction-item {
  border-bottom: 1px solid #f0f0f0;
  padding: 20px 0;
}

.recent-transaction-item-icon {
  width: 48px;
  border-radius: 100%;
  margin-right: 10px;
  text-align: center;
  align-self: flex-start;
  height: 48px;
  padding: 10px;
}

.recent-transaction-item-icon > img {
  vertical-align: middle;
}

.recent-transaction-item-content {
  width: calc(100% - 48px);
  padding: 5px;
}

.recent-transaction-item-title {
  font-size: 14px;
  font-weight: 500;
  color: #222;
}

.recent-transaction-item-date {
  font-size: 13px;
  color: #aaa;
}

.recent-transaction-item-refund-text {
  font-size: 12px;
  font-weight: 500;
  color: #325baf;
}

.text-green {
  color: #01d167;
}

.recent-transaction-item-amount-value {
  font-size: 14px;
  font-weight: 600;
}

.recent-transaction-item-refund {
  margin-top: 10px;
}

.recent-transaction-item-refund-icon {
  background: #325baf;
  padding: 1px 5px;
  border-radius: 7px;
}

.show-card-number-icon {
  vertical-align: middle;
}

.view-all-card-transaction {
  text-align: center;
  padding: 10px;
}

.view-all-card-transaction-btn {
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  border: 0;
  cursor: pointer;
}
</style>
