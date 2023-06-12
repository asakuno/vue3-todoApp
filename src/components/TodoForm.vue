<script setup>
  import { inject, ref } from 'vue';

  const todoText = ref("");

  const addTodo = inject('addTodo');

  const addItem = () => {
    if (!todoText.value) return
    addTodo(todoText.value)
    todoText.value = ''
  }
</script>

<template>
  <form @submit.prevent="addItem">
    <input type = "text" v-model="todoText">
    <button>追加</button>
  </form>
</template>

<style scoped>
  form input {
    min-width: 200px;
  }
</style>