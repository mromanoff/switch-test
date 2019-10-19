<template>
  <div class="Container">
    <main class="Container-main">
      <div class="Container-cardList">
        <sd-card v-for="benefit in benefits" :key="benefit.title" :title="benefit.title" :description="benefit.description" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SdCard from '~/components/SdCard';
export default {
  components: {
    SdCard,
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
.Container {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: var(--space--xLarge) var(--space--large);
  min-height: 100vh;
  /*background: var(--color--green500);*/
}

.Container-main {
  flex: 1 1 100%;
  width: 100%;
}

@media (--viewport--medium) {
  .Container {
    /*background: var(--color--blue500);*/
  }

  .Container-main {
    overflow: hidden;
    margin-bottom: 0;
    display: block;
  }
}

@media (--viewport--large-up) {
  .Container {
    flex-direction: row;
    width: var(--breakpoint--large);
    padding: 0;
    /*background: var(--color--orange500);*/
  }
}

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

@media (--viewport--large) {
  .Container-cardList {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: var(--space--large);
  }
}
</style>
