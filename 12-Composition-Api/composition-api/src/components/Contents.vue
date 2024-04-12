<template>
    <div>
        <div v-for="content in contents" :key="content.id">
            <h1>{{ content.title }}</h1>
            <p>{{ content.details }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['contents'],
        setup(props){
            console.log(props.contents);
        }
    }
</script>

<style>

</style>