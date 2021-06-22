import Vue from 'vue'
import App from './App.vue'
import VueFake from 'vue-faker'
import 'bootstrap'
import './plugin/axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './plugin/bootstrap'
Vue.use(VueFake)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
