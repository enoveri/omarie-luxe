import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
      description: 'Select a client from the list',
    }),
    defineField({
      name: 'name',
      title: 'Client Name (Legacy)',
      type: 'string',
      description: 'Only used if no client is selected above',
      hidden: ({document}) => !!document?.client,
    }),
    defineField({
      name: 'event',
      title: 'Event Type',
      type: 'string',
      placeholder: 'e.g., Proposal Setup, Baby Shower',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      clientName: 'client.name',
      legacyName: 'name',
      subtitle: 'event',
      quote: 'quote',
    },
    prepare({clientName, legacyName, subtitle, quote}) {
      return {
        title: clientName || legacyName || 'No name',
        subtitle,
        description: quote?.substring(0, 60) + '...',
      }
    },
  },
})
