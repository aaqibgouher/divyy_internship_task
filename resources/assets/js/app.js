require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import vuetify_config from './vuetify_config'
import mixin from './mixin'

import { router } from './router/index';
import store from './store/index';
import MainComponentPage from './pages/MainComponentPage';

import interceptors from './interceptors';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.mixin(mixin);

interceptors();

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
Vue.use(GAuth, gauthOption)

const app = new Vue({
    el: '#app',
    vuetify : new Vuetify(vuetify_config),
    router,
    store,
    components: {
        "main-component-page": MainComponentPage
    }
});
