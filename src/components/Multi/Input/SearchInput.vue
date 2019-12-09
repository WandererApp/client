<template>
    <div class="searchContainer">
        <input :type="type" :placeholder="placeholder" :required="required" v-on:input="updateValue($event.target.value)">
        <img src="img/ic_search.svg"/>
    </div>
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
    .searchContainer {
        position: relative;
    }

    .searchContainer input {
        width: 100%;

        padding-right: 32px;
        padding-left: 16px;
        padding-top: 16px;
        padding-bottom: 16px;

        border: 1px solid rgba(25, 25, 25, .32);
        border-radius: 32px;

        margin-bottom: 20px;
        font-size: 16px;
    }

    .searchContainer input::placeholder {
        color: rgba(0, 0, 0, .6)
    }

    .searchContainer img {
        position: absolute;
        top: 16px;
        right: 16px;
        bottom: 16px;
    }
</style>