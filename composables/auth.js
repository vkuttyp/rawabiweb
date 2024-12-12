import { useFetch } from '#app'

export function useAuth() {
  const { data: user, error, isLoading } = useFetch('/api/auth/user')

  const login = async (credentials) => {
    try {
      const { data } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: credentials,
      })
      // Store the token globally or in local storage
      useCookie('token').value = data.token
      return data
    } catch (error) {
      // Handle error, e.g., display error message
      throw error
    }
  }

  const logout = async () => {
    try {
      await useFetch('/api/auth/logout', { method: 'POST' })
      // Clear the token
      useCookie('token').value = null
    } catch (error) {
      // Handle error, e.g., display error message
      throw error
    }
  }

  return {
    user,
    error,
    isLoading,
    login,
    logout,
  }
}