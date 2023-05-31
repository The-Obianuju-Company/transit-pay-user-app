<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   colorMode: 'dark',
// })
const colorMode = useColorMode();

onMounted(() => {
  setTimeout(() => {
  colorMode.preference = "corporate";

  },1000)
})

</script>
