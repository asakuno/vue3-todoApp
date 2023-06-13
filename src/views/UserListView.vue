<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '../stores/user'

  // useUserStore から users, loading, error を取得
  const { users, loading, error } = storeToRefs(useUserStore())
  // useUserStore から fetchUsers を取得
  const { fetchUsers } = useUserStore()

  // 全てのユーザーのデータを取得
  fetchUsers()
</script>

<template>
  <main>
    <p v-if="loading">Loading users...</p>
    <p v-if="error">{{ error.message }}</p>
    <!-- ユーザーを取得できたら、それぞれのユーザーをループしてタイトルと本文を表示 -->
    <div v-if="users">
      <div v-for="user in users" :key="user.id">
        <!-- RouterLink で個々のユーザーへのリンク（/user/ユーザー名）を設定 -->
        <RouterLink :to="`/user/${user.username}`">{{ user.name }}</RouterLink>
      </div>
    </div>
  </main>
</template>