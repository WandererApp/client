<template>
    <div id="home-container">
        <div class="left">
            <Timeline/>
        </div>
        <div class="right" id="map"></div>
    </div>
</template>

<script>
    import mapboxgl from 'mapbox-gl';
    import MapboxDraw from '@mapbox/mapbox-gl-draw';
    import Timeline from "../SidePanel/Timeline"

    export default {
        name: "Home",
        components: {Timeline },
        data() {
            return {
                apiKey: ''//'pk.eyJ1IjoidHlhc3Zkc3ByZWUiLCJhIjoiY2szNGg1N3F1MTB3cDNucXVid2wzcXh2byJ9.g1WGInq9lwlIs5w6yeE6Vw'
            };
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

            //document.querySelector('.item[data-id="1"]').addEventListener('click', () => {
            //    this.map.getLayer('route') ? this.map.removeLayer('route') : null;
            //    this.map.getSource('route') ? this.map.removeSource('route') : null;
            //    this.map.addLayer({
            //        id: "route",
            //        type: "line",
            //        source: {
            //            type: "geojson",
            //            data: {
            //                type: "Feature",
            //                properties: {},
            //                geometry: {
            //                    type: "LineString",
            //                    coordinates: [
            //                        [4.484021, 51.917193],
            //                        [4.487793, 51.917927],
            //                        [4.487993, 51.917427],
            //                        [4.487793, 51.917927],
            //                        [4.488975, 51.918193]
            //                    ]
            //                }
            //            }
            //        },
            //        layout: {
            //            "line-join": "round",
            //            "line-cap": "round"
            //        },
            //        paint: {
            //            "line-color": "#888",
            //            "line-width": 8
            //        }
            //    });
            //    this.map.addLayer({
            //        id: 'waypoints',
            //        type: 'circle',
            //        source: 'route',
            //        paint: {
            //            'circle-radius': 3,
            //            'circle-color': '#223b53',
            //            'circle-stroke-color': 'white',
            //            'circle-stroke-width': 1,
            //            'circle-opacity': 0.5
            //        }
            //    })
            //});



            //document.querySelector('.item[data-id="2"]').addEventListener('click', () => {
            //    this.map.getLayer('route') ? this.map.removeLayer('route') : null;
            //    this.map.getSource('route') ? this.map.removeSource('route') : null;
            //    this.map.addLayer({
            //        "id": "route",
            //        "type": "line",
            //        "source": {
            //            "type": "geojson",
            //            "data": {
            //                "type": "Feature",
            //                "properties": {},
            //                "geometry": {
            //                    "type": "LineString",
            //                    "coordinates": [
            //                        [4.484021, 51.917197],
            //                        [4.483846, 51.917141],
            //                        [4.483304, 51.918058],
            //                        [4.488635, 51.919233]
            //                    ]
            //                }
            //            }
            //        },
            //        "layout": {
            //            "line-join": "round",
            //            "line-cap": "round"
            //        },
            //        "paint": {
            //            "line-color": "#25cfdb",
            //            "line-width": 8
            //        }
            //    });
            //});
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