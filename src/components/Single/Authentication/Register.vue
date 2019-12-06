<template>
    <div id="authentication-container">
        <AuthenticationHeader />
        <div id="authentication-modal">
            <div class="header">
                Become A Wanderer
            </div>
            <div class="content">
                <Error>That account already exists.</Error>
                <TextInput type="text" v-model="formData.username" placeholder="Username" required="true"></TextInput>
                <TextInput type="email" v-model="formData.email" placeholder="Email" required="true"></TextInput>
                <TextInput type="password" v-model="formData.password" placeholder="Password" required="true"></TextInput>
                <div class="utilities">
                    <router-link to="/signin"><u>LOG IN</u> INSTEAD</router-link>
                    <ButtonInput v-on:click.native="registerUser()" id="register-button">SIGN UP</ButtonInput>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextInput from "../../Multi/Input/TextInput";
    import ButtonInput from "../../Multi/Input/ButtonInput";
    import Error from "../../Multi/alerts/Error";
    import AuthenticationHeader from "../../Multi/AuthenticationHeader";

    export default {
        name: "Register",
        components: { Error, ButtonInput, TextInput, AuthenticationHeader },
        data() {
            return {
                formData: {
                    email: '',
                    password: '',
                    username: ''
                }
            }
        },
        methods: {
            registerUser() {
                fetch('http://localhost:3916/api/account/register', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        email: this.formData.email,
                        username: this.formData.username,
                        password: this.formData.password
                    })
                }).then(() => {
                    this.$router.push('/signin');
                });
            }
        }
    }
</script>

<style scoped>
    @media (min-width: 374px) {
        #authentication-container {
            width: 100vw;
            height: 100vh;
            background-image: url(../../../../public/img/background_authenticate.png);
            background-repeat: no-repeat;
            background-position-y: bottom;
            background-position-x: center;
            background-size: cover;
            display: flex;
            justify-content: center;
        }

        #authentication-modal {
            width: 100%;
            max-width: 376px;
            padding: 30px;
            border-radius: 5px;
        }

        #authentication-modal > .header {
            text-align: center;
            color: #ffffff;
            margin-bottom: 34px;
            margin-top: 220px;
            font-size: 36px;
        }

        .content .utilities {
            width: 100%;
            margin-top: 28px;
            display: flex;
            align-items: center;
        }

        .content .utilities a {
            color: #ffffff;
            text-decoration: none;
            font-size: 14px;
        }

        #register-button {
            margin-left: auto;
        }
    }

    @media (min-width: 1023px) {
        #authentication-modal {
            max-width: 400px;
        }

        .content .utilities a {
            font-size: 16px;
        }
    }
</style>