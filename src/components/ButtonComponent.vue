<template>
  <button class="card-add-btn" @click="btnClickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnClickHandler() {
      this.$emit("btnClickHandler");
    },
  },
};
</script>
