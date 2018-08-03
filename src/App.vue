<template>
  <div id="app">
    {{this.ViewComponents.default}}
  </div>
</template>

<script>
import routes from './router/routes.js'
import HelloWorld from './components/HelloWorld.vue'
import HelloContent from './components/HelloContent.vue'

export default {
  name: 'apps',
  props: {
    currentRoute: String
  },
  components: {
    HelloWorld
  },
  computed: {
    ViewComponents () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./components/' + matchingView + '.vue')
        : require('./components/HelloWorld.vue')
    }
  },
  render (h) {
    return h(this.ViewComponents.default)
  },
  created: function () {
    console.log('hello', this.ViewComponents.default)
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
