<template>
    <div id="authentication-container">
        <AuthenticationHeader />
        <div id="authentication-modal">
            <div class="header">
                Reset Password
            </div>
            <div class="content">
                <TextInput type="email" v-model="formData.email" placeholder="Email" required="true"></TextInput>
                <div class="utilities">
                    <ButtonInput v-on:click.native="resetPassword()" id="reset-button">SEND RESET LINK</ButtonInput>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextInput from "../../Multi/Input/TextInput";
    import ButtonInput from "../../Multi/Input/ButtonInput";
    import AuthenticationHeader from "../../Multi/AuthenticationHeader";

    export default {
        name: "ForgotPassword",
        components: { ButtonInput, TextInput, AuthenticationHeader },
        data() {
            return {
                formData: {
                    email: ''
                }
            }
        },
        methods: {
            resetPassword() {
                //todo
                // fetch('http://localhost:3916/api/account/register', {
                //     method: 'POST',
                //     headers: new Headers({
                //         'Content-Type': 'application/json'
                //     }),
                //     body: JSON.stringify({
                //         email: this.formData.email,
                //         username: this.formData.username,
                //         password: this.formData.password
                //     })
                // }).then(() => {
                //     this.$router.push('/signin');
                // });
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
        }

        .content .utilities a {
            color: #ffffff;
            text-decoration: none;
            font-size: 14px;
        }

        #reset-button {
            width: 100%;
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