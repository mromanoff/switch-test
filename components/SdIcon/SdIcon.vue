<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="SdIcon" :class="computedClasses" role="presentation">
    <use v-bind="{ 'xlink:href': `#${name}` }" />
  </svg>
</template>

<script>
export default {
  name: 'SdIcon',
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
        [`SdIcon--${this.size}`]: this.size,
        [`SdIcon--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style>
/* https://material.io/design/iconography/system-icons.html#system-icon-metrics */

.SdIcon {
  display: block;
  width: var(--Icon-size--medium);
  height: var(--Icon-size--medium);
  font-size: var(--Icon-size--medium);
  user-select: none;
  flex-shrink: 0;
}

/* icons sizes */

.SdIcon--xSmall {
  width: var(--Icon-size--xSmall);
  height: var(--Icon-size--xSmall);
}

.SdIcon--small {
  width: var(--Icon-size--small);
  height: var(--Icon-size--small);
}

.SdIcon--medium {
  width: var(--Icon-size--medium);
  height: var(--Icon-size--medium);
}

.SdIcon--large {
  width: var(--Icon-size--large);
  height: var(--Icon-size--large);
}

.SdIcon--xLarge {
  width: var(--Icon-size--xLarge);
  height: var(--Icon-size--xLarge);
}

/* COLORS */
.SdIcon--default {
  fill: currentColor;
}

.SdIcon--lightOrange {
  fill: var(--color--orange300);
}

.SdIcon--orange {
  fill: var(--color--orange500);
}

.SdIcon--darkOrange {
  fill: var(--color--orange700);
}

.SdIcon--lightGrey {
  fill: var(--color--grey300);
}

.SdIcon--grey {
  fill: var(--color--grey500);
}

.SdIcon--darkGrey {
  fill: var(--color--grey700);
}

.SdIcon--lightBlue {
  fill: var(--color--blue300);
}

.SdIcon--blue {
  fill: var(--color--blue500);
}

.SdIcon--darkBlue {
  fill: var(--color--blue700);
}

.SdIcon--lightRed {
  fill: var(--color--red300);
}

.SdIcon--red {
  fill: var(--color--red500);
}

.SdIcon--darkRed {
  fill: var(--color--red700);
}

.SdIcon--lightYellow {
  fill: var(--color--yellow300);
}

.SdIcon--yellow {
  fill: var(--color--yellow500);
}

.SdIcon--darkYellow {
  fill: var(--color--yellow700);
}

.SdIcon--lightGreen {
  fill: var(--color--green300);
}

.SdIcon--green {
  fill: var(--color--green500);
}

.SdIcon--darkGreen {
  fill: var(--color--green700);
}

.SdIcon--white {
  fill: var(--color--white);
}
</style>
