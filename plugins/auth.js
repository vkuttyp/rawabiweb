// import { createAuth } from 'nuxt-auth-utils'

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(createAuth({
//     strategies: {
//       local: {
//         token: {
//           property: 'token',
//           global: true, // Store the token globally
//         },
//         user: {
//           property: 'user',
//           // ... other user properties
//         },
//         endpoints: {
//           login: { url: '/api/auth/login', method: 'post' },
//           logout: { url: '/api/auth/logout', method: 'post' },
//           user: { url: '/api/auth/user', method: 'get' },
//         },
//       },
//     },
//   }))
// })