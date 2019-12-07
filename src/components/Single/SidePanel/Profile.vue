<template>
    <div id="container">

        <div id="person">
            <div id="profilePhoto"><img src="img/background_authenticate.png"/></div>
            <h3>Kevin von Kevinson</h3>
            <p>Joined 5 october 2017</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Profile",
        components: {},
    }
</script>

<style scoped>
    #container {
        width: 100%;
    }

    #container #person {
        border-bottom: 1px #c4c4c4 solid;

        padding-bottom: 40px;
    }

    #container #person #profilePhoto {
        display: flex;
        justify-content: center;

        width: 100%;
    }

    #container #person #profilePhoto img {
        width: 176px;
        height: 176px;
        border-radius: 50%;

        margin-top: 24px;
    }

    #container #person h3 {
        margin-top: 8px;
        text-align: center;

        font-weight: normal;
    }

    #container #person p {
        text-align: center;
        font-size: 12px;
    }

    @media (min-width: 1023px) {
        #container {
            width: 400px;
            flex-shrink: 0;
            flex-grow: 0;
            border-right: 1px solid #e4e4e4;
        }
    }
</style>