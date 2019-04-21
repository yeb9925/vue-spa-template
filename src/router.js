import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueRouter)
Vue.use(VueScrollTo)

function load (component) {
  return () => System.import(`./components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { path: '/', component: load('Index') } // Default
  ]
})
