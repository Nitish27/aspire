<template>
  <div class="card-action-list-item">
    <button-component
      class="card-action-list-item-btn"
      @btnClickHandler="clickCardAction('freeze')"
    >
      <img src="@/assets/images/freeze-card.svg" alt="freeze card" />
      <p class="card-action-label">Freeze Card</p>
    </button-component>
  </div>
  <div class="card-action-list-item">
    <button-component
      class="card-action-list-item-btn"
      @btnClickHandler="clickCardAction('set-spend-limit')"
    >
      <img src="@/assets/images/set-spend-limit.svg" alt="set spend limit" />
      <p class="card-action-label">Set spend limit</p>
    </button-component>
  </div>
  <div class="card-action-list-item">
    <button-component
      class="card-action-list-item-btn"
      @btnClickHandler="clickCardAction('add-to-gpay')"
    >
      <img src="@/assets/images/gpay.svg" alt="add to gpay" />
      <p class="card-action-label">Add to Gpay</p>
    </button-component>
  </div>
  <div class="card-action-list-item">
    <button-component
      class="card-action-list-item-btn"
      @btnClickHandler="clickCardAction('replace-card')"
    >
      <img src="@/assets/images/replace-card.svg" alt="replace card" />
      <p class="card-action-label">Replace card</p>
    </button-component>
  </div>
  <div class="card-action-list-item">
    <button-component
      class="card-action-list-item-btn"
      @btnClickHandler="clickCardAction('cancel-card')"
    >
      <img src="@/assets/images/deactivate-card.svg" alt="cancel card" />
      <p class="card-action-label">Cancel card</p>
    </button-component>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  methods: {
    clickCardAction(action) {
      alert(`${action} clicked`);
    },
  },
  components: {
    ButtonComponent,
  },
};
</script>
