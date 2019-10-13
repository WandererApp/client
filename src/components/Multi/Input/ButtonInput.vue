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
            width: 100px;
            height: 40px;
            border-radius: 5px;
            border: 1px solid #72CF94;
            background-image: linear-gradient(to bottom, #72CF94, #45C879);
            color: #ffffff;
            font-size: 14px;
        }
    }
</style>