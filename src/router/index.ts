import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default [{
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
}];
