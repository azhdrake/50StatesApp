import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"
import router from "./router"

import BootstrapVue from "bootstrap-vue"
import StateAPIService from "@/services/stateServices.js"

Vue.use(VueRouter)

Vue.use(BootstrapVue)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.prototype.$stateServices = StateAPIService

import "leaflet/dist/leaflet.css"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
