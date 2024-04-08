<template>
  <form @submit.prevent="sendData">
    <input type="text" v-model="text">
    <p>{{ text }}</p>
    <select v-model="framework">
        <option value="1">Vue</option>
        <option value="2">React</option>
        <option value="3">Svelte</option>
        <option>Laravel</option>
    </select>
    <p>{{ framework }}</p>
    <hr>
    <input type="checkbox" id="checkbox1" v-model="checked">
    <label for="checkbox1">Onay</label>
    <p>Sonuç: {{ checked ? 'Onaylıyorum' : 'Onaylamıyorum' }}</p>
    <div>
        <input type="checkbox" id="vue" value="vue" v-model="frameworks">
        <label for="vue">vue</label>
    </div>
    <div>
        <input type="checkbox" id="react" value="react" v-model="frameworks">
        <label for="react">react</label>
    </div>
    <div>
        <input type="checkbox" id="svelte" value="svelte" v-model="frameworks">
        <label for="svelte">svelte</label>
    </div>
    <div>
        <p>Seçilen Frameworkler: {{ frameworks }}</p>
    </div>
    <hr>
    <h3>Öğrenciler</h3>
    <input type="text" v-model="student" @keyup.alt="addStudent">
    <div v-for="student in students" :key="student">
        <span @click="deleteStudent(student)">{{ student }}</span>
    </div>
    <br>
    <button>Gönder</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            text: 'Bir metin yazın',
            framework: 'Bir framework seçin.',
            checked: false,
            frameworks: [],
            student: '',
            students: [],
        }
    },
    methods: {
        addStudent(e){
            if(e.key == ',' && this.student){
                if(!this.students.includes(this.student)){
                    this.students.push(this.student);
                }
                this.student = '';
            }
        },
        deleteStudent(student){
            this.students = this.students.filter(item => student !== item);
        },
        sendData(){
            console.log('Veriler Gönderildi.');
        },
    },
}
</script>

<style>

</style>