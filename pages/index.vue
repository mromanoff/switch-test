<template>
  <div class="Container">
    <main class="Container-main">
      <h1>Title H1</h1>
      <h2>Title H2</h2>
      <Icon size="small" name="car" />
      <Button type="submit" variation="primary" size="large">Submit Button</Button>
    </main>
    <aside class="Container-aside">
      aside
    </aside>
  </div>
</template>

<script>
import Button from '~/components/Button';
import Icon from '~/components/Icon';
export default {
  components: {
    Button,
    Icon,
  },
};
</script>

<style>
.Container {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--space--medium);
  min-height: 100vh;
  /*background: var(--color--green500);*/
}

.Container-main {
  flex: 1 1 100%;
  width: 100%;
}

.Container-aside {
  max-width: var(--aside--width);
  flex: 0 0 var(--aside--width);
  margin-bottom: var(--space--large);
}

.Container-aside:empty {
  display: none;
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
</style>
