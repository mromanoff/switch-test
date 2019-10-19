<template>
  <sd-container>
    <template slot="main">
      <sd-search :benefits="benefits" />
      <sd-theme-select />
      <div class="Container-cardList">
        <sd-card v-for="benefit in benefits" :key="benefit.title">
          <template slot="title">
            {{ benefit.title }}
          </template>
          <template>
            {{ benefit.description }}
          </template>
        </sd-card>
      </div>
    </template>
  </sd-container>
</template>

<script>
import { mapState } from 'vuex';
import SdContainer from '~/components/SdContainer';
import SdCard from '~/components/SdCard';
import SdThemeSelect from '~/components/SdThemeSelect';
import SdSearch from '~/components/SdSearch';

export default {
  components: {
    SdContainer,
    SdCard,
    SdThemeSelect,
    SdSearch,
  },

  computed: {
    ...mapState({
      benefits: (state) => state.benefits.benefits,
    }),
  },

  async fetch({ store }) {
    await store.dispatch('benefits/getBenefits');
  },
};
</script>

<style scoped>
.Container-cardList {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--space--large);
}

@media (--viewport--medium) {
  .Container-cardList {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: var(--space--large);
  }
}

@media (--viewport--large-up) {
  .Container-cardList {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: var(--space--large);
  }
}
</style>
