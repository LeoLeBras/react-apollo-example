/* @flow */

import React from 'react'

type Props = {
  children?: React$Element<any>,
}

const Form = (props: Props) => {
  const { children } = props
  return (
    <form>
      {children}
    </form>
  )
}
