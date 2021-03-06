import Vue from 'vue';
import 'es6-promise'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
