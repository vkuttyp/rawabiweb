<template>
    <div>
       <!-- <BaseNavigation /> -->
        <Navbar />
      
     <slot />
     <!-- <Footer /> -->
    </div>
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