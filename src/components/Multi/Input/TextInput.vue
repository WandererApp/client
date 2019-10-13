<template>
    <input :type="type" :placeholder="placeholder" :required="required">
</template>

<script>
    export default {
        name: "TextInput",
        props: [
            'type',
            'placeholder',
            'required'
        ]
    }
</script>

<style scoped>
    @media (min-width: 374px) {
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
    }
</style>