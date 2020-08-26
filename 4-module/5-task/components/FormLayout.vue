<template>
  <div>
    <the-header />
    <main class="main">
      <div class="page page_meetup-forms">
        <div class="container">
          <h2 class="page__title">{{ title }}</h2>
          <router-view />
        </div>
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
export default {
  name: 'FormLayout',
  components: { TheHeader, TheFooter },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style scoped></style>
