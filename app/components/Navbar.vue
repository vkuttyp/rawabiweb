<template>
  <div dir="ltr"
    class="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40"
  >
    <div class="topbar bg-primary p-2">
      <div class="logo">
        <MyLink to="/" class="flex gap-1 items-center font-bold text-1xl">
          <NuxtImg 
            width="56px"
            densities="x1"
            src="/logo.png"
            alt="logo"
            
            format="webp"
          />
          <span class="text-3xl font-bold">Rawabi مؤسسة روابي</span>
        </MyLink>
      </div>
     
      <div>
        <LoginButton />
      </div>
      <div>
        <ColorScheme><USelect v-model="$colorMode.preference" :items="['system', 'light', 'dark']" /></ColorScheme>
      </div>
      <div>
       <LanguageSelector />
      </div>
    </div>
    <!--Lower navbar -->
    
    <div class="flex justify-center">
      <div class="px-4">
        <UButtonGroup>
          <UButton
            v-for="menu of menuItems"
            :key="menu.id"
            :label="`${menu.name}`"
            color="neutral"
            :variant="menu.id === selectedMenu?.id ? 'solid' : 'outline'"
            class="px-4"
            :to="localePath(menu.to)"
            @click="selectedMenu=menu"
          />
        </UButtonGroup>
      </div>
      
      <ul class="flex items-center gap-4">
        
        <li class="group relative cursor-pointer">
          <MyLink to="/" class="flex items-center gap-[2px] py-2">
            Trending items
            <span>
              <Icon
                name="mdi:chevron-down"
                class="transition-all duration-200 group-hover:rotate-180"
              />
            </span>
          </MyLink>
          <div
            class="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md"
          >
            <ul>
              <li v-for="sub in dropDownLinks" :key="sub.id">
                <MyLink
                  :to="sub.to"
                  class="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                >
                  {{ sub.name }}
                </MyLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const selectedMenu=ref();
// function navigateTo((path:string) {
//   return localePath(path);
// } , {
//   watch: [localePath],
// });

const menuItems = ref([
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About",
    to: "/about",
  },
  {
    id: 3,
    name: "Products",
    to: "/products",
  },
  {
    id: 4,
    name: "New",
    to: "/blogs",
  },
]);
const dropDownLinks = ref([
  {
    id: 1,
    name: "Trending products",
    to: "/products",
  },
  {
    id: 2,
    name: "Best selling",
    to: "/about"
  },
  {
    id: 3,
    name: "Top rated",
    to: "/blogs"
  },
]);
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5px;
}
.logo {
  margin-right: auto;
}
</style>
