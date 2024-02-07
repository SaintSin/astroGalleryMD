import { defineCollection, z } from "astro:content";

const galleries = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          title: z.string().optional(),
          description: z.string().optional(),
        }),
      ),
    }),
});

export const collections = {
  galleries: galleries,
};
