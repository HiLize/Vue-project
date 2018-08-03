<template>
    <div id="layout">
        <div class='header'>
            <Header />
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Header from '../Header.vue'

export default {
    name: 'Layout',
    components: {
        Header
    }
}
</script>

<style>
    #layout {
        display: flex;
        flex-direction: column;
        align-content: stretch;
        height: 100%;
        width: 100%;
    }
    .header {
        flex-basis: 60px;
    }
    .content {
        flex-basis: 100%;
    }
</style>
