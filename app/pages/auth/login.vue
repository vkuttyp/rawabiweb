<template>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        try {
          await this.$auth.login({ data: { email: this.email, password: this.password } })
          // Redirect to home page or desired page
          this.$router.push('/')
        } catch (error) {
          console.error(error)
          // Handle error, e.g., display error message
        }
      }
    }
  }
  </script>