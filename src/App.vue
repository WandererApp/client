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
            setForm: function (form, title, props) {
                this.form = { component: form, title: title, props: props };
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
</style>
