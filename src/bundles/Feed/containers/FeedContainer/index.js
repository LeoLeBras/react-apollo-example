/* @flow */

import React, { Component } from 'react'
import Button from '@components/Button'
import Loading from '@Feed/components/Loading'
import List from '@Feed/components/List'
import Wine from '@Feed/components/Wine'
import Footer from '@Feed/components/Footer'
import connector from './connector'

type Props = {
  data: {
    loading: boolean,
    wines: Array<any>,
    refetch: () => void,
  },
  router: {
    replace: (location: string) => void,
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

  onShowAll(): void {
    this.props.data.refetch({
      limit: this.state.showAll ? 2 : 4,
    })
    this.setState({
      showAll: !this.state.showAll,
    })
  }

  shouldComponentUpdate(nextProps): boolean {
    return this.props.data.loading !== nextProps.data.loading
  }

  render() {
    const { loading, wines } = this.props.data
    const { replace } = this.props.router
    const { showAll } = this.state

    return (
      <div>
        {loading && <Loading />}
        {!loading &&
          <List>
            {wines.map((wine, index) => (
              <Wine
                key={index}
                {...wine}
                onClick={() => replace(`wine/${wine.id}`)}
              />
            ))}
            <Footer
              showAll={showAll}
              onShowAll={() => this.onShowAll()}
            />
          </List>
        }
      </div>
    )
  }

}

export default connector(FeedContainer)
