<template>
    <div class="error">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style scoped>
    .error {
        width: 100%;
        color: #721c24;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        padding: 16px;
        font-size: 14px;
        border-radius: 5px;
        margin-bottom: 15px;
    }
</style>