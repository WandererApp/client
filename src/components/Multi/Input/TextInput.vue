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
        background-color: #E8E8E8;
        height: 56px;
        padding-left: 16px;
        padding-right: 16px;
        outline: 0;
        border: none;
        margin-bottom: 20px;
        font-size: 16px;
    }

    input::placeholder {
        color: rgba(0,0,0,.6)
    }

    input:last-of-type {
        margin-bottom: 0;
    }
</style>