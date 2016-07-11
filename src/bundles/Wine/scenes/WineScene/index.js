/* @flow */

import React, { Component } from 'react'
import HeaderContainer from '@Wine/containers/HeaderContainer'
import WineContainer from '@Wine/containers/WineContainer'

type Props = any

class WineShowScene extends Component {
  props: Props
  render() {
    return (
      <div>
        <HeaderContainer />
        <WineContainer {...this.props} />
      </div>
    )
  }
}

export default WineShowScene
