<template>
  <div class="App">
    <svg-sprite />
    <div class="App-header">
      <sd-header />
    </div>
    <transition name="fade">
      <nuxt />
    </transition>
    <div class="App-footer">
      <sd-footer />
    </div>
  </div>
</template>

<script>
import SvgSprite from '~/components/SvgSprite';
import SdHeader from '~/components/SdHeader';
import SdFooter from '~/components/SdFooter';

export default {
  components: {
    SdHeader,
    SdFooter,
    SvgSprite,
  },
};
</script>

<style scoped>
.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.App-header {
  margin-bottom: var(--space--xLarge);
}

.App-footer {
  margin-top: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
