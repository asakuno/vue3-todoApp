import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user",()=> {
  const users = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchUsers = async () => {
    users.value = [];
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users.value = await response.json();
    } catch (error) {
      error.value = error;
    } finally {
      loading.value = false;
    }
  }

  return { users, loading, error, fetchUsers }
})