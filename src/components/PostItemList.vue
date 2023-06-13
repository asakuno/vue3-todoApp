<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia';
  import { useCommentStore } from '../stores/comment'
  import CommentList from './CommentList.vue'

  defineProps(['post', 'user'])
  const { getPostComments } = storeToRefs(useCommentStore())
  const { fetchComments } = useCommentStore()

  fetchComments()
</script>

<template>
  <div>
    <div>
      <!-- 投稿のタイトルを出力 -->
      <h2>{{ post.title }}</h2>
      <!-- props の user（ユーザー）が取得できていれば -->
      <p v-if="user">Written by:
        <!-- ユーザー名にそのユーザーの個別ページのリンクを設定して出力 -->
        <RouterLink :to="`/user/${user.username}`">
          {{ user.name }}
        </RouterLink>
          <!-- getPostComments で取得したコメントを出力 -->
        | <span>Comments: {{ getPostComments.length }}</span>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr>
    <h3>Comments:</h3>
    <!-- CommentList コンポーネントでコメントを出力 -->
    <!-- カスタム属性 comments で getPostComments で取得したコメントを props に渡す -->
    <CommentList :comments="getPostComments"></CommentList>
  </div>
</template>