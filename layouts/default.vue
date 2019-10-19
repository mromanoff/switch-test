<template>
  <div>
    <sd-header />
    <svg-sprite />
    <nuxt />
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

<style></style>
