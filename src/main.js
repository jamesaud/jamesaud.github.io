// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import entry from './components/Entry'
import reuserat from './components/entries/reuserat'
import synergy from './components/entries/synergy'
import cerner from './components/entries/cerner'


import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './assets/stylus/main.styl'

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.component('reuserat', reuserat)
Vue.component('synergy', synergy)
Vue.component('entry', entry)
Vue.component('cerner', cerner)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})

