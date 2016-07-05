/* @flow */

import React, { Component } from 'react'

type Props = {
  children: React$Element,
}

class DefaultLayout extends Component {
  props: Props
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default DefaultLayout
