// https://nuxt.com/docs/api/configuration/nuxt-config
import appConfig from "./core/config";

export default defineNuxtConfig({
  pages: true,

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@element-plus/nuxt",
    "nuxt-typed-router",
    "@nuxt/image-edge",
  ],

  buildModules: ["@nuxtjs/google-fonts"],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },

  plugins: ["~/plugins/api.ts", "~/plugins/server-init.server.ts"],

  css: ["@/assets/css/main.css"],

  googleFonts: {
    families: {
      Rubik: true,
    },
  },

  elementPlus: {},

  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ja",
        file: "ja.json",
      },
    ],
    langDir: "locales",
    defaultLocale: "en",
  },

  runtimeConfig: {
    // The private keys which are only available within server-side

    // Keys within public, will be also exposed to the client-side
    public: {
      baseUrl: appConfig.FRONTEND_API_BASE_URL,
    },
  },
});
