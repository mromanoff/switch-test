<template>
  <footer class="SdFooter">
    <div class="SdFooter-container">
      &copy;ode by Michael Romanoff 10/20/2019
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
  font-size: var(--font-size--xSmall);
}

.SdFooter-container {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  max-width: var(--breakpoint--xLarge);
  grid-template-rows: var(--Footer--mobile-height);
  padding: 0 var(--space--medium);
}
</style>
