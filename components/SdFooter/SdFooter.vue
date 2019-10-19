<template>
  <footer class="SdFooter">
    <div class="SdFooter-container">
      &copy; 2019 Michael Romanoff
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SdFooter',
};
</script>

<style scoped>
.SdFooter {
  background-color: var(--Footer-backgroundColor);
  color: var(--Footer-color);
  height: var(--Footer--mobile-height);
  margin-top: var(--space--xxLarge);
}

.SdFooter-container {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
}

@media (--viewport--medium-up) {
  .SdFooter-container {
    max-width: var(--breakpoint--xLarge);
    grid-template-rows: var(--Footer--mobile-height);
    align-items: center;
    justify-content: center;
  }
}
</style>
