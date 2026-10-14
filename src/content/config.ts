import { defineCollection, z } from 'astro:content';

const guideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    pubDate: z.union([z.string(), z.date()]).optional(),
  }),
});

const rankCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    pubDate: z.union([z.string(), z.date()]).optional(),
  }),
});

export const collections = {
  'guide': guideCollection,
  'rank': rankCollection,
};
