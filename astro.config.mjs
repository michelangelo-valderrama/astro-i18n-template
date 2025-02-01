// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

import { defaultLocale, locales } from './src/i18n'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
  integrations: [react()]
})
