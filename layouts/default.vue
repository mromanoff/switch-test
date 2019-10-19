<template>
  <div class="App">
    <svg-sprite />
    <sd-header class="App-header" />
    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import SvgSprite from '~/components/SvgSprite';
import SdHeader from '~/components/SdHeader';

export default {
  components: {
    SdHeader,
    SvgSprite,
  },
};
</script>

<style scoped>
.App {
  /*BLOCK*/
}

.App-header {
  margin-bottom: var(--space--xLarge);
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
