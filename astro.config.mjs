// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
      plugins: [tailwindcss()],
	},

  integrations: [react()],

  site: 'https://boughris-abdelmalek.github.io',
  base: '/ai-review-responses-landing-page',
});