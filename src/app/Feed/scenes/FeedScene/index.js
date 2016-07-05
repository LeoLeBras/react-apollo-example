/* @flow */

import React from 'react'
import FeedContainer from '@Feed/containers/FeedContainer'
import Title from '@components/Title'

type Props = {}

const FeedScene = (props: Props): React$Element => {
  return (
    <FeedContainer {...props} />
  )
}

export default FeedScene
