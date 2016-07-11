/* @flow */

import React from 'react'

type Props = {
  children?: React$Element<any> | string,
  onClick: () => void,
}

const Button = (props: Props): React$Element<any> => {
  const { onClick, children } = props
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
