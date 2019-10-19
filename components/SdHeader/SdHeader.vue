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
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(var(--Header--mobile-height) / 2) auto;
}

.Header-content {
  display: flex;
  justify-content: center;
}

.Header-logo {
  margin-top: var(--space--small);
  & >>> svg {
    width: 355px;
    height: 25px;
    display: block;
    margin: 0 auto;
  }
}

@media (--viewport--medium-up) {
  .Header {
    height: var(--Header--tablet-height);
  }

  .Header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: var(--Header--tablet-height);
    align-items: stretch;
  }

  .Header-content:nth-of-type(1) {
    justify-content: flex-start;
    align-items: center;
  }

  .Header-content:nth-of-type(2) {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .Header-logo {
    margin: 0 0 0 var(--space--medium);
    & >>> svg {
      width: 307px;
      height: 22px;
    }
  }
}

@media (--viewport--large-up) {
  .Header {
    height: var(--Header--desktop-height);
  }

  .Header-container {
    max-width: var(--breakpoint--xLarge);
  }
  .Header-logo {
    & >>> svg {
      width: 354px;
      height: 26px;
    }
  }
}
</style>
