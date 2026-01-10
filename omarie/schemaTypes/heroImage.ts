import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroImage',
  title: 'Hero Images',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order in carousel (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
      order: 'order',
    },
    prepare({title, media, order}) {
      return {
        title,
        subtitle: `Slide ${order + 1}`,
        media,
      }
    },
  },
})
