export const useAuth = () => useNuxtApp().$auth

export const authLogin = async (userName: string, password: string) => {
  await $fetch('/api/auth/login', {
    method: 'POST',
    body: {
      userName: userName,
      password: password,
    },
  })
  useAuth().redirectTo.value = null
  await useAuth().updateSession()
  await navigateTo(useAuth().redirectTo.value || '/')
}

export const authRegister = async (userName: string, password: string) => {
  await $fetch('/api/auth/register', {
    method: 'POST',
    body: {
      userName: userName,
      password: password,
    },
  })
  return await authLogin(userName, password)
}

export const authLogout = async () => {
  await $fetch('/api/auth/logout', {
    method: 'POST',
  })
  await useAuth().updateSession()
}
