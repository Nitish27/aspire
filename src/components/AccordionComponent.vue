<template>
  <div class="column is-half">
    <div class="accordion" :class="{ 'not-expanded': !this.expanded }">
      <div class="accordion-header" @click="toggleCardState">
        <p class="accordion-header-title">
          <img
            v-if="icon == 'card-details'"
            src="@/assets/images/card-details.svg"
            alt="card-details"
            class="accordion-header-title-icon"
          />
          <img
            v-if="icon == 'recent-transactions'"
            src="@/assets/images/recent-transactions.svg"
            alt="recent-transactions"
            class="accordion-header-title-icon"
          />
          {{ title }}
        </p>
        <a class="accordion-header-icon">
          <span class="icon" v-if="expanded">
            <img src="@/assets/images/up-arrow.svg" alt="down-arrow" />
          </span>
          <span class="icon" v-else>
            <img src="@/assets/images/down-arrow.svg" alt="down-arrow" />
          </span>
        </a>
      </div>

      <div class="accordion-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "isExpand"],
  data() {
    return {
      expanded: false,
      titleIcon: "",
    };
  },
  methods: {
    toggleCardState() {
      this.expanded = !this.expanded;
    },
  },
  created() {
    if (this.isExpand == "true") {
      this.expanded = true;
    }
  },
};
</script>

<style scoped>
.accordion {
  margin-bottom: 25px;
  width: 100%;
}

.accordion.not-expanded .accordion-header {
  border-radius: 8px;
}

.accordion .accordion-header {
  cursor: pointer;
  background: #f5f9ff;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 0px 8px 0px #0000000a;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.accordion-header-title-icon {
  vertical-align: bottom;
  margin-right: 10px;
}

.accordion .icon {
  transform: rotate(180deg);
  transition: transform 250ms ease-out;
}

.accordion .accordion-content {
  transition: all 250ms linear;
  border: 1px solid #f0f0f0;
  border-top: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.accordion.not-expanded .accordion-header .icon {
  transform: rotate(0deg);
}

.accordion.not-expanded .accordion-content {
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  height: 0;
  padding: 0;
}
</style>
