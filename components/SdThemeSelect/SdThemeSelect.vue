<template>
  <div class="SdThemeSelector">
    <button class="Button SdThemeSelector-button" :disabled="activeTheme === 'light'" type="button" @click="toggleTheme('light')">
      Light
    </button>
    <button class="Button SdThemeSelector-button" :disabled="activeTheme === 'dark'" type="button" @click="toggleTheme('dark')">
      Dark
    </button>
  </div>
</template>
<script>
export default {
  name: 'SdThemeSelector',
  data() {
    return {
      activeTheme: 'light',
    };
  },

  methods: {
    toggleTheme(theme) {
      if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
      } else {
        document.documentElement.setAttribute('theme', 'dark');
      }

      this.activeTheme = theme;
    },
  },
};
</script>
<style scoped>
.SdThemeSelector {
  /* BLOCK */
  display: flex;
}

.SdThemeSelector-button:first-child {
  border-right: none;
}

.isPressed {
  background-color: var(--color--grey100);
  user-focus: none;
}
</style>
