<template>
    <header>
        <div class="inner">
            <img src="img/logo_text.svg">
            <div class="menu">
                <div id="loginMenu" v-if="!isAuthenticated">
                    <router-link to="/signin">LOG IN</router-link>
                    <div id="loginDivider"></div>
                    <router-link to="/signup">SIGN UP</router-link>
                </div>
                <a href="#" v-if="isAuthenticated" v-on:click="logout()">LOG OUT</a>
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
            $route: function () {
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
    }

    header .inner .menu {
        margin-left: auto;
    }

    header .inner .menu img {
        height: 24px;
    }

    header .inner .menu #loginMenu {
        display: flex;
        align-items: center;
    }

    header .inner .menu #loginMenu #loginDivider {
        width: 1px;
        height: 16px;
        background-color: #45C879;

        margin-left: 8px;
        margin-right: 8px;
    }

    header .inner .menu a {
        color: #45C879;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    @media (min-width: 1023px) {
        #bars {
            display: none;
        }
    }
</style>