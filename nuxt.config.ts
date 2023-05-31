// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss' , '@nuxtjs/color-mode' , '@vueuse/nuxt'],
    colorMode: {
        preference: 'light', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
        fallback: 'light', // fallback theme
        
      }
})
