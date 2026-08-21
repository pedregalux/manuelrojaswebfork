import { defineConfig } from 'astro/config';

import markdoc from '@astrojs/markdoc';

import react from '@astrojs/react';

import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://manuelrojas.cl',
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true,
    },
  }),
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  integrations: [
    markdoc(),
    react(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    alpinejs(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});