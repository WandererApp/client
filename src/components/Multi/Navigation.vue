<template>
    <header>
        <div class="inner">
            <img src="img/logo.svg">
            <div class="menu">
                <a href="#" v-if="isAuthenticated" v-on:click="logout()">Sign out</a>
                <img src="img/ic_menu.svg" id="bars">
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                isAuthenticated: (window.localStorage.getItem('token') !== null)
            };
        },
        methods: {
            logout() {
                window.localStorage.removeItem('token');
                this.isAuthenticated = false;
                this.$router.push('/signin');
            }
        },
        watch: {
            $route: function() {
                this.isAuthenticated = window.localStorage.getItem('token') !== null;
            }
        }
    }
</script>

<style scoped>
    header {
        background-color: #ffffff;
        border-bottom: 1px solid #e4e4e4;
        position: fixed;
        width: 100vw;
        height: 60px;
        z-index: 999;
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        align-items: center;
    }

    header .inner {
        width: 100%;
        display: flex;
        align-items: center;
    }

    header .inner img {
        height: 40px;
        margin-top: 3px;
    }

    header .inner .menu {
        margin-left: auto;
    }

    header .inner .menu img {
        height: 32px;
    }

    @media (min-width: 1023px) {
        #bars {
            display: none;
        }
    }
</style>