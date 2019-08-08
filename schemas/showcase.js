export default {
  title: 'Showcase',
  name: 'showcase',
  type: 'object',
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'text',
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
