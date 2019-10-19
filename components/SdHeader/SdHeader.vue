<template>
  <header class="Header">
    <div class="Header-container">
      <div class="Header-content">
        <nuxt-link class="Header-logo" label="Home" to="/">
          <sd-logo />
        </nuxt-link>
      </div>
      <div class="Header-content">
        <sd-menu />
      </div>
    </div>
  </header>
</template>

<script>
import SdLogo from './SdLogo';
import SdMenu from './SdMenu';
export default {
  name: 'Header',
  components: {
    SdLogo,
    SdMenu,
  },
};
</script>

<style scoped>
.Header {
  color: var(--Header-color);
  background-color: var(--Header-backgroundColor);
  height: var(--Header--mobile-height);
  z-index: var(--z-index--high);
}

.Header-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;

  /*& .Header-content:nth-of-type(1) {*/
  /*  float: none;*/
  /*}*/

  /*& .Header-content:nth-of-type(2) {*/
  /*  margin-left: 0;*/
  /*  margin-right: 0;*/
  /*}*/

  /*& .Header-content:nth-of-type(3) {*/
  /*  float: none;*/
  /*}*/
}

.Header-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Header-logo {
  margin: var(--space--xSmall) auto;
  display: inline-block;
}

@media (--viewport--medium-up) {
  .Header {
    min-height: var(--Header--desktop-height);
  }
}
</style>
