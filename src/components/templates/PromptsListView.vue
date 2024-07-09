<script setup>
const props = defineProps({
  prompts: Array,
})

const emit = defineEmits(["select-prompt"])

const selectPrompt = (prompt) => {
  emit("select-prompt", prompt);
}
</script>

<template>
  <ul>
    <li v-for="prompt in prompts" :key="prompt.id">
      <button @click="selectPrompt(prompt)">{{prompt.content}}</button>
    </li>
  </ul>
</template>

<style scoped>

</style>