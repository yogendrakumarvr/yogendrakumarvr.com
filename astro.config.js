import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://yogendrakumarvr.com/',
  output: 'server',
  adapter: vercel({
    cleanUrls: true,
    analytics: true,
  }),
  integrations: [tailwind(), react(), mdx(), sitemap()],
});
