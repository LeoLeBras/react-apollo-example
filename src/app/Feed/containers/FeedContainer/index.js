/* @flow */

import React, { Component } from 'react'
import hoc from './hoc'

class FeedContainer extends Component {
  state: State
  props: Props
  render(): React$Element {
    console.log(this.props)
    return (
      <div>
        FeedContainer
      </div>
    )
  }
}

export default hoc(FeedContainer)
