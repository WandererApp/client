<template>
    <button :id="id">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "ButtonInput",
        props: [
            'id'
        ]
    }
</script>

<style scoped>
    @media (min-width: 374px) {
        button {
            width: 160px;
            height: 36px;
            border-radius: 200px;
            border: none;
            background-color: #45C879;
            color: #ffffff;
            font-size: 14px;
        }
    }
</style>