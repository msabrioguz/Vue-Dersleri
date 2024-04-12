<template>
    <div>
        <div v-for="content in contents" :key="content.id">
            <h3>{{ content.title }}</h3>
            <p>{{ content.body }}</p>
        </div>
        <div v-if="err">
            {{ err }}
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import getContentsFetch from "../composables/getContentsFetch.js";
import { useRoute, useRouter } from "vue-router";

export default {

    setup(props) {

        const route = useRoute();
        const router = useRouter();

        console.log('Route: ', route);
        console.log('Router: ', router);

        const {contents, err, getContents} = getContentsFetch();
        getContents();
        return { contents, err };
    }
}
</script>

<style></style>