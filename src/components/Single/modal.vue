<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Modal Header</h2>
                <button @click="$emit('close')">close</button>
            </div>
            <div class="modal-body">
                <component v-bind:is="form" />
            </div>
            <div class="modal-footer">
                <h3>Modal Footer</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal",
        props: {
            form: Object
        }
    }
</script>

<style scoped>
    .modal{
        z-index:10000;
    }
</style>
