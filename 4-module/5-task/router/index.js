import Vue from 'vue';
import VueRouter from 'vue-router';
import MeetupsPage from '../views/MeetupsPage';
import LoginPage from '../views/LoginPage';
import FormPage from '../views/FormPage';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'meetups',
      meta: { layout: 'base' },
      component: MeetupsPage,
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'auth', title: 'Вход' },
      component: LoginPage,
    },
    {
      path: '/form',
      name: 'form',
      meta: { layout: 'form', title: 'Создание митапа' },
      component: FormPage,
    },
  ],
});
