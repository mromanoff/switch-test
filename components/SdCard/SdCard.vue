<template>
  <div class="SdCard">
    <div class="SdCard-header">
      {{ title }}
    </div>
    <div class="SdCard-content">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SdCard',

  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.SdCard {
  background-color: var(--color--white);
  border: 1px solid var(--color--grey400);
  box-shadow: 1px 1px 10px rgba(160, 106, 160, 0.2);
}

.SdCard-header {
  background-color: var(--color--red700);
  color: var(--color--white);
  padding: var(--space--small) var(--space--medium);
  font-weight: 600;
}

.SdCard-content {
  padding: var(--space--large) var(--space--medium);
}
</style>
