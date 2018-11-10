import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
} as RouterOptions);
