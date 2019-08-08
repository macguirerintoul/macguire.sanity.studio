import cloudinaryImage from './cloudinaryImage'
import slugify from '../util/slugify'
const marks = require('../util/externalLinkMarks.js')

export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: slugify,
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block', marks: marks }, { type: 'cloudinaryImage' }],
    },
  ],
}
