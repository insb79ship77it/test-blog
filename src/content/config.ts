import { defineCollection, z } from 'astro:content';

const guideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    pubDate: z.date().optional(),
  }),
});

export const collections = {
  'guide': guideCollection,
};
