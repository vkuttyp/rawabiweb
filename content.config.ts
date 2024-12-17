import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const commonSchema = z.object({})

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    content_ar: defineCollection({
      type: 'page',
      source: {
        include: 'ar/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
   
  },
})
