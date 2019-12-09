<template>
    <div>
        <img src="img/background_authenticate.png">
        <h5>Kevin von Kevinson</h5>
    </div>
</template>

<script>
    export default {
        name: "VerticalProfileView",
        props: []
    }
</script>

<style scoped>
    @media (min-width: 374px) {
        div {
            width: 68px;
        }

        div img {
            width: 68px;
            height: 68px;
            border-radius: 50%;
        }

        div h5 {
            text-align: center;
        }
    }
</style>