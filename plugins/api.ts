export default defineNuxtPlugin((nuxtApp) => {
    const { session } = useUserSession()
    const baseUrl=useRuntimeConfig().public.apiBase ?? "";
    
    const api = $fetch.create({
      baseURL: baseUrl,
      onRequest({ request, options, error }) {
        if (session.value?.token) {
          // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
          options.headers.set('Authorization', `Bearer ${session.value?.token}`)
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await nuxtApp.runWithContext(() => navigateTo('/login'))
        }
      }
    })
  
    // Expose to useNuxtApp().$api
    return {
      provide: {
        api
      }
    }
  })
  