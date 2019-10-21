<template>
  <sd-on-click-outside :do="close">
    <div class="SdSearch" :class="{ 'is-active': isOpen }">
      <button ref="button" type="button" class="SdSearch-input" @click="open">
        <span v-if="value !== null">{{ value }}</span>
        <span v-else class="SdSearch-placeholder">Select a Benefit...</span>
      </button>
      <div v-show="isOpen" class="SdSearch-dropdown">
        <input
          ref="search"
          v-model="search"
          class="SdSearch-search"
          @keydown.esc="close"
          @keydown.up="highlightPrev"
          @keydown.down="highlightNext"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent
        />
        <ul v-show="filteredOptions.length > 0" ref="options" class="SdSearch-options">
          <li
            v-for="(option, i) in filteredOptions"
            :key="option"
            class="SdSearch-option"
            :class="{ 'is-active': i === highlightedIndex }"
            @click="select(option)"
          >
            {{ option }}
          </li>
        </ul>
        <div v-show="filteredOptions.length === 0" class="SdSearch-empty">No results found for "{{ search }}"</div>
      </div>
    </div>
  </sd-on-click-outside>
</template>

<script>
import SdOnClickOutside from '~/components/SdOnClickOutside';

export default {
  name: 'SdSearch',

  components: {
    SdOnClickOutside,
  },

  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    value: {
      type: String,
      default: null,
    },
    filterFunction: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      isOpen: false,
      search: '',
      highlightedIndex: 0,
    };
  },

  computed: {
    filteredOptions() {
      return this.options.filter((option) => option.toLowerCase().startsWith(this.search.toLowerCase()));
    },
  },

  methods: {
    open() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.search.focus();
        this.scrollToHighlighted();
      });
    },

    close() {
      this.isOpen = false;
      this.$refs.button.focus();
    },

    select(value) {
      this.$emit('input', value);
      this.search = '';
      this.highlightedIndex = 0;
      this.close();
    },

    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex]);
    },

    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
      });
    },

    highlight(index) {
      this.highlightedIndex = index;

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1;
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0;
      }

      this.scrollToHighlighted();
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1);
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1);
    },
  },
};
</script>

<style scoped>
.SdSearch {
  position: relative;
}
.SdSearch-input {
  appearance: none;
  text-align: left;
  display: block;
  width: 100%;
  border-width: 1px solid var(--color--black);
  padding: var(--space--medium);
  background-color: var(--color--white);
  color: var(--color--black);
  cursor: pointer;
  user-select: none;
}
.SdSearch-input:focus {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(250, 50, 50, 0.5);
}
.SdSearch-placeholder {
  color: var(--color--grey500);
}
.SdSearch.is-active .SdSearch-input {
  box-shadow: 0 0 0 3px rgba(250, 50, 50, 0.5);
}

.SdSearch-dropdown {
  margin-top: var(--space--small);
  margin-bottom: var(--space--small);
  position: absolute;
  right: 0;
  left: 0;
  background-color: var(--color--black);
  padding: var(--space--small);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 50;
}
.SdSearch-search {
  display: block;
  margin-bottom: var(--space--small);
  width: 100%;
  padding: var(--space--small) var(--space--medium);
  background-color: var(--color--grey700);
  color: var(--color--white);
}
.SdSearch-search:focus {
  outline: 0;
}
.SdSearch-options {
  list-style: none;
  padding: 0;
  position: relative;
  overflow-y: auto;
  max-height: 14rem;
}
.SdSearch-option {
  padding: var(--space--small) var(--space--medium);
  color: var(--color--white);
  cursor: pointer;
  user-select: none;
}
.SdSearch-option:hover {
  background-color: var(--color--grey600);
}
.SdSearch-option.is-active,
.SdSearch-option.is-active:hover {
  background-color: var(--color--red300);
}
.SdSearch-empty {
  padding: var(--space--small) var(--space--medium);
  color: var(--color--white);
}
</style>
