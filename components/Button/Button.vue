<template functional>
  <component
    :is="props.nuxt && props.href ? 'nuxt-link' : props.href ? 'a' : 'button'"
    class="Button"
    :class="{
      [data.staticClass]: data.staticClass,
      'Button--disabled': props.disabled,
      'Button--block': props.block,
      [`Button--${props.variation}`]: props.variation,
      [`Button--${props.size}`]: props.size,
    }"
    :href="props.href"
    :to="props.nuxt && props.href"
    :type="!props.href ? props.type : undefined"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <span v-if="slots()['icon-left']" class="Button-iconLeft">
      <slot name="icon-left" />
    </span>

    <span class="Button-label">
      <slot />
    </span>

    <span v-if="slots()['icon-right']" class="Button-iconRight">
      <slot name="icon-right" />
    </span>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    /**
     * Button will expand to 100% width of container
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will become a clickable hyperlink
     */
    href: {
      type: [String, Object],
      default: null,
    },
    /**
     * Button will become a nuxt-link using href as "to"
     */
    nuxt: {
      type: Boolean,
      default: false,
    },
    /**
     * Button will become either "small" "medium" "large"
     */
    size: {
      type: String,
      default: 'medium',
      validator: (value) => {
        return value.match(/(small|medium|large)/);
      },
    },
    /**
     * Button will have type attribute of either "button", "submit", or "reset"
     */
    type: {
      type: String,
      default: 'button',
      validator: (value) => {
        return value.match(/(button|submit|reset)/);
      },
    },
    /**
     * Button will become become either "primary" or "secondary"
     */
    variation: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return value.match(/(primary|secondary|link|text)/);
      },
    },
  },
  computed: {
    attrs() {
      const { nuxt, href } = this;
      const attrs = {};

      if (!nuxt && href) attrs.href = this.href;
      if (nuxt && href) attrs.type = this.type;

      return attrs;
    },
  },
};
</script>

<style>
a.Button {
  display: inline-flex;
}

a.Button:hover {
  text-decoration: none !important;
}

.Button {
  min-width: calc(var(--space--xLarge) * 1.5);
  display: flex;
  align-items: center;
  color: var(--Button-color);
  user-select: none;
  border: var(--Button-borderWidth) solid var(--Button-borderColor);
  letter-spacing: var(--Button-letterSpacing);
  text-decoration: none;
  border-radius: var(--Button-borderRadius);
  font-size: var(--font-size--small);
  font-weight: var(--font-weight--medium);
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 1;
  -webkit-appearance: none;
  padding: 0 var(--space--medium);
}

.Button:focus {
  outline: 0;
}

/* ELEMENTS */

.Button-iconLeft {
  margin-right: var(--space--small);
}

.Button-iconRight {
  margin-left: var(--space--small);
}

.Button--disabled {
  pointer-events: none;
  opacity: var(--Button--disabled-opacity);
}

/*
   * Modifier: primary buttons
  */
.Button--primary {
  background-color: var(--Button--primary-backgroundColor);
  border: var(--Button--primary-borderWidth) solid var(--Button--primary-borderColor);
  color: var(--Button--primary-color) !important;
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.Button--primary:hover {
  border-color: var(--Button--primary-backgroundColor-hover);
  background-color: var(--Button--primary-backgroundColor-hover);
}

.Button--primary:focus,
.Button--primary:active {
  border-color: var(--Button--primary-backgroundColor-active);
  background-color: var(--Button--primary-backgroundColor-active);
}

.Button--disabled.Button--primary {
  pointer-events: none;
  color: var(--color--grey500) !important;
  opacity: 1;
}

/**
  * Modifier: secondary buttons
  */
.Button--secondary {
  background: var(--Button--secondary-backgroundColor);
  border: var(--Button--secondary-borderWidth) solid var(--Button--secondary-borderColor);
  color: var(--Button--secondary-color);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.Button--secondary:hover {
  background-color: var(--color--blue100);
}

.Button--secondary:focus,
.Button--secondary:active {
  color: var(--color--grey700);
  background-color: var(--color--grey50);
  border-color: var(--color--grey600);
}

/**
  * Modifier: text buttons
  */
.Button--text {
  background: var(--Button--text-backgroundColor);
  border: var(--Button--text-borderWidth) solid var(--Button--text-borderColor);
  color: var(--Button--text-color);
  transition: background-color 50ms ease-out 50ms, border 50ms ease-out 50ms;
}

.Button--text:hover {
  background-color: var(--color--blue100);
}

.Button--text:focus,
.Button--text:active {
  color: var(--color--grey700);
}

/**
  * Modifier: link buttons
  */

.Button--link {
  display: inline-block;
  border: none;
  background: transparent;
  color: var(--link-color);
  font-size: inherit;
  text-transform: initial;
  min-width: initial;
  min-height: initial;
  padding: 0;
  margin: 0;
}

.Button--link > svg {
  display: inline-block;
  fill: currentColor;
}

.Button--link:hover {
  text-decoration: underline;
}

/**
  * Modifier: small buttons
  */
.Button--small {
  font-size: var(--font-size--xSmall);
  height: var(--space--large);
  padding: 0 var(--space--small);
}

/**
  * Modifier: medium buttons
  */
.Button--medium {
  height: var(--space--xLarge);
}

/**
  * Modifier: large buttons
  */
.Button--large {
  font-size: var(--font-size--medium);
  font-weight: var(--font-weight--bold);
  padding: 0 var(--space--large);
  height: calc(var(--space--xLarge) + var(--space--small));
}

.Button--block {
  width: 100%;
  max-width: 100%;
  justify-content: center;
}
</style>
