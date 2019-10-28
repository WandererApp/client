<template>
    <div id="authentication-container">
        <div id="authentication-modal">
            <div class="header">
                Welcome back
            </div>
            <div class="content">
                <Error>U heeft het verkeerde wachtwoord ingevoerd.</Error>
                <TextInput type="text" v-model="formData.username" placeholder="Your username" required="true"></TextInput>
                <TextInput type="password" v-model="formData.password" placeholder="Your password" required="true"></TextInput>
                <div class="utilities">
                    <router-link to="/">Forgot your password?</router-link>
                    <ButtonInput v-on:click.native="loginUser()" id="login-button">Sign in</ButtonInput>
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
        name: "Login",
        components: { Error, ButtonInput, TextInput },
        data() {
            return {
                formData: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            loginUser() {
                fetch('http://localhost:3916/api/account/login', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        username: this.formData.username,
                        password: this.formData.password
                    })
                }).then(result => {
                    localStorage.setItem('token', result.Token);
                    this.$router.push('/');
                });
            }
        }
    }
</script>

<style>
    /* REMOVE CODE DUPLICATION WITH REGISTER PAGE */
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

        #login-button {
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