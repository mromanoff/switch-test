<template>
  <sd-container class="BenefitsPage">
    <template slot="main">
      <div class="BenefitsPage-toolbox">
        <div class="Benefits-themeSelect">
          <span>Change Theme Color</span>
          <sd-theme-select />
        </div>

        <sd-search v-model="selectedBenefit" class="Benefits-searchFilter" :options="benefitsSearchOptions" />
      </div>
      <h1 class="PageTitle">{{ benefit.title }}</h1>
      <p>{{ benefit.description }}</p>
    </template>
  </sd-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SdContainer from '~/components/SdContainer';
import SdThemeSelect from '~/components/SdThemeSelect';
import SdSearch from '~/components/SdSearch';

export default {
  components: {
    SdContainer,
    SdThemeSelect,
    SdSearch,
  },

  data() {
    return {
      selectedBenefit: null,
    };
  },

  computed: {
    ...mapState({
      benefit: (state) => state.benefits.benefit,
      benefits: (state) => state.benefits.benefits,
    }),

    ...mapGetters({
      benefitsSearchOptions: 'benefits/benefitsSearchOptions',
    }),
  },

  watch: {
    selectedBenefit: {
      handler(title) {
        const benefit = this.benefits.find((benefit) => benefit.title === title);
        this.$router.push(`/benefits/${benefit.slug}`);
      },
    },
  },

  async fetch({ store, route }) {
    const slug = route.params.benefit;
    // TODO: validate benefit param.

    // Fetch all benefits just to render filter search box
    // could be done cleaner
    await Promise.all([store.dispatch('benefits/fetchBenefits'), store.dispatch('benefits/fetchBenefit', { slug })]);
  },
};
</script>

<style scoped>
.BenefitsPage {
  /* BLOCK */
}

.BenefitsPage-toolbox {
  display: grid;
  grid-template-rows: auto;
  grid-column-gap: var(--space--large);
  grid-template-areas:
    'theme'
    'benefit';
  margin-bottom: var(--space--xLarge);

  @media (--viewport--medium) {
    grid-template-areas: 'benefit theme';
    grid-column-gap: var(--space--medium);
  }

  @media (--viewport--large-up) {
    grid-template-areas: 'benefit . . theme';
    grid-column-gap: var(--space--medium);
  }
}

.Benefits-themeSelect {
  grid-area: theme;
  display: flex;
  margin-bottom: var(--space--medium);
  align-items: center;
  justify-content: flex-end;

  & > span {
    margin-right: var(--space--medium);
    font-size: var(--font-size--xSmall);
  }
}

.Benefits-searchFilter {
  grid-area: benefit;
  margin-bottom: var(--space--medium);
}
</style>
