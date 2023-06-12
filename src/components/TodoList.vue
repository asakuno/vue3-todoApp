<script setup>
  import { storeToRefs } from 'pinia'
  import { useTodoListStore } from '@/stores/todoList';

  const store = useTodoListStore();

  const { todoItemList, isEmpty } = storeToRefs(store)
  const { deleteTodo } = store
</script>

<template>
  <p v-if="isEmpty">現在 To Do リストにアイテムはありません</p>
  <ol v-else class="todo-list">
    <li v-for="item in todoItemList" :key="item.id">
      <input type="checkbox" v-model="item.completed" />
      <span :class="{'completed': item.completed}">
        {{item.text}}
      </span>
      <button @click="deleteTodo(item.id)">削除</button>
    </li>
  </ol>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
.todo-list {
  padding-left: 1.5rem;
  margin-top: 10px;
}
.todo-list span {
  display: inline-block;
  margin: 0.25rem 1rem;
  min-width: 100px;
}
</style>