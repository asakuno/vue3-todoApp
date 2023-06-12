<script setup>
  import TodoForm from './TodoForm.vue'
  import TodoList from './TodoList.vue'
</script>

<template>
  <h1>To Do List</h1>
  <div id="todo-container">
    <TodoForm />
    <TodoList />
  </div>
</template>

<style scoped>
h1 {
  color: green;
}
#todo-container {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>