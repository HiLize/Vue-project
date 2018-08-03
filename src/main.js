import Vue from 'vue'
import App from './App.vue'
// import routes from './router/routes'

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  render (h) {
    return h(App)
  }
}).$mount('#app')















/*
import HelloWorld from './components/HelloWorld.vue'
import HelloContent from './components/HelloContent.vue'

Vue.config.productionTip = false

const routes = {
  '/': HelloWorld,
    '/content': HelloContent
}
var app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponents () {
      const matchingView = routes[this.currentRoute]
      return matchingView
    }
  },
  render (h) {
    return h(this.ViewComponents)
  }
}).$mount('#app')

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

*/
