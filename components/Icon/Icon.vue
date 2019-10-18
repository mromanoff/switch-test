<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="Icon" :class="computedClasses" role="presentation">
    <use v-bind="{ 'xlink:href': `#${name}` }" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    /**
     *  One of these colors: lightGrey, grey, darkGrey, lightBlue, blue, darkBlue, lightRed, red, darkRed, lightOrange, orange, darkOrange, lightYellow, yellow, darkYellow, lightGreen, green, darkGreen, white
     */
    color: {
      type: String,
      default: 'default',
      validator: (value) => {
        return value.match(
          /(default|lightGrey|grey|darkGrey|lightBlue|blue|darkBlue|lightRed|red|darkRed|lightOrange|orange|darkOrange|lightYellow|yellow|darkYellow|lightGreen|green|darkGreen|white)/,
        );
      },
    },
    /**
     * valid icon name look at Vehicle History Icons Guide
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * One of these sizes: xSmall, small, medium, large, xLarge
     */
    size: {
      type: String,
      default: 'medium',
      validator: (value) => {
        return value.match(/(xSmall|small|medium|large|xLarge)/);
      },
    },
  },

  computed: {
    computedClasses() {
      return {
        [`Icon--${this.size}`]: this.size,
        [`Icon--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style>
/* https://material.io/design/iconography/system-icons.html#system-icon-metrics */

.Icon {
  display: block;
  width: var(--Icon-size--medium);
  height: var(--Icon-size--medium);
  font-size: var(--Icon-size--medium);
  user-select: none;
  flex-shrink: 0;
}

/* icons sizes */

.Icon--xSmall {
  width: var(--Icon-size--xSmall);
  height: var(--Icon-size--xSmall);
}

.Icon--small {
  width: var(--Icon-size--small);
  height: var(--Icon-size--small);
}

.Icon--medium {
  width: var(--Icon-size--medium);
  height: var(--Icon-size--medium);
}

.Icon--large {
  width: var(--Icon-size--large);
  height: var(--Icon-size--large);
}

.Icon--xLarge {
  width: var(--Icon-size--xLarge);
  height: var(--Icon-size--xLarge);
}

/* COLORS */
.Icon--default {
  fill: currentColor;
}

.Icon--lightOrange {
  fill: var(--color--orange300);
}

.Icon--orange {
  fill: var(--color--orange500);
}

.Icon--darkOrange {
  fill: var(--color--orange700);
}

.Icon--lightGrey {
  fill: var(--color--grey300);
}

.Icon--grey {
  fill: var(--color--grey500);
}

.Icon--darkGrey {
  fill: var(--color--grey700);
}

.Icon--lightBlue {
  fill: var(--color--blue300);
}

.Icon--blue {
  fill: var(--color--blue500);
}

.Icon--darkBlue {
  fill: var(--color--blue700);
}

.Icon--lightRed {
  fill: var(--color--red300);
}

.Icon--red {
  fill: var(--color--red500);
}

.Icon--darkRed {
  fill: var(--color--red700);
}

.Icon--lightYellow {
  fill: var(--color--yellow300);
}

.Icon--yellow {
  fill: var(--color--yellow500);
}

.Icon--darkYellow {
  fill: var(--color--yellow700);
}

.Icon--lightGreen {
  fill: var(--color--green300);
}

.Icon--green {
  fill: var(--color--green500);
}

.Icon--darkGreen {
  fill: var(--color--green700);
}

.Icon--white {
  fill: var(--color--white);
}
</style>
