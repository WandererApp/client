<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>{{form.title}}</h2>
                <button id="closeButton" @click="$emit('close')">&times;</button>
            </div>
            <div class="modal-body">
                <component v-bind:is="form.component" v-bind="form.props" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal",
        props: {
            form: {
                title: '',
                component: Object,
                props: Object
            }
        }
    }
</script>

<style scoped>
    /* The Modal (background) */
    .modal {
        z-index: 10000;
        position: fixed; /* Stay in place */
        /*center de content of de modal*/
        display: flex;
        align-items: center;
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
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding: 8px 16px;
        background-color: #5cb85c;
        color: white;
    }

    .modal-header > *{
        display:inline-block
    }

    #closeButton{
        box-sizing:content-box;
        height:16px;
        width:8px;
        padding:3px 7.5px;
        border:0;
        border-radius:22px;
        background-color:white;
        color:#5cb85c;
    }

    #closeButton:focus, #closeButton:hover {
        box-shadow: inset 0 0 6px #00000033;
    }

    /* Modal Body */
    .modal-body {
        padding: 2px 16px;
        max-width: calc(100% - 32px);
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
        max-height: 87vh;
        width: 80%;
        overflow-y: auto;
        overflow-x: hidden;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        animation-name: animatetop;
        animation-duration: 0.4s;
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
