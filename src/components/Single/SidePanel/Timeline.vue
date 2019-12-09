<template>
    <div id="container">
        <div class="search">
            <SearchInput type="text" placeholder="Find wanderers"></SearchInput>
        </div>
        <div class="timeline">
            <div class="item" data-id="1">
                <HorizontalProfileView/>
                <div class="content">
                    We hebben een geweldige trip gehad naar het buitenland. <br>
                    Zeker een aanrader.
                </div>
            </div>
            <div class="item" data-id="2">
                <HorizontalProfileView/>
                <div class="content">
                    We hebben een geweldige trip gehad naar het buitenland. <br>
                    Zeker een aanrader.
                </div>
            </div>
        </div>
        <div class="createPost">
            <!-- todo: handle item visibility on FAB click-->
            <div class="FABItem">
                <p>End trip</p>
                <img src="img/ic_trip_end.svg"/>
            </div>

            <div class="FABItem">
                <p>Text</p>
                <img src="img/ic_text.svg"/>
            </div>

            <div class="FABItem">
                <p>New trip</p>
                <img src="img/ic_trip_start.svg"/>
            </div>

            <div class="FAB">
                <img src="img/ic_add.svg"/>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchInput from "../../Multi/Input/SearchInput";
    import HorizontalProfileView from "../../Multi/profile/HorizontalProfileView"

    export default {
        name: "Timeline",
        components: {HorizontalProfileView, SearchInput},
    }
</script>

<style scoped>
    #container {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 15px;
    }

    #container .search {
        width: 100%;
    }

    #container .timeline {
        width: 100%;
        margin-top: 15px;
    }

    #container .timeline .item {
        margin-bottom: 30px;
    }

    #container .timeline .item .content {
        font-size: 14px;
        margin-top: 10px;
    }


    .createPost {
        position: absolute;
        right: 16px;
        bottom: 16px;
    }

    .createPost .FAB {
        display: flex;
        justify-content: center;

        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #45C879;
        float: right;

        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .createPost .FABItem {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 12px;
        padding-right: 8px;
        margin-bottom: 16px;

        color: #ffffff;

        border-radius: 24px;
        background-color: #45C879;

        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .createPost .FABItem p {
        display:inline;
        text-align: right;
    }

    .createPost .FABItem img {
        width: 14px;
        height: 14px;
        float: right;
        margin-left: 4px;
        margin-top: 2px;
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