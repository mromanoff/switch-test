<template>
  <sd-container class="BenefitsPage">
    <template slot="main">
      <h1 class="PageTitle">Benefits</h1>

      <div class="BenefitsPage-toolbox">
        <div class="Benefits-themeSelect">
          <span>Change Theme Color</span>
          <sd-theme-select />
        </div>

        <sd-search v-model="selectedBenefit" class="Benefits-searchFilter" :options="benefitsSearchOptions" />
      </div>

      <draggable v-model="benefits" class="Benefits-cardList">
        <sd-card v-for="benefit in benefits" :key="benefit.title">
          <template slot="title">
            {{ benefit.title }}
            <svg class="contact-list-handle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
              />
            </svg>
          </template>
          <template>
            {{ benefit.description }}
          </template>
        </sd-card>
      </draggable>
    </template>
  </sd-container>
</template>

<script>
import { mapGetters } from 'vuex';
import draggable from 'vuedraggable';
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
    draggable,
  },

  data() {
    return {
      selectedBenefit: null,
    };
  },

  computed: {
    benefits: {
      get() {
        return this.$store.state.benefits.benefits;
      },
      set(value) {
        this.$store.commit('benefits/UPDATE_BENEFITS', value);
      },
    },

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

  async fetch({ store }) {
    await store.dispatch('benefits/fetchBenefits');
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

.Benefits-cardList {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--space--large);
}

@media (--viewport--medium) {
  .Benefits-cardList {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: var(--space--large);
  }
}

@media (--viewport--large-up) {
  .Benefits-cardList {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: var(--space--large);
  }
}
</style>
