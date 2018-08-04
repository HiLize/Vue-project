<script>
import routes from './router/routes.js'
import HelloWorld from './components/HelloWorld.vue'
import HelloContent from './components/HelloContent.vue'

export default {
  name: 'apps',
  props: {
    currentRoute: String
  },
  computed: {
    ViewComponents () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./components/' + matchingView + '.vue')
        : require('./components/HelloWorld.vue')
    }
  },
  /*
    render中的h就是creatElement的简写，所以是创建一个模板的意思，
    <template>
      <div id="app">
        <slot></slot>
      </div>
    </template>
    所以就不需要再开头写以上的标签了，写上反而不会显示render出来的标签
  */
  render (h) {
    return h('div', {attrs: {
      'id': 'app'
    }},[h(this.ViewComponents.default)])
  },
  created: function () {
    console.log(this.currentRoute, this.ViewComponents)
  },
  updated () {
    console.log('updated', this.currentRoute)
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
