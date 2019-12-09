<template>
    <div class="item" @click="getTrip(user.id)">
        <div class="header">
            <div class="left">
                <img :src="user.profilePicture">
            </div>
            <div class="right">
                <h5>{{user.username}}</h5>
                <small>{{user.joined}}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserDisplayCard",
        props: {
            user: Object
            // function (id, username, profilePicture, joined) {
            //    this.id = id;
            //    this.username = username;
            //    this.profilePicture = profilePicture;
            //    this.joined = joined;
            //}
        },
        methods: {
            getTrip(id) {
                fetch('http://localhost:3916/api/trip/GetTrips/' + id, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(result => {
                    result.json().then(data => {
                        console.log(data)
                    });
                });
            }
        }
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