<template>
    <div id="home-container">
        <div class="left">
            <Timeline />
        </div><div class="createPost">
            <!-- todo: handle item visibility on FAB click-->
            <!--<div class="FABItem">
                <p>End trip</p>
                <img src="img/ic_trip_end.svg" />
            </div>

            <div class="FABItem">
                <p>Text</p>
                <img src="img/ic_text.svg" />
            </div>

            <div class="FABItem">
                <p>New trip</p>
                <img src="img/ic_trip_start.svg" />
            </div>-->

            <div class="FAB" @click="openNewTripForm()">
                <img src="img/ic_add.svg" />
            </div>
        </div>
        <div class="right" id="map"></div>
    </div>
</template>

<script>
    import mapboxgl from 'mapbox-gl';
    import MapboxDraw from '@mapbox/mapbox-gl-draw';
    import Timeline from "../SidePanel/Timeline";
    import createTrip from "../createTrip"

    export default {
        name: "Home",
        components: { Timeline },
        data() {
            return {
                routes: [],
                apiKey: ''
            };
        },
        methods: {
            cleanMap: function () {
                for (var i = 0; this.routes.length > i;) {
                    var route = this.routes.pop();
                    this.map.getLayer(route) ? this.map.removeLayer(route) : null;
                    this.map.getSource(route) ? this.map.removeSource(route) : null;
                }
            },
            removeRoute: function (routeId) {
                var routeI = this.routes.indexOf(routeId)
                if (routeI >= 0) {
                    this.map.getLayer(routeId) ? this.map.removeLayer(routeId) : null;
                    this.map.getSource(routeId) ? this.map.removeSource(routeId) : null;
                    this.routes.splice(routeI, 1);
                }

            },
            openNewTripForm: function () {
                this.$parent.setForm(createTrip, 'New trip', { cords: this.draw.getAll().features[0].geometry.coordinates.map(value => { return { lat: value[1], long: value[0] } }) });
                this.$parent.showModal = true;
            }
        },
        mounted() {

            mapboxgl.accessToken = this.apiKey;

            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                minzoom: 1.3,
                center: [4.484021, 51.917193], // Wijnhaven hr
                zoom: 16,
            });

            this.draw = new MapboxDraw({
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

            this.map.addControl(this.draw, 'top-left');
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

        #home-container > .right {
            display: none;
        }

    .createPost {
        position: absolute;
        right: 16px;
        bottom: 16px;
        z-index: 1000;
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
                display: inline;
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