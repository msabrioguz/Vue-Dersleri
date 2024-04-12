<template>
  <div class="home">
    <input type="text" v-model="search">
    <div v-for="day in finded" :key="day">
      {{ day }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'HomeView',
  components: {},
  setup() { 
    const days = ref(['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar']);
    const search = ref('');
    const finded = computed(() => {
      return days.value.filter((day) => day.includes(search.value)) 
    })

    return {days, search, finded};
  }
}
</script>
