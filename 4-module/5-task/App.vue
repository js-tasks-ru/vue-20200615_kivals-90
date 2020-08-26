<template>
  <div>
    <nav>
      <router-link :to="{ name: 'meetups' }">Митапы</router-link> |
      <router-link :to="{ name: 'form' }">Создать митап</router-link> |
      <router-link :to="{ name: 'login' }">Вход</router-link>
    </nav>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import BaseLayout from './components/BaseLayout';
import AuthLayout from './components/AuthLayout';
import FormLayout from './components/FormLayout';

export default {
  name: 'App',
  components: { BaseLayout, AuthLayout, FormLayout },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'base'}-layout`;
    },
  },
  created() {
    this.$router.replace('/');
  },
};
</script>

<style scoped></style>
