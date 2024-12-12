<template>
  <UContainer>
    <UCard class="mt-10">
     
      <UCarousel v-slot="{ item }" dots loop :autoplay="{ delay: 2000 }" :items="items" class="w-full  mb-6">
        <div class="flex gap-3 wrapper">
          <div class="box box3">
            <img :src="item.img" width="auto" height="320" class="rounded-lg" >
          </div>
          <div>
            <h2 class="text-xl font-bold">{{ item.description }}</h2>
          </div>
        </div>
        
      </UCarousel>
      <template #footer>
        <!-- <UButton icon="i-lucide-book-open" to="https://ui3.nuxt.dev" target="_blank">Open Nuxt UI v3 Documentation</UButton> -->
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">

const items = ref([
  {
    id: 1,
    img: "/products/1.jpeg",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
  {
    id: 2,
    img: "/products/2.jpeg",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
  {
    id: 3,
    img: "/products/3.jpeg",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
  {
    id: 4,
    img: "/products/4.jpg",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
  {
    id: 5,
    img: "/products/5.jpeg",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
  {
    id: 6,
    img: "/products/6.jpeg",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
  {
    id: 7,
    img: "/products/7.webp",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
  {
    id: 8,
    img: "/products/8.jpeg",
    title: "Up to 50% off on all men",
    description:
      "lorem Master the Kitchen with Ease: Unleash Your Inner Chef Today!",
  },
]);
</script>

<style scoped>
.wrapper {
  height: 200px;
  display: flex;
  gap: 20px;
}

.box {
  /* border: 5px solid #000; */
}

.box img {
  width: 100%;
  height: 100%;
}

.box1 img {
  object-fit: cover;
}

.box2 img {
  object-fit: contain;
}

.box3 img {
  object-fit: fill;
}

</style>
