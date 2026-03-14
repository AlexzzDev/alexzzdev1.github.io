import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alexzzdev.github.io', // Cambiado a alexzzdev
  base: '/',
  integrations: [tailwind()]
});
