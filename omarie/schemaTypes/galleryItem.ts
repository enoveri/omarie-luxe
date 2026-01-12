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
      name: 'subcategory',
      title: 'Picnic Subcategory',
      type: 'string',
      description: 'Only applicable when category is "Picnics"',
      options: {
        list: [
          {title: 'Décor', value: 'Décor'},
          {title: 'Food', value: 'Food'},
          {title: 'Drinks', value: 'Drinks'},
          {title: 'Games', value: 'Games'},
        ],
        layout: 'radio',
      },
      hidden: ({document}) => document?.category !== 'Picnics',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'e.g., Entebbe Botanical Gardens',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'Name of the client for this event (optional)',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description:
        'Add more images for this gallery item (these will be shown in a lightbox/carousel)',
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
