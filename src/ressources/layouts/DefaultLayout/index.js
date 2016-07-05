/* @flow */

import React from 'react'

type Props = {
  children: React$Element,
}

const DefaultLayout = (props: Props): React$Element => {
  const { children } = props
  return (
    <div>
      Layout
      {children}
    </div>
  )
}

export default DefaultLayout
