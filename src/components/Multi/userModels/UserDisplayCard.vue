<template>
    <div class="item" @click="getTrip($id)">
        <div class="header">
            <div class="left">
                <img :src="profilePicture">
            </div>
            <div class="right">
                <h5>{{username}}</h5>
				<small>{{joined}}</small>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        name: "UserDisplayCard",
        props: [
            'id',
            'username',
            'profilePicture',
			'joined'
        ],
        methods: {
            getTrips(id) {
                fetch('http://localhost:3916/api/trips/GetTrips', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        userId: id
                    })
                }).then(result => {
                    result.json().then(data => {
						
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>