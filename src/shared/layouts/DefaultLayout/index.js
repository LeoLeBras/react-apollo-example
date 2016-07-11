/* @flow */

import React, { Component } from 'react'
import styles from './DefaultLayout'

type Props = {
  children: React$Element<any>,
}

class DefaultLayout extends Component {
  props: Props
  render() {
    const { children } = this.props
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          react-apollo-example
        </header>
        {children}
      </div>
    )
  }
}

export default DefaultLayout
