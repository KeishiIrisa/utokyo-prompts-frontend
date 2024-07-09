<script setup>

const props = defineProps({
  lessons: Array
})

</script>

<template>
  <ul>
    <li v-for="lesson in lessons" :key="lesson.id">
      <router-link :to="`/prompts/?lessonid=${lesson.id}`">↪︎{{lesson.name}}</router-link>
    </li>
  </ul>
</template>

<style>
</style>