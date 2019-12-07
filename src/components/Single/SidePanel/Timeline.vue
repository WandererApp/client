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

    @media (min-width: 1023px) {
        #container {
            width: 400px;
            flex-shrink: 0;
            flex-grow: 0;
            border-right: 1px solid #e4e4e4;
        }
    }
</style>