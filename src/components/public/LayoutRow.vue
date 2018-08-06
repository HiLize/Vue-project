<template>
    <div id="layout_row">
        <div class="left">
            <img src="../../assets/logo.png">
        </div>
        <div class="rightContent">
            <h1>hello world</h1>
        </div>
    </div>
</template>

<style>
    .layout_row {
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
