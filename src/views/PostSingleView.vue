<script setup>
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '../stores/user'
  import { usePostStore } from '../stores/post'
  import PostItemList from '../components/PostItemList.vue'

  const route = useRoute()
  const { getPostUser } = storeToRefs(useUserStore())
  const { fetchUsers } = useUserStore()
  const { post, loading, error } = storeToRefs(usePostStore())
  const { fetchPost } = usePostStore()

  fetchUsers()
  fetchPost(route.params.id)
</script>

<template>
  <div>
    <p v-if="loading">Loading post...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="post">
      <PostItemList :post="post" :user="getPostUser"></PostItemList>
    </div>
  </div>
</template>