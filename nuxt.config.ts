// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'http://localhost:5200'
    }
  },
  extends: [
    './auth',
  ],
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@pinia/nuxt",
    
  ],
  image: {
    domains: ["https://rawabialqimma.com"],
  },
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Montserrat: true
    }
  },
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: "2024-11-27"
})