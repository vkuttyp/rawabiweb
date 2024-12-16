<script setup lang="ts">
const { locale } = useI18n()
const lang = computed(() => locale.value);
const path=lang.value==='en' ? '/blogs': '/blogs/'+lang.value;

const { data: home } = await useAsyncData(() => queryCollection("blogs").path(path).first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
