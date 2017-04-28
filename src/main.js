// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueResource from 'vue-resource';
import VueSweetalert from 'vue-sweetalert';
import VueLazyload from 'vue-lazyload';

Vue.use(VueSweetalert);
Vue.use(VueResource);

Vue.use(VueLazyload, {
  preLoad: 2,
  loading: '../static/assets/gif/loading.gif'
});

import data from './data.js';

Vue.http.options.root = data.root;

const app = new Vue ({
  el: '#wrapper',
  template: '<App/>',
  components: { App }
});
