<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import PromptsListView from "@/components/templates/PromptsListView.vue";
import {useMainStore} from "@/store/MainStore.js";

const route = useRoute()
const prompts = ref([])
const current_prompt = ref("")
const mainStore = useMainStore();

async function getPromptsByUidAndLessonid(user_id, lesson_id) {
  try {
    const response = await fetch(`http://localhost:8000/prompts/users/${user_id}/lessons/${lesson_id}`, {
      mode: "cors",
      method: "GET"
    });
    const data = await response.json();
    prompts.value = data;
  } catch (error) {
    console.log("Error", error);
  }
}

onMounted(() => {
  const lessonId = route.query.lessonid
  if (mainStore.user) {
    getPromptsByUidAndLessonid(mainStore.user.id, lessonId);
  }

})
</script>

<template>
  <p id="main-title">Your prompts</p>
  <prompts-list-view :prompts="prompts" @select-prompt="prompt => (current_prompt = prompt)"></prompts-list-view>
</template>

<style>

</style>