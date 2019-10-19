<template>
  <nav class="SdMenu">
    <ul class="SdMenu-links">
      <li class="SdMenu-link">
        <nuxt-link to="/">Benefits</nuxt-link>
      </li>
      <li class="SdMenu-link">
        <nuxt-link to="/safety">Safety</nuxt-link>
      </li>
      <li class="SdMenu-link">
        <nuxt-link to="/policies">Policies</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SdMenu',
};
</script>

<style scoped>
.SdMenu {
}

.SdMenu-links {
  list-style: none;
  padding: 0;
  font-size: var(--font-size--medium);
  margin-bottom: auto;
  display: flex;
  justify-content: center;
}

.SdMenu-link {
  & a:any-link {
    margin-top: -2px;
    text-decoration: none;
    color: var(--color--white);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 42px;
    padding-left: var(--space--medium);
    padding-right: var(--space--medium);
    border-bottom: 4px solid transparent;
  }

  & a:hover {
    border-bottom: 4px solid var(--color--red700);
  }

  & a.nuxt-link-exact-active {
    border-bottom: 4px solid var(--color--red700);
  }
}

@media (--viewport--medium-up) {
  .SdMenu-link {
    & a:any-link {
      height: var(--Header--tablet-height);
    }
  }
}
</style>
