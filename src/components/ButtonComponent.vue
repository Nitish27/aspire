<template>
  <button @click="btnClickHandler">
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
