<template>
  <base-button v-on="$listeners" v-bind="$attrs" class="button_secondary">
    <slot></slot>
  </base-button>
</template>

<script>
import BaseButton from './BaseButton';
export default {
  name: 'SecondaryButton',
  components: { BaseButton },
};
</script>

<style scoped>
.button_secondary {
  background-color: var(--white);
  border-color: var(--blue);
  color: var(--blue);
}

.button_secondary:hover {
  border-color: var(--blue-light);
}
</style>
