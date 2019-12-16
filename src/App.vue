<template>
    <div id="app" class="bg-img-mounten">
        <Navigation></Navigation>
        <router-view></router-view>
        <Modal v-if="showModal" :form="form" @close="showModal = false">
        </Modal>
    </div>
</template>

<script>
    import Navigation from "./components/Multi/Navigation";
    import Modal from "./components/Single/modal"

    export default {
        name: 'app',
        components: { Navigation, Modal },
        data() {
            return {
                form: null,
                showModal: false
            }
        },
        methods: {
            setForm: function (form) {
                this.form = form;
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;
    }

    /* The Modal (background) */
    .modal {
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }


    /* Modal Header */
    .modal-header {
        padding: 2px 16px;
        background-color: #5cb85c;
        color: white;
    }

    /* Modal Body */
    .modal-body {
        padding: 2px 16px;
    }

    /* Modal Footer */
    .modal-footer {
        padding: 2px 16px;
        background-color: #5cb85c;
        color: white;
    }

    /* Modal Content */
    .modal-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        animation-name: animatetop;
        animation-duration: 0.4s
    }

    /* Add Animation */
    @keyframes animatetop {
        from {
            top: -300px;
            opacity: 0
        }

        to {
            top: 0;
            opacity: 1
        }
    }
</style>
