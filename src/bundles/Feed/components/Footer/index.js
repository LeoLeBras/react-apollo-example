/* @flow */

import React from 'react'
import Button from '@components/Button'
import styles from './Footer'

type Props = {
  showAll: boolean,
  onShowAll: () => void,
}

const Footer = (props: Props): React$Element<any> => {
  const { onShowAll, showAll } = props
  return (
    <div className={styles.container}>
      <Button onClick={onShowAll}>
        {showAll ? 'Reduce' : 'Show all'}
      </Button>
    </div>
  )
}

export default Footer
