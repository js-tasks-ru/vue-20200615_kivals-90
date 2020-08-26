<template>
  <div>
    <the-header />
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

export default {
  name: 'BaseLayout',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
main {
  flex: 1 0 auto;
}
.container {
  margin: 0 auto;
}
</style>
