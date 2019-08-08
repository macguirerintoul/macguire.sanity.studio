export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    { title: 'Short Description', name: 'shortDescription', type: 'string' },
    { title: 'Long Description', name: 'longDescription', type: 'text' },
    { title: 'Order', name: 'order', type: 'number' },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'string',
      description: 'Cloudinary ID of the featured image',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    },
    { title: 'For', name: 'for', type: 'string' },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Tools',
      name: 'tools',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'cloudinaryImage',
        },
        {
          type: 'blockquote',
        },
        {
          type: 'videoEmbed',
        },
        {
          type: 'showcase',
        },
      ],
    },
  ],
}
