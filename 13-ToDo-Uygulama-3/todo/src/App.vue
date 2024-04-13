<template>
  <div class="content mx-5">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <div class="field">
        <div class="control">
          <label for="deneme">Deneme:
            <input type="text" id="deneme" v-model="todo" class="input" placeholder="Todo Girin">
          </label>
        </div>
      </div>
      <button type="submit" class="button is-warning">Ekle</button>
    </form>
    <div class="card m-5" v-for="todo in todos" :key="todo.id">
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <p class="title cursor" @click="done(todo)"
            @keydown="done(todo)" :class="{ done: todo.done }">
              {{ todo.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
/* eslint-disable */
export default {
  setup() {
    const todo = ref('');
    const todos = ref([]);

    function addTodo() {
      todos.value.push({
        done: false,
        content: todo.value,
        id: Date.now(),
      });
      todo.value = '';
    }

    function done(todo) {
      todo.done = !todo.done;
    }
    return { todo, todos, addTodo, done };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.done {
  text-decoration: line-through;
}

.cursor {
  cursor: pointer;
}
</style>
