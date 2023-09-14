import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // TODO - Update site URL with actual URL at the end.
  site: 'http://localhost:4321/',
  output: 'server',
  adapter: vercel({
    cleanUrls: true,
    // TODO : Enable analytics.
    // analytics: true,
  }),
  integrations: [tailwind(), react(), sitemap()],
});
