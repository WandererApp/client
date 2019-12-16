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
        <div class="content">
            <button>lorem ipsum</button><button>lorem ipsum</button>
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
            getTrip: function (id) {
                var self = this;
                fetch('http://localhost:3916/api/trip/GetTrips/' + id, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(result => {
                    result.json().then(data => {
                        if (Array.isArray(data)) {
                            data.forEach(_value => {
                                fetch('http://localhost:3916/api/pinpoint/GetPinPoints/' + _value.Id, {
                                    method: 'POST',
                                    headers: new Headers({
                                        'Content-Type': 'application/json'
                                    })
                                }).then(_result => {
                                    _result.json().then(_data => {
                                        self.$parent.$parent.map.getLayer('route') ? self.$parent.$parent.map.removeLayer('route') : null;
                                        self.$parent.$parent.map.getSource('route') ? self.$parent.$parent.map.removeSource('route') : null;
                                        if (Array.isArray(_data)) {
                                            self.$parent.$parent.map.addLayer({
                                                "id": "route",
                                                "type": "line",
                                                "source": {
                                                    "type": "geojson",
                                                    "data": {
                                                        "type": "Feature",
                                                        "properties": {},
                                                        "geometry": {
                                                            "type": "LineString",
                                                            "coordinates": _data.map(function (pinpoint, index) { return [pinpoint.Longitude, pinpoint.Latitude] })
                                                        }
                                                    }
                                                },
                                                "layout": {
                                                    "line-join": "round",
                                                    "line-cap": "round"
                                                },
                                                "paint": {
                                                    "line-color": genRandomColor(),
                                                    "line-width": 8
                                                }
                                            });
                                        }
                                    })
                                })
                            })
                        }
                    })
                });
            }
        }
    }

    function genRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
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