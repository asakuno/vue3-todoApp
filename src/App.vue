<script setup>
  //import TodoApp from './components/TodoApp.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/todo">Todo</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView /><!-- この部分に現在のパスにマッチしたコンポーネントが描画される -->
</template>

<style scoped>
/* 現在のページに完全に一致するアクティブなリンクを表すクラス */
.router-link-exact-active {
  opacity: 0.5;
  pointer-events: none;
}
ul {
  display: flex;
}
li {
  margin-right:2rem;
  list-style-type: none;
}
</style>