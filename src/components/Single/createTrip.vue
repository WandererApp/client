<template>
    <div>
        <div>
            <div class="centerBox row">
                <div class="inputRow vCenter">
                    <label>Name</label>
                    <TextInput id="name" class="input-field" v-model="formData.name" type="text" placeholder="Name" required="true" />
                </div>
            </div>
            <div class="centerBox row">
                <div class="inputRow vCenter">
                    <label>From</label>
                    <Datepicker id="from" class="input-field" v-model="formData.from" type="text" placeholder="From" required="true" />
                </div>
            </div>
            <div class="centerBox row">
                <div class="inputRow vCenter">
                    <label>To</label>
                    <Datepicker id="to" class="input-field" v-model="formData.to" type="text" placeholder="To" required="true" />
                </div>
            </div>
        </div>
        <div class="centerBox row">
            <div id="pinpointWrapper">
                <h3>Pinpoints</h3>
                <ul id="pinpointList">
                    <li v-for="(point, index) in formData.pinpoints" v-bind:key="point"><span class="deletePinpoint" @click="removePinpoint(index)">&times;</span><span>lat:{{point.lat}}</span><span>long:{{point.long}}</span></li>
                </ul>
            </div>
        </div>
        <div class="row" id="sendButtonBar" @click="createNewTrip()">
            <ButtonInput>Send</ButtonInput>
        </div>
    </div>
</template>

<script>
    import TextInput from "../Multi/Input/TextInput"
    import ButtonInput from "../Multi/Input/ButtonInput"
    import Datepicker from "vuejs-datepicker";

    export default {
        name: "modal",
        components: { ButtonInput, TextInput, Datepicker },
        props: {
            cords: Object
        },
        data() {
            return {
                formData: {
                    name: null,
                    from: null,
                    to: null,
                    pinpoints: this.cords
                }
            }
        },
        methods: {
            createNewTrip: function () {
                console.log(JSON.stringify(this.formData));
                fetch('http://localhost:3916/api/', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        name: this.formData.name,
                        from: this.formData.from,
                        to: this.formData.to,
                        pinpoints: this.formData.pinpoints,
                        token: localStorage.getItem('token')
                    })
                }).then(result => {

                });
            },
            removePinpoint: function (index) {
                this.formData.pinpoints.splice(index, 1);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

    .centerBox {
        display: flex;
        justify-content: center;
    }

    .vCenter {
        display: flex;
        align-items: center
    }

    div.row {
        padding: 4px 16px;
    }

        div.row:first-child {
            padding-top: 8px;
        }

        div.row:last-child {
            padding-bottom: 8px;
            margin-bottom: 16px;
        }

    .inputRow, #pinpointWrapper {
        width: 700px;
    }

        .inputRow * {
            display: inline-block;
        }

        .inputRow .input-field {
            width: 100%;
            max-width: 600px;
            margin-top: 16px;
            margin-bottom: 8px;
        }

            .inputRow .input-field::placeholder {
                visibility: hidden;
            }

        .inputRow label {
            width: 100px;
        }

    #pinpointWrapper {
        height: calc(87vh - 400px);
    }

    #pinpointList {
        list-style-type: none;
        padding-left: 0;
        margin-left: 100px;
        overflow-y: auto;
        height: calc(100% - 22px);
    }

        #pinpointList > * {
            display: flex;
            justify-content: space-between;
            background-color: #E8E8E8;
            padding: 8px 16px;
            margin-bottom: 4px;
        }

        #pinpointList > li > span {
            width: 40%;
            overflow: hidden;
        }

        #pinpointList > li > .deletePinpoint {
            width: unset;
            color: red;
        }

    #sendButtonBar {
        padding: 2px 16px;
    }

        #sendButtonBar button {
            float: right;
        }

        #sendButtonBar::after {
            content: "";
            display: table;
            clear: both;
        }

    @media (max-width: 767.98px) {
        .inputRow .input-field::placeholder {
            visibility: visible;
        }

        .inputRow label {
            display: none;
        }
    }
</style>
