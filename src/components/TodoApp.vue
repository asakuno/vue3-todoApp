<script setup>
  import TodoForm from './TodoForm.vue'
  import TodoList from './TodoList.vue'

  import { provide, ref, computed } from 'vue'

  const todoId = ref(0)

  const todoItemList = ref([
  ])
  provide('todoItemList', todoItemList)

  const isEmpty = computed(() =>{
    return todoItemList.value.length === 0
  });
  provide('isEmpty', isEmpty)

  const addTodo = (text) => {
    todoItemList.value.push({
      text: text,
      id: todoId.value++,
      completed: false
    });
  }
  provide('addTodo', addTodo)

  const deleteTodo = (id) => {
    todoItemList.value = todoItemList.value.filter((object) =>{
      return object.id !== id
    })
  }
  provide('deleteTodo', deleteTodo)
  </script>

<template>
  <h1>To Do List</h1>
  <div id="todo-container">
    <TodoForm @add-item="addTodo" />
    <TodoList
      :todo-item-list="todoItemList"
      :is-empty="isEmpty"
      @delete-item="deleteItem"
    />
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