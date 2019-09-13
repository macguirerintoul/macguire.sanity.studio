export default {
  title: 'Showcase',
  name: 'showcase',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      title: 'Alt text',
      name: 'alt',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Cloudinary ID',
      name: 'cloudinaryID',
      type: 'string',
    },
    {
      title: 'Orientation',
      name: 'orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Vertical', value: 'vertical' },
          { title: 'Media Left', value: 'media-left' },
          { title: 'Media Right', value: 'media-right' },
        ],
        layout: 'radio',
      },
    },
  ],
}
