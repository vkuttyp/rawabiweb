<template>
  <div>
    <UModal prevent-close title="LOGIN">
    <UButton label="Login" color="neutral" variant="subtle" />

    <template #body>
      <UContainer :ui="{ constrained: 'max-w-xl' }">
        <UForm
          :state="loginForm"
          @submit="authLogin(loginForm.userName, loginForm.password).catch(onError)"
        >
          <UCard>
            <template #header>
              <div class="flex">
                <UIcon
                  class="w-12 h-12 mr-2 bg-primary"
                  name="i-lucide-user"
                />
                <div>
                  <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  Login now
                  </p>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Log in to your account.
                  </p>
                </div>
              </div>
            </template>
            <UFormField label="User Name" required>
    <UInput v-model="loginForm.userName" icon="i-lucide-user" placeholder="Enter your User Name"/>
    </UFormField>
  
    <UFormField label="Password" required>
      <UInput
    v-model="loginForm.password"
    placeholder="Password"
    :type="show ? 'text' : 'password'"
    :ui="{ trailing: 'pe-1' }"
  >
    <template #trailing>
      <UButton
        color="neutral"
        variant="link"
        size="sm"
        :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
        aria-label="show ? 'Hide password' : 'Show password'"
        :aria-pressed="show"
        aria-controls="password"
        @click="show = !show"
      />
    </template>
  </UInput>
    </UFormField>
           

            <template #footer>
              <UButton
                class="w-full justify-center"
                type="submit"
              >
                Log in
              </UButton>
            </template>
          </UCard>
        </UForm>
  </UContainer>
    </template>
  </UModal>
  
  </div>
 
</template>

<script setup lang="ts">
useHead({
  title: 'Login Page',
})


const loginForm = ref({
  userName: '',
  password: '',
})

const show = ref(false)

const toast = useToast()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onError = (err: any) => {
  toast.add({
    color: 'red',
    title: 'Error',
    description: err?.data.message ?? err?.message ?? err,
  })
}
</script>

<style scoped>

</style>