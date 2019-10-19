<template functional>
  <div class="SdContainer" v-bind="data.attrs">
    <div class="SdContainer-main">
      <slot name="main" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTop: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.SdContainer {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--space--medium);
  width: 100%;
}

.SdContainer-main {
  flex: 1 1 100%;
  width: 100%;
}

@media (--viewport--medium) {
  .SdContainer-main {
    margin-bottom: 0;
    display: block;
  }
}

@media (--viewport--large-up) {
  .SdContainer {
    flex-direction: row;
    max-width: var(--breakpoint--xLarge);
  }
}
</style>
