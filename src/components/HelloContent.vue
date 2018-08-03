<template>
    <Layout>
    <div class="content">
        <img src="../assets/logo.png">
        <h1>hello content</h1>
    </div>
    </Layout>
</template>

<script>
    import Layout from './public/Layout.vue'
    export default {
        name: 'HelloContent',
        props: {
            msg: String
        },
        components: {
            Layout
        }
    }
</script>