import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alexzzdev1.github.io',
  base: '/', // Asegúrate de que esto sea solo una barra o no esté
  integrations: [tailwind()],
});
