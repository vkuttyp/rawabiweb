<template>
    <div class="text-white mb-0 bg-black">
        <div class="container">
            <div class="grid md:grid-cols-3 pv-44 pt-5">
                <div class="py-8 px-4">
                   
                    <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" densities="x1" src="/logo.png" alt=""
        format="webp" />
        <span class="text-3xl font-bold">Rawabi Company</span>
      </NuxtLink>
                    <p>Baljurash, Al-Baha</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const footerLinks=ref([
    {
        id: 1,
        title: 'home',
        to: ''
    },
    {
        id: 2,
        title: 'about',
        to: ''
    },
])
</script>

<style scoped>

</style>