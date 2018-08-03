<template>
  <Layout>
    <div class="hello">
      <img src="../assets/logo.png">
      <h1>hello world</h1>
    </div>
  </Layout>
</template>

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
