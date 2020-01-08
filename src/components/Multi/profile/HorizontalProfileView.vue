<template>
    <div>
        <div class="left">
            <img src="img/background_authenticate.png">
        </div>
        <div class="right">
            <h5>Kevin von Kevinson</h5>
            <small>2 hours ago</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HorizontalProfileView",
        props: []
    }
</script>

<style scoped>
    @media (min-width: 374px) {
        div {
            display: flex;
            cursor: pointer;
        }

        div .left {
            text-align: left;
        }

        div .left img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        div .right {
            display: flex;
            justify-content: center;
            flex-flow: column;
            margin-left: 15px;
        }

        div .right h5 {
            font-size: 16px;
        }
    }
</style>