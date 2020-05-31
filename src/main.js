import Vue from 'vue'
import App from './App.vue'
import Nav from './nav.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Plans from './plans.vue'
Vue.component('navbar',Nav)
Vue.component('indexHeader',Header)
Vue.component('indexFooter',Footer)
Vue.component('plans',Plans)
new Vue({
  el: '#app',
  render: h => h(App)
})
