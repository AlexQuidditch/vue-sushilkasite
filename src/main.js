// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueScroll from 'vue-scroll';
import VueResource from 'vue-resource'

import VueSweetalert from 'vue-sweetalert';

Vue.use(VueSweetalert);
Vue.use(VueResource);

import data from './data';

Vue.http.options.root = data.root

const app = new Vue ({
  el: '#wrapper',
  template: '<App/>',
  components: { App }
});
