<template>
    <UContainer>
       <!-- <BaseNavigation /> -->
        <Navbar />
      
     <slot />
     <!-- <Footer /> -->
    </UContainer>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'light',
  },
  
});
</script>

<style scoped>

</style>