<script setup>
  import { useCommentStore } from '../stores/comment'
  import { storeToRefs } from 'pinia'

  const { loading, error } = storeToRefs(useCommentStore())
  defineProps(['comments'])
</script>

<template>
  <div>
    <p v-if="loading">Loading comments...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="comments">
      <div v-for="comment in comments" :key="comment.id">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>