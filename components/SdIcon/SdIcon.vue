<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="VhIcon" :class="computedClasses" role="presentation">
    <use v-bind="{ 'xlink:href': `#${name}` }" />
  </svg>
</template>

<script>
export default {
  name: 'VhIcon',
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
        [`VhIcon--${this.size}`]: this.size,
        [`VhIcon--${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style>
/* https://material.io/design/iconography/system-icons.html#system-icon-metrics */

.VhIcon {
  display: block;
  width: var(--VhIcon-size--medium);
  height: var(--VhIcon-size--medium);
  font-size: var(--VhIcon-size--medium);
  user-select: none;
  flex-shrink: 0;
}

/* icons sizes */

.VhIcon--xSmall {
  width: var(--VhIcon-size--xSmall);
  height: var(--VhIcon-size--xSmall);
}

.VhIcon--small {
  width: var(--VhIcon-size--small);
  height: var(--VhIcon-size--small);
}

.VhIcon--medium {
  width: var(--VhIcon-size--medium);
  height: var(--VhIcon-size--medium);
}

.VhIcon--large {
  width: var(--VhIcon-size--large);
  height: var(--VhIcon-size--large);
}

.VhIcon--xLarge {
  width: var(--VhIcon-size--xLarge);
  height: var(--VhIcon-size--xLarge);
}

/* COLORS */
.VhIcon--default {
  fill: currentColor;
}

.VhIcon--lightOrange {
  fill: var(--color--orange300);
}

.VhIcon--orange {
  fill: var(--color--orange500);
}

.VhIcon--darkOrange {
  fill: var(--color--orange700);
}

.VhIcon--lightGrey {
  fill: var(--color--grey300);
}

.VhIcon--grey {
  fill: var(--color--grey500);
}

.VhIcon--darkGrey {
  fill: var(--color--grey700);
}

.VhIcon--lightBlue {
  fill: var(--color--blue300);
}

.VhIcon--blue {
  fill: var(--color--blue500);
}

.VhIcon--darkBlue {
  fill: var(--color--blue700);
}

.VhIcon--lightRed {
  fill: var(--color--red300);
}

.VhIcon--red {
  fill: var(--color--red500);
}

.VhIcon--darkRed {
  fill: var(--color--red700);
}

.VhIcon--lightYellow {
  fill: var(--color--yellow300);
}

.VhIcon--yellow {
  fill: var(--color--yellow500);
}

.VhIcon--darkYellow {
  fill: var(--color--yellow700);
}

.VhIcon--lightGreen {
  fill: var(--color--green300);
}

.VhIcon--green {
  fill: var(--color--green500);
}

.VhIcon--darkGreen {
  fill: var(--color--green700);
}

.VhIcon--white {
  fill: var(--color--white);
}
</style>
