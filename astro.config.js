import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO - Update site URL with actual URL at the end.
  site: 'http://localhost:4321/',
  integrations: [tailwind(), react(), sitemap()],
});
