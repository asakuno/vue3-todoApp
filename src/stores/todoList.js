import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useTodoListStore = defineStore('todoList', () => {

  const todoItemList = ref([])

  const todoId = ref(0)

  const isEmpty = computed( () => todoItemList.value.length === 0 )

  const addTodo = (text) => {
    todoItemList.value.push({
      text,
      id: todoId.value++,
      completed: false
    })
  }

  const deleteTodo = (id) => {
    todoItemList.value = todoItemList.value.filter((object) => {
      return object.id !== id
    })
  }

  return { todoItemList, todoId, isEmpty, addTodo, deleteTodo }
})
