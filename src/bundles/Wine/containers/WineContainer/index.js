/* @flow */

import React, { Component } from 'react'
import Loading from '@Wine/components/Loading'
import Button from '@components/Button'
import type { State, Props } from './types'
import connector from './connector'

class WineContainer extends Component {

  state: State = {
    state: 'read',
  }

  props: Props

  shouldComponentUpdate(nextProps) {
    const { loading } = nextProps.data
    return !loading
  }

  onUpdateWine = (): void => {
  }

  onDeleteWine = (): void => {
    console.log('delete !')
  }

  onHandleState = (): void => {
    const { state } = this.state
    this.setState({
      state: state == 'read' ? 'update': 'read',
    })
  }

  render() {
    const { loading, wines } = this.props.data
    const { state } = this.state
    return (
      <div>
        {loading && <Loading />}
        {!loading &&
          wines.map((wine, index) => (
            <div key={index}>
              {}
              <h1>{wine.name}</h1>
              <p>{wine.flavors}</p>
              <Button onClick={() => {
                console.log('upadateg')
              }}>
                update
              </Button>
              <Button onClick={() => this.onDeleteWine()}>
                delete
              </Button>
            </div>
          ))
        }
      </div>
    )

  }

}

export default connector(WineContainer)
