const template = `<button
                        @click="increment"
                        type="button"
                   >{{ count }}</button>`;

export const CounterButton = {
  template,
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  model: {
    prop: 'count',
    event: 'increment',
  },
  methods: {
    increment() {
      this.$emit('increment', this.count + 1);
    },
  },
};
