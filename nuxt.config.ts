// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: ['./assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  modules: ['nuxt-vuefire', "@nuxtjs/tailwindcss", "@nuxt/fonts"],
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    families: [
      { name: 'Poppins', provider: 'google' },
      { name: 'Inter Tight', provider: 'google' },
      { name: "Luxurious Script", provider: "google"}
    ]
  },
  vuefire: {
    config: {
      apiKey: "AIzaSyBlZAG6J5lG_Cd50LM8v1UBCstI6iyZQ9Y",
      authDomain: "candlepillow-com.firebaseapp.com",
      projectId: "candlepillow-com",
      storageBucket: "candlepillow-com.firebasestorage.app",
      messagingSenderId: "722919199292",
      appId: "1:722919199292:web:ed70d279c2b431c5d4e939",
      measurementId: "G-25XGNMD568"
    },
    auth: {
      enabled: true,
      sessionCookie: false,
    }
  }
})