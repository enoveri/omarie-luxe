import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Picnics', value: 'Picnics'},
          {title: 'Proposals', value: 'Proposals'},
          {title: 'Baby Showers', value: 'Baby Showers'},
          {title: 'Paint & Sip', value: 'Paint & Sip'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'e.g., Entebbe Botanical Gardens',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare({title, category, media}) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})
