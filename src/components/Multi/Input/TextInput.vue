<template>
    <input :type="type" :placeholder="placeholder" :required="required" v-on:input="updateValue($event.target.value)">
</template>

<script>
    export default {
        name: "TextInput",
        props: [
            'type',
            'placeholder',
            'required'
        ],
        methods: {
            updateValue: function (value) {
                this.$emit('input', value)
            }
        }
    }
</script>

<style scoped>
    input {
        width: 100%;
        background-color: #ffffff;
        height: 50px;
        padding-left: 15px;
        padding-right: 15px;
        outline: 0;
        border: 1px solid #e4e4e4;
        margin-bottom: 15px;
        border-radius: 5px;
    }

    input:last-of-type {
        margin-bottom: 0;
    }
</style>