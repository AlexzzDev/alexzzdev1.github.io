import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alexzzdev.github.io',
  base: '/alexzzdev1.github.io',
  integrations: [tailwind()]
});
