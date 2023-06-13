import { defineStore } from "pinia";
import { ref } from 'vue';

export const usePostStore = defineStore('post', () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchPosts = async () => {
    posts.value = [];
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      posts.value = await response.json();
    } catch (error) {
      error.value = error;
    } finally {
      loading.value = false;
    }
  }

  return { posts, loading, error, fetchPosts }
})