import Router from "vue-router"
import StateList from "@/components/StateList"
import About from "@/components/About"
import StateDetail from "@/components/StateDetail"

export default new Router({
  // Gives the paths that the RouterView in App.vue uses. Links URLs to components.
  routes: [
    {
      path: "/",
      component: StateList
    }, {
      path: "/about",
      component: About
    },
    {
      path: "/detail/:state",
      name: "detail",
      component: StateDetail
    }
  ]
})