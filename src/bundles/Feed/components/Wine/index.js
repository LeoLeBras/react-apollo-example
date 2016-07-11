/* @flow */

import React from 'react'
import Card from '@components/Card'
import Button from '@components/Button'

type Props = Wine & {
  onClick: () => void,
}

const Actions = (props: Props): React$Element<any> => {
  const { onClick } = props
  return (
    <Button onClick={onClick}>
      See
    </Button>
  )
}

const Wine = (props: Props): React$Element<any> => {
  const { name } = props
  return (
    <Card
      title={name}
      actions={<Actions {...props} />}
    />
  )
}

export default Wine
