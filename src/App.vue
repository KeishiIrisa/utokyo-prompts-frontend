<script setup>
import LessonsListView from "@/components/templates/LessonsListView.vue";
import {onMounted, ref} from "vue";
import {useMainStore} from "@/store/MainStore.js";
import IconText from "@/components/parts/iconText.vue";

const mainStore = useMainStore();

async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:8000/users/all", {mode:"cors"});
    const data = await response.json();
    mainStore.setUsers(data)
  } catch (error) {
    console.log("Error:", error);
  }
}

async function getLessonsByUid(user) {
  mainStore.setUser(user);

  try {
    const response = await fetch(`http://localhost:8000/user-lesson/users/${user.id}`, {mode:"cors"});
    const data = await response.json()
    mainStore.setLessons(data)
  } catch (error) {
    console.log("Error:", error);
  }
}

onMounted(() => {
  fetchUsers();
});

</script>

<template>
  <div class="h-screen w-screen relative flex flex-col">
    <header class="h-16 bg-gray-200">
      <p v-if="mainStore.user === '' ">Who are you?</p>
      <p v-else>Hello {{mainStore.user.name}}!</p>
      <div class="flex overflow-x-auto text-white text-xs">
        <button class="p-0.5 bg-green-400 rounded-full w-30"  v-for="user in mainStore.users" :key="user.id" @click="getLessonsByUid(user)">{{user.name}}</button>
      </div>
    </header>
    <main class="flex h-full">
      <aside class="w-1/5 bg-gray-50">
        <router-link to="/">
          <IconText icon-name='homeIcon' button-text="Home" />
        </router-link>
        <IconText icon-name="lessonIcon" button-text="Lessons" />
        <LessonsListView :lessons="mainStore.lessons"></LessonsListView>
      </aside>
      <section class="w-4/5 bg-white">
        <router-view />
      </section>
    </main>
    <footer class="bg-gray-400">Footer</footer>
  </div>
</template>

<style>
#main-title {
  font-size: 40px;
  font-weight: 900;
}

#sub-title {
  font-size: 20px;
  font-weight: 600;
}

</style>
