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

export default {

    setup(props) {
        const {contents, err, getContents} = getContentsFetch();

        getContents();

        return { contents, err };
    }
}
</script>

<style></style>