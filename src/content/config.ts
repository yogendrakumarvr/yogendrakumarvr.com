import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    draft: z.boolean().optional(),
    datePublished: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
