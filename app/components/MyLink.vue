<script setup lang="ts">
// defineProps(["to"])
// const { to } = defineProps(['to'])
const { to } = defineProps<{ to: string }>();
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(to)"><slot /></NuxtLink>
</template>