<template>
  <div class="SdCard">
    <h4 class="SdCard-header">
      <slot name="title"></slot>
    </h4>
    <p class="SdCard-content">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SdCard',
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
  margin: 0;
}

.SdCard-content {
  padding: var(--space--large) var(--space--medium);
}
</style>
