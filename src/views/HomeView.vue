<script setup>
import {onMounted, ref} from 'vue';

const new_user_name = ref("");

async function addUser() {
  try {
    const response = await fetch(`http://localhost:8000/users/${new_user_name.value}`, {
      mode: "cors",
      method: "POST"
    });
    // if (!response.pk) {
    //   throw new Error("Network response was not OK");
    // }
    const text = await response.text();
    console.log(text);
    new_user_name.value = "";
    await fetchUsers();
  } catch (error) {
    console.log("Error:", error);
  }
}

</script>

<template>
      <h1 id="main-title" class="text-red-600">Home Page</h1>
      <form @submit.prev
            ent="addUser">
        <input v-model="new_user_name" required placeholder="new user name">
        <button>追加</button>
      </form>
      <table class="table-auto">
        <thead>
        <tr>
          <th>id</th>
          <th>ユーザー名</th>
          <th>登録日</th>
          <th>授業一覧</th>
        </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id">
        <tr>
          <th>{{ user.id }}</th>
          <th>{{ user.name }}</th>
          <th>{{ user.created_at }}</th>
          <th><button @click="getLessonsByUid(user)">😀</button></th>
        </tr>
        </tbody>
      </table>
</template>

<style>

</style>