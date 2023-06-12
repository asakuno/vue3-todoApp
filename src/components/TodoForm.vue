<script setup>
  import { ref } from 'vue';
  import { useTodoListStore } from '@/stores/todoList'

  const todoText = ref("");

  const store = useTodoListStore();

  const addItem = (text) => {
    if(text.length === 0) return
    store.addTodo(text)
    todoText.value= ''
  }
</script>

<template>
  <form @submit.prevent="addItem(todoText)">
    <input type="text" v-model="todoText">
    <button>追加</button>
  </form>
</template>

<style scoped>
  form input {
    min-width: 200px;
  }
</style>