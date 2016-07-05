/* @flow */

import React, { Component } from 'react'
import hoc from './hoc'

type Props = {
  params: {
    wineId: number,
    data: {
      wines: {

      }
    }
  }
}

type State = {}

class WineContainer extends Component {
  render(): React$Element {
    const { wineId } = this.props.params
    const { wines, loading } = this.props.data
    console.log('wine #', wineId, ':', loading ? 'loading ...' : 'loaded')
    return (
      <div>
        {loading &&
          <div>loading ...</div>
        }
        {!loading &&
          <div>
            {wines.map((wine, index) => (
              <div key={index}>{wine.name}</div>
            ))}
          </div>
        }
      </div>
    )
  }
}

export default hoc(WineContainer)
