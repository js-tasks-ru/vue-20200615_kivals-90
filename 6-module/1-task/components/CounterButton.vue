<template>
  <div>
    <button @click="incrementCount" type="button">{{ localCount }}</button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      localCount: this.count,
    };
  },
  watch: {
    count(newValue) {
      this.localCount = newValue;
    },
  },
  model: {
    prop: 'count',
    event: 'increment',
  },
  methods: {
    incrementCount() {
      this.$emit('increment', ++this.localCount);
    },
  },
};
</script>

<style></style>
