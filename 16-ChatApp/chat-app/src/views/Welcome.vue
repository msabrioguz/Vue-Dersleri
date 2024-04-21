<template>
    <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">
            <h2>Login</h2>
            <LoginForm></LoginForm>
            <p>No account yet? <span @click="showLogin = false">Signup</span></p>
        </div>
        <div v-else="showLogin">
            <h2>Singup</h2>
            <SingupForm></SingupForm>
            <p>Already registered? <span @click="showLogin = true">Login</span></p>
        </div>
    </div>
</template>

<script>
import SingupForm from "../components/SingupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
export default {
    components: { SingupForm, LoginForm },
    setup(){
        const showLogin = ref(true);

        return { showLogin };
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label{
    display: block;
    margin: 20px 0 10px;
}
.welcome input{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ddd;
    outline:none;
    color: #777;
    margin: 10px auto;
}
.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button{
    margin: 20px auto;
}
</style>