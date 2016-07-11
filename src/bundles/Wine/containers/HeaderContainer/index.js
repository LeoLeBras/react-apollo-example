/* @flow */

import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Button from '@components/Button'

type Props = {
  router: {
    replace: () => void,
  },
}

class HeaderContainer extends Component {
  props: Props
  render() {
    const { replace } = this.props.router
    return (
      <Button onClick={() => replace(`/`)}>
        Go back feed
      </Button>
    )
  }
}

export default withRouter(HeaderContainer)
