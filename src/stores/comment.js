import { defineStore } from 'pinia'
//現在の投稿の ID を取得するために、投稿のストアをインポート（getPostComments で利用）
import { usePostStore } from './post'
 
export const useCommentStore = defineStore('comment',{
  state: () => ({
    //コメントの配列
    comments: [],
    loading: false,
    error: null
  }),
  getters: {
    //取得した全てのコメントで現在の投稿のコメントを取得
    getPostComments: (state) => {
      //投稿のストアのインスタンスを生成して、投稿の ID（postSore.post.id）を取得
      const postSore = usePostStore()
      //comments の各コメントの postId と投稿の ID が一致するものをフィルタして抽出
      return state.comments.filter((comment) => comment.postId === postSore.post.id)
    }
  },
  actions: {
    //全てのコメントを取得する非同期関数
    async fetchComments() {
      this.comments = []
      this.loading = true
      //JSONPlaceholder から fetch() を使って全てのコメントのリソースを取得
      try {
        this.comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})