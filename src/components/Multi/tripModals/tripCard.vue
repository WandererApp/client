<template>
    <div class="item" @click="getTrip(user.id)">
        <div class="header">
            <div class="left">
                <img :src="trip.profilePicture">
            </div>
            <div class="right">
                <h5>{{trip.name}}</h5>
                <small>{{trip.joined}}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tripCard",
        props: {
            trip: Object
        },
        methods: {
            
        }
</script>

<style scoped>
    .item {
        margin-bottom: 30px;
    }

        .item .header {
            display: flex;
        }

            .item .header .left {
                text-align: left;
            }

                .item .header .left img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }

            .item .header .right {
                display: flex;
                justify-content: center;
                flex-flow: column;
                margin-left: 15px;
            }

        .item .content {
            font-size: 14px;
            margin-top: 10px;
        }
</style>