<template>
  <Layout>
    <div class="hello">
      <div class="left">
        <img src="../assets/logo.png">
      </div>
      <div class="rightContent">
        <h1>hello world</h1>
      </div>
    </div>
  </Layout>
</template>

<style>
  .hello {
    display: flex;
    flex-direction: row;
    align-content: stretch;
    height: 100%;
    width: 100%;
  }
  .left {
    flex-basis: 300px;
    background-color: #ddd;
  }
  .rightContent {
    flex-basis: 100%;
    background-color: #eee;
  }
</style>


<script>
  import Layout from './public/Layout.vue'

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components: {
      Layout
    }
  }
</script>
