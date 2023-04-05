// https://nuxt.com/docs/api/configuration/nuxt-config
import appConfig from "./core/config"
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],

    buildModules: [
        '@nuxtjs/google-fonts',
    ],

    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
        ],
    },

    plugins: [
        '~/plugins/axios.ts',
        '~/plugins/server-init.server.ts',
    ],

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },

    css: [
        '@/assets/css/main.css',
    ],

    googleFonts: {
        families: {
            Rubik: true,
        }
    },

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json'
            },
            {
                code: 'ja',
                file: 'ja.json'
            },
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en',
    },

    runtimeConfig: {
        // The private keys which are only available within server-side

        // Keys within public, will be also exposed to the client-side
        public: {
            baseUrl: appConfig.FRONTEND_API_BASE_URL
        }
    }
})
