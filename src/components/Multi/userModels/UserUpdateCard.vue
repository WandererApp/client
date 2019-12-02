<template>
    <div class="item" data-id="1" @click="">
        <div class="header">
            <div class="left">
                <img src="profilePicture">
            </div>
            <div class="right">
                <h5>{username}</h5>
                <small>2 hours ago</small>
            </div>
        </div>
        <div class="content">
            {content}
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserUpdateCard",
        props: [
            'id',
            'username',
            'profilePicture',
            'postTime',
            'content',
        ],
        methods: {
            getTrip: function() {

            }
        },
        created: {

        }
    }
</script>

<style scoped>

</style>