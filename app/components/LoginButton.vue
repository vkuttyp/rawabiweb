<script setup lang="ts">
const { $auth } = useNuxtApp();
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
const items = [{
  label: 'Profile',
  icon: 'i-lucide-user'
}, {
  label: 'Billing',
  icon: 'i-lucide-credit-card'
}, {
  label: 'Logout',
  icon: 'i-lucide-cog', 
  onSelect: () => {
        authLogout();
    }
}]
// const items = [
//   [{
//     label:'ddfdfd', //$auth?.session?.value?.displayName,
//     slot: 'account',
//     disabled: true,    
    
//   }],  [{
//     label: 'Sign out',
//     icon: 'i-heroicons-arrow-left-on-rectangle',
//     click: () => {
//         authLogout();
//     }
//   }]
// ]
</script>

<template>
    <div v-if="$auth.session.value?.jwtToken">
      <UDropdownMenu v-model:open="open" :items="items" :ui="{ content: 'w-48' }">
    <UButton :label="$auth.session.value.displayName" color="neutral" variant="outline" icon="i-lucide-user" />
  </UDropdownMenu>
    </div>
  <div v-else>
   <LoginForm />
  </div>
</template>

