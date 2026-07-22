import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pairings = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pairings' }),
  schema: z.object({
    matchNo: z.number(),
    watch: z.string(),
    watchDetail: z.string().optional(),
    car: z.string(),
    eyebrow: z.string(),
    verdict: z.string(),
    hook: z.string(),
    filedUnder: z.string().optional(),
    // one-line teaser shown in the "Filed" index on the homepage
    teaser: z.string().optional(),
    tape: z.array(
      z.object({
        spec: z.string(),
        left: z.string(),
        right: z.string(),
      })
    ),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pairings };
