<template>
  <sd-container class="HomePage">
    <template slot="main">
      <h1>S-Company Code Challenge</h1>

      <h2>&copy;oded by Michael Romanoff on 10/20/2019</h2>

      <div class="Module">
        <p>This is Universal App. First load is SSR (Server Side render) and after Client Side.</p>
        <ul class="List List--disc">
          <li>Site has 3 breakpoints. Small 375, Medium 768 - 1199, Large 1200 +</li>
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

      <p>NOTE: all magic happening on Benefits page. Other pages are placeholders</p>

      <div class="Module">
        <p>On Benefits Page:</p>
        <ul class="List List--disc">
          <li>User can change color Theme. Theme Selector (currently is not persistent, user selected state should be saved with cookie or localstorage)</li>
          <li>User can Search and Filter Benefits within Search Box. On select user will be taking to benefit page.</li>
          <li>User can Drag and Sort benefit cards.</li>
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
