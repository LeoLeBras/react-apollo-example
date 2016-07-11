/* @flow */

import React, { cloneElement } from 'react'

type Props = {
  title: string,
  actions?: React$Element<any>,
}

const Card = (props: Props): React$Element<any> => {
  const { title, actions } = props
  return (
    <div>
      <h2>{title}</h2>
      {actions && cloneElement(actions, {})}
    </div>
  )
}

export default Card
