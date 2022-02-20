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
        <button class="card-tab-btn active" @click="tabClick('my-cards')">
          My debit cards
        </button>
        <button class="card-tab-btn" @click="tabClick('company-cards')">
          All company card
        </button>
      </div>
      <div class=""></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import AddIcon from "@/components/icons/IconAdd.vue";

export default {
  methods: {
    tabClick(val) {
      console.log(val);
    },
  },
  components: {
    AddIcon,
  },
};
</script>

<style scoped>
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
  font-size: 14px;
  color: rgb(34 34 34 / 30%);
  background: transparent;
  border: 0;
  margin-right: 30px;
  padding: 0 0 5px 0;
}

.card-tab-btn.active {
  border-bottom: 2px solid #23cefd;
  color: #222222;
}
</style>
