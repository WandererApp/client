<template>
    <div id="authentication-container">
        <div id="authentication-modal">
            <div class="header"></div>
            <div class="content">
                <Error>U heeft het verkeerde wachtwoord ingevoerd.</Error>
                <form action="" method="post">
                    <TextInput type="email" placeholder="Your e-mail address" required="true"></TextInput>
                    <TextInput type="password" placeholder="Your password" required="true"></TextInput>
                    <div class="utilities">
                        <router-link to="/">Forgot your password?</router-link>
                        <ButtonInput id="login-button">Sign in</ButtonInput>
                    </div>
                </form>
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
        components: {Error, ButtonInput, TextInput},
        mounted() {
            const button = document.querySelector('#login-button');
            const email = document.querySelector('#username');
            const password = document.querySelector('#password');
            const data = {
                email: email,
                password: password
            };

            button.addEventListener('click', event => {
                event.preventDefault();

                fetch('', {
                    method: 'POST',
                    body: JSON.stringify(data)
                }).then(result => {
                    /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
                    console.log(result.json());
                });
            });
        }
    }
</script>

<style>
    @media (min-width: 374px) {
        #authentication-container {
            width: 100vw;
            height: 100vh;
            background-image: url(../../../../public/img/background.svg);
            background-repeat: no-repeat;
            background-position-y: bottom;
            background-position-x: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #authentication-modal {
            width: 100%;
            max-width: 340px;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 5px;
            border: 1px solid #e4e4e4;
        }

        .content .utilities {
            width: 100%;
            margin-top: 15px;
            display: flex;
            align-items: center;
        }

        .content .utilities a {
            color: #707070;
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
    }
</style>