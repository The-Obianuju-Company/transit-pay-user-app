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
  colorMode.preference = "corporate";
})

</script>
