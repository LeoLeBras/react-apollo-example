/* @flow */

import React, { Component } from 'react'
import Wine from '@Feed/components/Wine'
import hoc from './hoc'

type Props = {
  data: {
    loading: boolean,
    wines: Array<any>
  },
}

type State = {
  showAll: boolean,
}

class FeedContainer extends Component {

  state: State = {
    showAll: false,
  }

  props: Props

  onShowAll() {
    this.props.data.refetch({
      limit: this.state.showAll ? 2 : 4,
    })
    this.setState({
      showAll: !this.state.showAll,
    })
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data.loading !== nextProps.data.loading
  }

  render(): React$Element {
    const { loading, wines } = this.props.data
    const { showAll } = this.state
    return (
      <div>
        {loading &&
          <div>loading ...</div>
        }
        {!loading &&
          <div>
            {wines.map((wine, index) => (
              <Wine
                key={index}
                {...wine}
              />
            ))}
            <button onClick={::this.onShowAll}>
              {showAll ? 'Limit to 2 item' : 'Show all'}
            </button>
          </div>
        }
      </div>
    )
  }

}

export default hoc(FeedContainer)
