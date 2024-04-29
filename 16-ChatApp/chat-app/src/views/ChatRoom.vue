<template>
    <div class="container">
        <Navbar></Navbar>
        <NewChatForm></NewChatForm>
    </div>
</template>

<script>
import NewChatForm from "../components/NewChatForm";
import Navbar from '../components/Navbar.vue';
import getUser from "../composables/getUser.js";
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
    components: { Navbar, NewChatForm },
    setup() {
        const { user } = getUser();
        const router = useRouter();

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'welcome' });
            }
        })
    }
};
</script>

<style></style>