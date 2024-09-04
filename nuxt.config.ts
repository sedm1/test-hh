// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [['@nuxtjs/google-fonts', {
      families: {
        Inter: true,
      }
  } ], '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      Api: 'https://jsonplaceholder.typicode.com/posts'
    }
  }
})