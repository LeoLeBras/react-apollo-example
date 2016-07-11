/* @flow */

import React from 'react'

type Props = {
  children?: React$Element<any>,
}

const List = (props: Props): React$Element<any> => {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}

export default List
