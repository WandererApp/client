<template>
    <div id="authentication-container">
        <AuthenticationHeader />
        <div id="authentication-modal">
            <div class="header">
                Welcome Back
            </div>
            <div class="content">
                <Error>You entered the wrong password.</Error>
                <TextInput type="text" v-model="formData.username" placeholder="Username" required="true"></TextInput>
                <TextInput type="password" v-model="formData.password" placeholder="Password" required="true"></TextInput>
                <router-link to="/forgotPassword" class="forgotPassword"><u>Forgot your password?</u></router-link>
                <div class="utilities">
                    <router-link to="/signup"><u>SIGN UP</u> INSTEAD</router-link>
                    <ButtonInput v-on:click.native="loginUser()" id="login-button">LOG IN</ButtonInput>
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
        name: "Login",
        components: { Error, ButtonInput, TextInput, AuthenticationHeader },
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
                    result.json().then(data => {
                        window.localStorage.setItem('token', data.Token);
                        this.$router.push('/');
                    });
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

        .content .forgotPassword {
            font-size: 12px;
            color: #ffffff;
            display: flex;
            justify-content: flex-end;
            margin-top: 4px;
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

        #login-button {
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