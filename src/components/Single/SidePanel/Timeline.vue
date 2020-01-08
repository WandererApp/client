<template>
    <div>
        <div v-if="!userProfile" id="container">
            <div class="search">
                <SearchInput type="text" placeholder="Find wanderers" v-on:input="search($event)" />
            </div>
            <UserDisplayCard id="userList" class="timeline" v-for="user in users" :user="user" />
        </div>
        <profileView v-if="userProfile" :user="userProfile" />
    </div>
</template>

<script>
    import SearchInput from "../../Multi/Input/SearchInput";
    import HorizontalProfileView from "../../Multi/profile/HorizontalProfileView";
    import UserDisplayCard from "../../Multi/userModels/UserDisplayCard";
    import ProfileView from "../../Single/SidePanel/Profile";

    export default {
        name: "Timeline",
        components: { HorizontalProfileView, SearchInput, UserDisplayCard, ProfileView },
        data() {
            return {
                userProfile: null,
                users: []
            };
        },
        methods: {
            search: function (value) {
                this.getUsers(value).then(result => {
                    result.json().then(data => {
                        var _userList = [];
                        for (var i = 0; i < data.length; i++) {
                            var user = {
                                id: data[i].Id,
                                username: data[i].Username,
                                profilePicture: "img/background.jpg",
                                joined: new Date(Date.now())
                            }
                            _userList.push(user);
                        }
                        this.users = _userList;
                    });
                });
            },
            getUsers: function (value) {
                return fetch('http://localhost:3916/api/account/Search/' + (value ? value : ''), {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                })
            },
            getProfile: function (userId) {
                fetch('http://localhost:3916/api/account/GetUserModel/' + userId + '/' + localStorage.getItem('token'), {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(result => {
                    result.json().then(data => {
                        var user = {
                            id: data.Id,
                            username: data.Username,
                            joined: new Date(Date.now()),
                            isFollowing: data.IsFollowing
                        }
                        this.userProfile = user;
                    })
                });
            },
            getFollowedUsers: function () {
                fetch('http://localhost:3916/api/account/SearchFollowers/' + localStorage.getItem('token'), {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(result => {
                    result.json().then(data => {
                        var _userList = [];
                        for (var i = 0; i < data.length; i++) {
                            var user = {
                                id: data[i].Id,
                                username: data[i].Username,
                                profilePicture: "img/background.jpg",
                                joined: new Date(Date.now())
                            }
                            _userList.push(user);
                        }
                        this.users = _userList;
                    });
                });
            }
        },
        mounted() {
            this.getFollowedUsers();
        }
    }

</script>

<style scoped>
    #container {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 15px;
    }

        #container .search {
            width: 100%;
        }

        #container .timeline {
            width: 100%;
            margin-top: 15px;
        }

            #container .timeline .item {
                margin-bottom: 30px;
            }

                #container .timeline .item .content {
                    font-size: 14px;
                    margin-top: 10px;
                }

    @media (min-width: 1023px) {
        #container {
            width: 400px;
            flex-shrink: 0;
            flex-grow: 0;
            border-right: 1px solid #e4e4e4;
        }
    }
</style>