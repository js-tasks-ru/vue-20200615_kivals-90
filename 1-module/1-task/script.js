import Vue from '/vendor/vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

const app = new Vue({
  el: '#app',

  data: {
    buttonValue: 0,
  },

  methods: {
    counter() {
      return this.buttonValue++;
    },
  },
});
