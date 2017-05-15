import Vue from 'vue';
import App from './app';

import VueResource from 'vue-resource';
import VueSweetalert from 'vue-sweetalert';
import VueLazyload from 'vue-lazyload';

Vue.use(VueSweetalert);
Vue.use(VueResource);

Vue.use(VueLazyload , {
  preLoad: 2,
  loading: '../static/assets/gif/loading.gif'
});

import { root } from './data.js';

Vue.http.options.root = root;

new Vue ({ ...App }).$mount('#wrapper')
