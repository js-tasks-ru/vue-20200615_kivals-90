<template>
  <div class="dropdown" :class="{ show: isOpenMenu }" @click="toggleOpenMenu">
    <button
      type="button"
      class="button dropdown__toggle"
      :class="{ dropdown__toggle_icon: selectedOption && selectedOption.icon }"
    >
      <app-icon v-if="selectedOption && selectedOption.icon" :icon="selectedOption.icon" />
      {{ getTitle }}
    </button>

    <div class="dropdown__menu" :class="{ show: isOpenMenu }">
      <button
        v-for="option in options"
        class="dropdown__item"
        :class="{dropdown__item_icon: option.icon}"
        type="button"
        @click="selectOption(option.value)"
      >
        <app-icon v-if="option.icon" :icon="option.icon" />
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

export default {
  name: 'DropdownButton',

  components: { AppIcon },

  data() {
    return {
      isOpenMenu: false,
    };
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
    },
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  computed: {
    getTitle() {
      return this.selectedOption
        ? `${this.title} - ${this.selectedOption.text}`
        : this.title;
    },

    selectedOption() {
      return this.options.find((option) => this.value === option.value);
    },
  },

  methods: {
    toggleOpenMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },

    selectOption(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style scoped>
@import '/assets/styles/_button.css';
@import '/assets/styles/_dropdown.css';
</style>
