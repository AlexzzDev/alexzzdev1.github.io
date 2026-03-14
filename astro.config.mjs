import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Ejemplo: https://AlexzDev.github.io
  site: 'https://alexzzdev.github.io',
  base: '/NOMBRE_REPO', 
  integrations: [tailwind()],
});

