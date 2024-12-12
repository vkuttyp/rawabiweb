<template>
  <div>
    <UModal prevent-close title="Modal prevent close">
    <UButton label="Open" color="neutral" variant="subtle" />

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
                  name="i-heroicons-user"
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

            <UFormGroup
              label="User Name"
              name="userName"
              class="mb-3"
              required
            >
              <UInput
                v-model="loginForm.userName"
                placeholder="User Name"
                icon="i-heroicons-envelope"
              />
            </UFormGroup>
            <UFormGroup
              label="Password"
              name="password"
              required
            >
              <UInput
                v-model="loginForm.password"
                placeholder="password"
                icon="i-heroicons-lock-closed"
                :type="hidden ? 'password' : 'text'"
                :ui="{ icon: { trailing: { pointer: '' } } }"
              >
                <template #trailing>
                  <UButton
                    :icon="hidden ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                    variant="link"
                    :padded="false"
                    @click="hidden = !hidden"
                  />
                </template>
              </UInput>
            </UFormGroup>

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
const tabs = [
  {
    label: 'Log In',
    slot: 'login',
  },
  // {
  //   label: 'Register',
  //   slot: 'register',
  // },
]

const loginForm = ref({
  userName: '',
  password: '',
})
const registerForm = ref({
  email: 'arash@gmail.com',
  password: 'password',
})
const hidden = ref(true)

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