<template>
    <div class="item" @click="toggleTrip(trip.id)">
        <div class="header">
            <h5 class="right">{{trip.name}}</h5>
        </div>
        <div class="content">
            <p>{{trip.from}}</p>
            <p>{{trip.to}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tripCard",
        props: {
            trip: Object
        },
        data() {
            return {}
        },
        methods: {
            getTrip: function (id) {
                var self = this;
                var mainScreen = self.$parent.$parent.$parent
                var map = mainScreen.map;
                fetch('http://localhost:3916/api/pinpoint/GetPinPoints/' + id, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(result => {
                    result.json().then(data => {
                        if (Array.isArray(data)) {
                            map.addLayer({
                                "id": "trip"+(self.trip.id),
                                "type": "line",
                                "source": {
                                    "type": "geojson",
                                    "data": {
                                        "type": "Feature",
                                        "properties": {},
                                        "geometry": {
                                            "type": "LineString",
                                            "coordinates": data.map(function (pinpoint) { return [pinpoint.Longitude, pinpoint.Latitude] })
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
                            mainScreen.routes.push("trip" + (self.trip.id));
                        }
                    })
                })
            },
            toggleTrip: function (id) {
                var self = this;
                var mainScreen = self.$parent.$parent.$parent;

                if (mainScreen.routes.indexOf('trip' + self.trip.id) >= 0) {
                    mainScreen.removeRoute('trip' + self.trip.id);
                }
                else {
                    this.getTrip(id);
                }
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