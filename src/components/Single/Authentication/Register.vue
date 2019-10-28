<template>
    <div id="authentication-container">
        <div id="authentication-modal">
            <div class="header">
                Become a wanderer
            </div>
            <div class="content">
                <Error>U heeft het verkeerde wachtwoord ingevoerd.</Error>
                <TextInput type="text" v-model="formData.username" placeholder="Your name" required="true"></TextInput>
                <TextInput type="email" v-model="formData.email" placeholder="Your e-mail address"
                           required="true"></TextInput>
                <TextInput type="password" v-model="formData.password" placeholder="Your password"
                           required="true"></TextInput>
                <div class="utilities">
                    <router-link to="/signin">Sign in instead?</router-link>
                    <ButtonInput v-on:click.native="registerUser()" id="register-button">Sign up</ButtonInput>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextInput from "../../Multi/Input/TextInput";
    import ButtonInput from "../../Multi/Input/ButtonInput";
    import Error from "../../Multi/alerts/Error";

    export default {
        name: "Register",
        components: {Error, ButtonInput, TextInput},
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
                console.log(this.formData);
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
                }).then(result => {
                    /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
                    console.log(result.json());
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
            background-image: url(../../../../public/img/background.jpg);
            background-repeat: no-repeat;
            background-position-y: bottom;
            background-position-x: center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #authentication-modal {
            width: 100%;
            max-width: 340px;
            padding: 30px;
            border-radius: 5px;
        }

        #authentication-modal > .header {
            text-align: center;
            color: #ffffff;
            margin-bottom: 15px;
            font-size: 24px;
        }

        .content .utilities {
            width: 100%;
            margin-top: 15px;
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

        #authentication-modal > .header {
            font-size: 30px;
        }

        .content .utilities a {
            font-size: 16px;
        }
    }
</style>