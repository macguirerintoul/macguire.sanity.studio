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
      title: 'File',
      name: 'content',
      type: 'file',
    },
    {
      title: 'Orientation',
      name: 'orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Vertical', value: 'vertical' },
          { title: 'Media Left', value: 'mediaLeft' },
          { title: 'Media Right', value: 'mediaRight' },
        ],
        layout: 'radio',
      },
    },
  ],
}
