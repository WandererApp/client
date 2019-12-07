<template>
    <div id="container">

        <div id="person">
            <div id="profilePhoto"><img src="img/background_authenticate.png"/></div>
            <h3>Kevin von Kevinson</h3>
            <p>Joined 5 october 2017</p>
        </div>
        <div id="menu">
            <div class="menuButton">
                <img src="img/ic_trip.svg"/>
                <p>TIMELINE</p>
            </div>
<!--            <div class="menuButton">-->
<!--                <img src="img/ic_friends.svg"/>-->
<!--                <p>FRIENDS</p>-->
<!--            </div>-->
            <div class="menuButton">
                <img src="img/ic_add_friend.svg"/>
                <p>ADD TO FRIENDS</p>
            </div>
<!--            <div class="menuButton">-->
<!--                <img src="img/ic_remove_friend.svg"/>-->
<!--                <p>REMOVE FRIEND</p>-->
<!--            </div>-->
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

    #container #menu {
        display: flex;
        justify-content: center;

        height: 72px;
    }

    #container #menu .menuButton {
        border-bottom: 1px #c4c4c4 solid;
        padding-top: 18px;
        cursor: pointer;

        height: 100%;
        width: 50%;

        color: rgba(0, 0, 0, .6);
        text-align: center;
    }

    #container #menu .menuButton p {
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