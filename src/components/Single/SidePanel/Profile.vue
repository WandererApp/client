<template>
    <div id="container">

        <div id="person">
            <div id="profilePhoto"><img src="img/background_authenticate.png" /></div>
            <h3>{{user.username}}</h3>
            <p>{{user.joined}}</p>
        </div>
        <div id="menu">
            <div class="menuButton" @click="toTimeline()">
                <img src="img/ic_trip.svg" />
                <p>TIMELINE</p>
            </div>

            <div v-if="user.isFollowing" @click="unfollowUser()" class="menuButton">
                <img src="img/ic_remove_friend.svg" />
                <p>REMOVE FRIEND</p>
            </div>
            <div v-else class="menuButton" @click="followUser()">
                <img src="img/ic_add_friend.svg" />
                <p>ADD TO FRIENDS</p>
            </div>
        </div>
        <div>
            <tripCard v-for="trip in trips" :trip="trip" />
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import tripCard from '../../Multi/tripModals/tripCard'
    import Toasted from 'vue-toasted';
    Vue.use(Toasted, { position: 'bottom-right', duration: 3000 })

    export default {
        name: "Profile",
        components: { tripCard },
        props: {
            user: Object
        },
        data() {
            return {
                user: Object,
                trips: []
            }
        },
        methods: {
            followRequest: function () {
                return fetch('http://localhost:3916/api/follower/PostFollower/' + localStorage.getItem('token') + '/' + this.user.id, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                })
            },
            followUser: function () {
                this.followRequest().then(result => {
                    if (result.status == 200) {
                        result.json().then(data => {
                            this.$toasted.show("You are now following " + this.user.username);
                            this.user.isFollowing = true;
                        });
                    }
                    else {
                        this.$toasted.show("something went wrong");
                    }
                });
            },
            unfollowUser: function () {
                this.followRequest().then(result => {
                    if (result.status == 204) {
                        this.$toasted.show("You have unfollowed " + this.user.username);
                        this.user.isFollowing = false;
                    }
                    else {
                        this.$toasted.show("something went wrong");
                    }
                });
            },
            getTrip: function (id) {
                fetch('http://localhost:3916/api/trip/GetTrips/' + id, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(result => {
                    result.json().then(data => {
                        var _trips = [];
                        if (Array.isArray(data)) {
                            data.forEach(value => {
                                _trips.push({
                                    id: value.Id,
                                    name: value.TripName,
                                    from: value.TimestampFrom,
                                    to: value.TimestampTo
                                });
                            })
                            this.trips = _trips;
                        }
                    });
                })
            },
            toTimeline: function () {
                this.$parent.userProfile = null
            }
        },
        mounted() {
            this.getTrip(this.user.id);
        }
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