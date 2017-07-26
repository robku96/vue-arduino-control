import Vue from 'vue';
import VueRouter from 'vue-router/dist/vue-router';

import LoginRoutes from 'features/login/login.routes';
import FoobarRoutes from 'features/foobar/foobar.routes';

import 'common/components'; // same as from '../../../common/components/index.js';

Vue.use(VueRouter);

window.vue2 = Vue;

const routes = [
  {
    path: '/',
    redirect(/* routeInfo */) {
      /*
        example:
        if (someService.loggedIn) {
          return '/foo';
        } else {
          return '/login';
        }
      */

      return '/login';
    },
  },
  ...LoginRoutes,
  ...FoobarRoutes,
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#app');
