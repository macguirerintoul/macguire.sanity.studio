const marks = require('../util/externalLinkMarks.js')

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: marks,
        },
      ],
    },
  ],
}
