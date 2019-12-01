import Vue from 'vue'
import App from './App.vue'

// Import VueRouter library, and the app's routes
import VueRouter from "vue-router"
import router from "./router"

import BootstrapVue from "bootstrap-vue"
import StateAPIService from "@/services/stateServices.js"

Vue.use(VueRouter) //makes this app use VueRouter

Vue.use(BootstrapVue) //bootstrap config
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

//add API service to Vue prototype
Vue.prototype.$stateServices = StateAPIService

import "leaflet/dist/leaflet.css"

new Vue({
  render: h => h(App),
  router //include the routes.
}).$mount('#app')
