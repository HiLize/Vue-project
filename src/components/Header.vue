<template>
  <div id="header">
    <a id="logo">
        <img src="../assets/logo.png" alt="vue logo" class="image">
        <span>Vue.js</span>
    </a>
    <ul id="nav">
      <li><a @click="go('/content', $event)">学习</a></li>
      <li @click="go('/', $event)">生态系统</li>
      <li>团队</li>
      <li>支持VUE</li>
      <li>多语言</li>
    </ul>
  </div>
</template>

<script>
    import routes from '../router/routes'
    export default {
        name: 'Header',
        methods: {
            go (href, event) {
                event.preventDefault()
                this.$root.currentRoute = href
                window.history.pushState(
                    null,
                    routes[this.href],
                    this.href
                )
            }
        }
    }
</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
        cursor: pointer;
    }
    #header {
        position: fixed;
        width: 100%;
        top: 0;
        background-color: #fff;
        height: 60px;
        padding: 10px 60px;
        text-align: left;
        box-shadow: 0 0 1px rgba(0,0,0,0.25);
        transition: background-color 0.3s ease-in-out;
        box-sizing: border-box;
    }
    #logo {
        display: inline-block;
        font-size: 1.5em;
        line-height: 40px;
        color: #2c3e50;
        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        font-weight: 500;
    }
    .image {
        vertical-align: middle;
        margin-right: 6px;
        width: 40px;
        height: 40px;
    }

    #nav {
        position: fixed;
        right: 60px;
        top: 5px;
    }
</style>
