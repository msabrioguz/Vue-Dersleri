<template>
  <div class="home">
    <Contents></Contents>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue';
import Contents from '../components/Contents.vue';

export default {
  name: 'HomeView',
  components: {
    Contents
  },
}
</script>
