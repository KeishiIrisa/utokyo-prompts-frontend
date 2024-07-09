<script setup>
const props = defineProps({
  prompt: Object
})
</script>

<template>
  <h1>プロンプトの詳細</h1>
  <p>>> {{prompt.content}}</p>
</template>

<style scoped>

</style>