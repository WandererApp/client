<template>
    <div>
        <TextInput id="input" type="text" placeholder="Name" required="true" />
        <ButtonInput id="button">Send</ButtonInput>
    </div>
</template>

<script>
    import TextInput from "../Multi/Input/TextInput"
    import ButtonInput from "../Multi/Input/ButtonInput"

    export default {
        name: "modal",
        components: {ButtonInput, TextInput},
    }
</script>

<style scoped>

    div {
        padding: 16px;
    }

    #input {
        width: 100%;
        max-width: 600px;

        margin-top: 16px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 8px;

        display: block;
    }

    #button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
    }
</style>
