<template>
  <div id="sidebar">
    <ul id="sidebar-nav">
      <li>学习</li>
      <li>生态系统</li>
      <li>团队</li>
      <li>支持VUE</li>
      <li>多语言</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'Sidebar'
    }
</script>

<style>
    #sidebar-nav {
        list-style-type: none;
        padding: 0;
    }
    #sidebar-nav li {
        display: block;
        margin: 0 10px;
        cursor: pointer;
    }
    #sidebar {
        width: 100%;
        height: 100%;
    }
</style>
