import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

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
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      wrap: true,
    },
  },
  integrations: [tailwind(), react(), mdx(), sitemap()],
});
