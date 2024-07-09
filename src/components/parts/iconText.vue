<script setup>
import {computed} from "vue";
import {defineAsyncComponent} from "vue";

const props = defineProps({
  iconName: String,
  buttonText: String
})

const IconComponent = computed(() => {
  if (props.iconName) {
    return defineAsyncComponent(() => import(`@/components/icons/${props.iconName}.vue`));
  }
  return null;
});
</script>

<template>
  <div class="flex justify-items-start items-center gap-1">
    <component :is="IconComponent" />
    <span>{{buttonText}}</span>
  </div>
</template>

<style scoped>

</style>