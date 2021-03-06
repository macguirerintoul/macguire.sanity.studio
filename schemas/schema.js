// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import pick from './pick'
import article from './article'
import project from './project'
import videoEmbed from './videoEmbed'
import showcase from './showcase'
import cloudinaryImage from './cloudinaryImage'
import blockquote from './blockquote'
import page from './page'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    pick,
    article,
    project,
    videoEmbed,
    showcase,
    cloudinaryImage,
    blockquote,
    page,
  ]),
})
