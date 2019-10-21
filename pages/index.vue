<template>
  <sd-container class="HomePage">
    <template slot="main">
      <h1>Switch Code Challenge</h1>

      <h2>&copy;oded by Michael Romanoff on 10/20/2019</h2>

      <div class="Module">
        <p>This is Universal App. First load is Server Side Render and after is Client Side render.</p>
        <ul class="List List--disc">
          <li>Use Routing with page transition</li>
          <li>Use Vuex Store Module (Benefits)</li>
          <li>Use Axios to fetch data</li>
          <li>
            Use PostCSS based on <a href="https://en.bem.info/methodology/css/" target="_blank" title="BEM">BEM</a> and
            <a href="https://suitcss.github.io/" target="_blank" title="SUITCSS">SUITCSS</a> methodology
          </li>
          <li>Use CSS Flex box and CSS Grid properties</li>
          <li>Use Prittier and ESlint. Added Husky pre-commit hooks</li>
          <li>Use Jest for unit test, snapshots and code coverage</li>
          <li>Implement Search filter</li>
          <li>Use common, functional and template less components</li>
        </ul>
      </div>

      <p>NOTE: all magic happening on Benefits page. Other page are place holders</p>

      <div class="Module">
        <p>On Benefits Page:</p>
        <ul class="List List--disc">
          <li>Theme Selector (currently is not persistent, state could be saved to cookie or localstorage)</li>
          <li>Search Filter Benefits. On select route to stand along page.</li>
        </ul>
      </div>
    </template>
  </sd-container>
</template>

<script>
import SdContainer from '~/components/SdContainer';

export default {
  components: {
    SdContainer,
  },
};
</script>

<style scoped>
.HomePage {
  /* BLOCK */
}

.HomePage-themeSelect {
  display: flex;
  margin-bottom: var(--space--medium);
  align-items: center;
  justify-content: flex-end;

  & > span {
    margin-right: var(--space--medium);
    font-size: var(--font-size--xSmall);
  }
}

.Module {
  margin-bottom: var(--space--xxLarge);
}
</style>
