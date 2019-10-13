<template>
    <div id="app" class="bg-img-mounten modal">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from "./components/Multi/Navigation";
    export default {
        name: 'app',
        components: {Navigation}
    }
</script>

<style>
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;
    }
</style>
