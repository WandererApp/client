<template>
    <div id="home-container">
        <div class="left">
            <div class="search">
                <TextInput type="text" placeholder="Find wanderers"></TextInput>
            </div>
            <div class="timeline">
                <div class="item">
                    <div class="header">
                        <div class="left">
                            <img src="img/background.jpg">
                        </div>
                        <div class="right">
                            <h5>Kevin von Kevinson</h5>
                            <small>2 hours ago</small>
                        </div>
                    </div>
                    <div class="content">
                        We hebben een geweldige trip gehad naar het buitenland. <br>
                        Zeker een aanrader.
                    </div>
                </div>
                <div class="item">
                    <div class="header">
                        <div class="left">
                            <img src="img/background.jpg">
                        </div>
                        <div class="right">
                            <h5>Kevin von Kevinson</h5>
                            <small>2 hours ago</small>
                        </div>
                    </div>
                    <div class="content">
                        We hebben een geweldige trip gehad naar het buitenland. <br>
                        Zeker een aanrader.
                    </div>
                </div>
            </div>
        </div>
        <div class="right" id="map"></div>
    </div>
</template>

<script>
    import TextInput from "../../Multi/Input/TextInput";
    import mapboxgl from 'mapbox-gl';
    import MapboxDraw from '@mapbox/mapbox-gl-draw';

    export default {
        name: "Home",
        components: { TextInput },
        data() {
            return {
                apiKey: '',
            };
        },
        mounted() {
            mapboxgl.accessToken = this.apiKey;

            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                minzoom: 1.3,
                center: [4.484021, 51.917193], // wijnhave hr
                zoom: 16,
            });

            var Draw = new MapboxDraw();

            this.map.addControl(Draw, 'top-left');

            this.map.on('load', () => {

                this.map.addLayer({
                    "id": "route",
                    "type": "line",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "LineString",
                                "coordinates": [
                                    [4.484021, 51.917193],
                                    [4.487793, 51.917927],
                                    [4.487993, 51.917427],
                                    [4.487793, 51.917927],
                                    [4.488975, 51.918193]
                                ]
                            }
                        }
                    },
                    "layout": {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    "paint": {
                        "line-color": "#888",
                        "line-width": 8
                    }
                });
            });
        }
    }
</script>

<style scoped>
    #home-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        padding-top: 60px;
    }

        #home-container > .left {
            width: 100%;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 15px;
        }

            #home-container > .left .search {
                width: 100%;
            }

            #home-container > .left .timeline {
                width: 100%;
                margin-top: 15px;
            }

                #home-container > .left .timeline .item {
                    margin-bottom: 30px;
                }

                    #home-container > .left .timeline .item .header {
                        display: flex;
                    }

                        #home-container > .left .timeline .item .header .left {
                            text-align: left;
                        }

                            #home-container > .left .timeline .item .header .left img {
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                            }

                        #home-container > .left .timeline .item .header .right {
                            display: flex;
                            justify-content: center;
                            flex-flow: column;
                            margin-left: 15px;
                        }

                    #home-container > .left .timeline .item .content {
                        font-size: 14px;
                        margin-top: 10px;
                    }

        #home-container > .right {
            display: none;
        }

    @media (min-width: 1023px) {
        #home-container > .left {
            width: 400px;
            flex-shrink: 0;
            flex-grow: 0;
            border-right: 1px solid #e4e4e4;
        }

        #home-container > .right {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
</style>