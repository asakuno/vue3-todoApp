<script setup>
  import { usePostStore } from '../stores/post'
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'

  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

  fetchPosts()
</script>

<template>
  <main>
    <!-- loading が true であればロード中であることを表すメッセージを表示-->
    <div v-if="loading">
      <p>Loading posts...</p>
    </div>
    <!-- error が true であればエラーメッセージを表示 -->
    <div v-if="error">
      <p>{{ error.message }}</p>
    </div>
    <!-- 投稿を取得できたら、それぞれの投稿をループしてタイトルと本文を表示 -->
    <div v-if="posts">
      <div v-for="post in posts" :key="post.id">
        <!-- RouterLink で個々の投稿へのリンクを設定 -->
        <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </main>
</template>






