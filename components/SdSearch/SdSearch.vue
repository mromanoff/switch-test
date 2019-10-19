<template>
  <div class="search-select" :class="{ 'is-active': isOpen }">
    <button type="button" class="search-select-input" @click="open">
      <span v-if="value !== null">{{ value }}</span>
      <span v-else class="search-select-placeholder">Select a Benefit...</span>
    </button>
    <div v-show="isOpen" class="search-select-dropdown">
      <input v-model="search" class="search-select-search" />
      <ul v-show="filteredOptions.length > 0" class="search-select-options">
        <li v-for="benefit in filteredOptions" :key="benefit.title" class="search-select-option" @click="select(benefit.title)">{{ benefit.title }}</li>
      </ul>
      <div v-show="filteredOptions.length === 0" class="search-select-empty">No results found for "{{ search }}"</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SdSearch',

  props: {
    benefits: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {
      isOpen: false,
      value: null,
      search: '',
    };
  },

  computed: {
    filteredOptions() {
      return this.benefits.filter((benefit) => benefit.title.toLowerCase().startsWith(this.search.toLowerCase()));
    },
  },

  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    select(option) {
      this.value = option;
      this.search = '';
      this.close();
    },
  },
};
</script>

<style scoped>
.search-select {
  position: relative;
}
.search-select-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-align: left;
  display: block;
  width: 100%;
  border-width: 1px;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.search-select-input:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
}
.search-select-placeholder {
  color: #8795a1;
}
.search-select.is-active .search-select-input {
  -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
}

.search-select-dropdown {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  position: absolute;
  right: 0;
  left: 0;
  background-color: #3d4852;
  padding: 0.5rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 50;
}
.search-select-search {
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #606f7b;
  color: #fff;
  border-radius: 0.25rem;
}
.search-select-search:focus {
  outline: 0;
}
.search-select-options {
  list-style: none;
  padding: 0;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 14rem;
}
.search-select-option {
  padding: 0.5rem 0.75rem;
  color: #fff;
  cursor: pointer;
  border-radius: 0.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.search-select-option:hover {
  background-color: #606f7b;
}
.search-select-option.is-active,
.search-select-option.is-active:hover {
  background-color: #3490dc;
}
.search-select-empty {
  padding: 0.5rem 0.75rem;
  color: #b8c2cc;
}
</style>
