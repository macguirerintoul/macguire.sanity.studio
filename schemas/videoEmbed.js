import React from 'react'
import Vimeo from 'react-vimeo'
import YouTube from 'react-youtube'

const Preview = ({ value }) => {
  if (value.platform === 'Vimeo') {
    return <Vimeo videoId={value.id} />
  } else {
    return <YouTube id={value.id} />
  }
}

export default {
  name: 'videoEmbed',
  type: 'object',
  title: 'Video Embed',
  preview: {
    select: {
      id: 'id',
      platform: 'platform',
    },
    component: Preview,
  },
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID',
    },
    { name: 'platform', type: 'string', title: 'Platform' },
  ],
}
