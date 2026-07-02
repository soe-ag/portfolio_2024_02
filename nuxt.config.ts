// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primevue/themes/aura";

const isDefined = <T>(value: T | undefined): value is T => value !== undefined;

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      tmdbApiKey: process.env.TMDB_API_KEY,
    },
  },

  modules: [
    "@nuxt/image",
    process.env.VITEST ? undefined : "@unocss/nuxt",
    "@primevue/nuxt-module",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
  ].filter(isDefined),
  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "dark",
  },
  unocss: {
    nuxtLayers: true,
  },
  primevue: {
    usePrimeVue: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".dark",
          // cssLayer: false,
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
});
