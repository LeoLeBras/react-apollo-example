/* @flow */

import React from 'react'
import { Link } from 'react-router'
import styles from './Wine'

type Props = {
  id: number,
  name: string,
}

const Wine = (props: Props): React$Element => {
  const { id, name } = props
  return (
    <div className={styles.container}>
      {name}
      <div>
        <Link to={`/wine/${id}`}>
          See
        </Link>
      </div>
    </div>
  )
}

export default Wine
