import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import List from './List.vue'
Vue.component(Header.name, Header)
Vue.component(List.name, List)

new Vue({
  el: '#app',
  render: h => h(App)
})
