// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/image-edge'],
  content: {
    documentDriven: true
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  image: {
    provider: "ipx"
}
})
