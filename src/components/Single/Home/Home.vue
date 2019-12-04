<template>
    <div id="home-container">
        <div class="left">
            <div class="search">
                <TextInput type="text" placeholder="Find wanderers" @input="getUsers"></TextInput>
            </div>
            <UserDisplayCard id="userList" class="timeline" v-for="user in users" :user="user" />
            <div class="timeline">
                <div class="item" data-id="1">
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
                <div class="item" data-id="2">
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
    import UserDisplayCard from "../../Multi/UserModels/UserDisplayCard"
    import Route from "../../Multi/Route";


    export default {
        name: "Home",
        components: { TextInput, UserDisplayCard },
        data() {
            return {
                users: [],
                apiKey: ''
            };
        },
        methods: {
            getUsers() {
                fetch('http://localhost:3916/api/account/Search', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        filterValue: ""
                    })
                }).then(result => {
                    result.json().then(data => {
                        for (var i = 0; i < data.length; i++) {
                            var user = {
                                id: data[i].Id,
                                username: data[i].Username,
                                profilePicture: "img/background.jpg",
                                joined: new Date(Date.now())
                            }
                            //var user = new UserDisplayCard.user(
                            //    data[i].Id,
                            //    data[i].Username,
                            //    "img/background.jpg",
                            //    new Date(Date.now())
                            //);
                            this.users.push(user);
                        }
                    });
                });
            }
        },
        mounted() {

            this.getUsers();

            mapboxgl.accessToken = this.apiKey;

            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                minzoom: 1.3,
                center: [4.484021, 51.917193], // wijnhave hr
                zoom: 16,
            });

            var draw = new MapboxDraw({
                displayControlsDefault: false,
                controls: {
                    line_string: true,
                    trash: true
                },
                styles: [
                    // ACTIVE (being drawn)
                    // line stroke
                    {
                        "id": "gl-draw-line",
                        "type": "line",
                        "filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
                        "layout": {
                            "line-cap": "round",
                            "line-join": "round"
                        },
                        "paint": {
                            "line-color": "#3b9ddd",
                            "line-dasharray": [0.2, 2],
                            "line-width": 4,
                            "line-opacity": 0.7
                        }
                    },
                    // vertex point halos
                    {
                        "id": "gl-draw-polygon-and-line-vertex-halo-active",
                        "type": "circle",
                        "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                        "paint": {
                            "circle-radius": 10,
                            "circle-color": "#FFF"
                        }
                    },
                    // vertex points
                    {
                        "id": "gl-draw-polygon-and-line-vertex-active",
                        "type": "circle",
                        "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                        "paint": {
                            "circle-radius": 6,
                            "circle-color": "#3b9ddd",
                        }
                    },
                ]
            });

            this.map.addControl(draw, 'top-left');

            document.querySelector('.item[data-id="1"]').addEventListener('click', () => {
                this.map.getLayer('route') ? this.map.removeLayer('route') : null;
                this.map.getSource('route') ? this.map.removeSource('route') : null;
                this.map.addLayer({
                    id: "route",
                    type: "line",
                    source: {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates: [
                                    [4.484021, 51.917193],
                                    [4.487793, 51.917927],
                                    [4.487993, 51.917427],
                                    [4.487793, 51.917927],
                                    [4.488975, 51.918193]
                                ]
                            }
                        }
                    },
                    layout: {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    paint: {
                        "line-color": "#888",
                        "line-width": 8
                    }
                });
                this.map.addLayer({
                    id: 'waypoints',
                    type: 'circle',
                    source: 'route',
                    paint: {
                        'circle-radius': 3,
                        'circle-color': '#223b53',
                        'circle-stroke-color': 'white',
                        'circle-stroke-width': 1,
                        'circle-opacity': 0.5
                    }
                })
            });



            document.querySelector('.item[data-id="2"]').addEventListener('click', () => {
                this.map.getLayer('route') ? this.map.removeLayer('route') : null;
                this.map.getSource('route') ? this.map.removeSource('route') : null;
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
                                    [4.484021, 51.917197],
                                    [4.483846, 51.917141],
                                    [4.483304, 51.918058],
                                    [4.488635, 51.919233]
                                ]
                            }
                        }
                    },
                    "layout": {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    "paint": {
                        "line-color": "#25cfdb",
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

            /*todo: remove*/
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
                    /*end remove*/

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